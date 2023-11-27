// import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useMutation, useQueryLoader } from 'react-relay';
import CreatePostMutation from "../graphql/mutations/CreatePostMutation";
import PostForm from "./PostForm";
import GetCategoriesQuery from "../graphql/queries/GetCategoriesQuery";
import GetTagsQuery from "../graphql/queries/GetTagsQuery";


const CreatePost = () => {
    const navigate = useNavigate();
    const [commitMutation, isMutationInFlight] = useMutation(CreatePostMutation);
    const { user } = useContext(UserContext);
    const [errors, setErrors] = useState([]);
    
    const [
        getCategoriesQueryRef,
        loadGetCategoriesQuery,
      ] = useQueryLoader(GetCategoriesQuery);

    const [
        getTagsQueryRef,
        loadGetTagsQuery,
      ] = useQueryLoader(GetTagsQuery);
    
      const initialValues = {
        title: "",
        body: "",
        category: null,
        tags: null
    }

    useEffect(() => {
        if(!user) {
            navigate(`/users/sign_in`);
        }
        loadGetCategoriesQuery();
        loadGetTagsQuery();
    }, [user, navigate, loadGetCategoriesQuery, loadGetTagsQuery]);

    const handleSubmit = (values) => {

        // axios.post(`http://localhost:3000/users/${user.id}/posts`, values)
        // .then(response => {
        //     if(response.status === 201) {
        //         navigate(`/users/${user.id}/home`);
        //     }
        //     else {
        //         console.log("Error occurred while trying to create post. Status code: ", response.status)
        //     }
        // })
        // .catch(error => {
        //     console.error('Error:', error.response.data.errors);
        //     setErrors(error.response.data.errors);
        // });

        const postData = { post: {...values, userId: user.id} };

        commitMutation({
            variables: {
                input: postData
            },
            onCompleted: (response) => {
                if(response.createPost.errors.length > 0) {
                    setErrors(response.createPost.errors)
                } else {
                    navigate(`/users/${user.id}/home`);
                }
            },
            onError: (error) => {
                console.log("Error:", error)
                setErrors(["Can't create post!"])
            }
        })
    }
    
    return (
        <div>
            {
                getCategoriesQueryRef && getTagsQueryRef &&
                    <PostForm 
                        title="Create Post" 
                        initialValues={initialValues} 
                        errors={errors} 
                        isMutationInFlightCategories={isMutationInFlight} 
                        handleSubmit={handleSubmit} 
                        categoriesQueryRef={getCategoriesQueryRef}
                        tagsQueryRef={getTagsQueryRef}
                    />
            }
        </div>
     );
}
 
export default CreatePost;