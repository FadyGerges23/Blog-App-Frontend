// import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useLazyLoadQuery, useMutation } from 'react-relay';
import EditPostMutation from "../graphql/mutations/EditPostMutation";
import PostForm from "./PostForm";
import GetPostQuery from "../graphql/queries/GetPostQuery";


const EditPost = () => {
    const navigate = useNavigate();
    const { id: postId } = useParams()
    const { user } = useContext(UserContext);
    const [commitMutation, isMutationInFlight] = useMutation(EditPostMutation);
    const data = useLazyLoadQuery(GetPostQuery, {userId: user.id, postId: postId}, { fetchPolicy: 'network-only' });
    const {title, body} = data.post;
    const [errors, setErrors] = useState([]);
    const initialValues = {
        title: title,
        body: body
    }

    useEffect(() => {
        if(!user) {
            navigate(`/users/sign_in`);
        }
    }, [user, navigate]);

    const handleSubmit = (values) => {

        // axios.put(`http://localhost:3000/users/${user.id}/posts/${postId}`, values)
        // .then(response => {
        //     if(response.status === 200) {
        //         navigate(`/users/${user.id}/home`);
        //     }
        //     else {
        //         console.log("Error occurred while trying to edit post. Status code: ", response.status)
        //     }
        // })
        // .catch(error => {
        //     console.error('Error:', error.response.data.errors);
        //     setErrors(error.response.data.errors);
        // });

        const postData = { post: {...values, userId: user.id, postId: postId} };

        commitMutation({
            variables: {
                input: postData
            },
            onCompleted: (response) => {
                if(response.editPost.errors.length > 0) {
                    setErrors(response.editPost.errors)
                } else {
                    navigate(`/users/${user.id}/home`);
                }
            },
            onError: (error) => {
                console.log("Error:", error)
                setErrors(["Can't edit post!"])
            }
        })
    }
    
    return (
        <PostForm title="Edit Post" initialValues={initialValues} isMutationInFlight={isMutationInFlight} errors={errors} handleSubmit={handleSubmit} />
     );
}
 
export default EditPost;