// import axios from "axios";
import { useMutation } from "react-relay";
import DeletePostMutation from "../graphql/mutations/DeletePostMutation";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";


const DeletePostButton = ({ postId, currentPosts, setCurrentPosts }) => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [commitMutation, isMutationInFlight] = useMutation(DeletePostMutation);
    
    const handleDelete = (postId) => {
        // axios.delete(`http://localhost:3000/users/${user.id}/posts/${postId}`, { headers: { "Authorization": `Bearer ${user.token}` } })
        // .then((response) => {
        //     if(response.status === 200) {
        //         setCurrentPosts(currentPosts.filter(post => post.id !== postId))
        //     }
        //     else {
        //         console.error('Error deleting resource. Status code: ', response.status);
        //     }
        // })
        // .catch((error) => {
        //     console.error('Error deleting resource:', error);
        // });

        commitMutation({
            variables: {
                input: {
                    post: {
                        userId: user.id,
                        postId: postId
                    }
                }
            },
            onCompleted: () => {
                setCurrentPosts(currentPosts.filter(post => post.id !== postId))
                navigate(`/users/${user.id}/home`);
            },
            onError: (error) => {
                console.log("Error:", error)
            }
        })
    }
    
    return ( 
        <button className="custom-button" onClick={() => handleDelete(postId)} disabled={isMutationInFlight}>Delete</button>
     );
}
 
export default DeletePostButton;