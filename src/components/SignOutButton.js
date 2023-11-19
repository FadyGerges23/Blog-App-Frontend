// import axios from 'axios';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Cookies from 'js-cookie';
import { useMutation } from 'react-relay';
import SignOutButtonMutation from "../graphql/mutations/SignOutButtonMutation";


const SignOutButton = () => {
    const navigate = useNavigate();
    const { signUser } = useContext(UserContext);
    const [commitMutation, isMutationInFlight] = useMutation(SignOutButtonMutation);

    const handleSignOut = () => {
        // axios.delete("http://localhost:3000/users/sign_out")
        // .then((response) => {
        //     if(response.status === 200) {
        //         signUser(null);
        //         Cookies.remove('user');
        //         navigate('/');
        //     }
        //     else {
        //         console.error('Error deleting resource. Status code: ', response.status);
        //     }
        // })
        // .catch((error) => {
        //     console.error('Error deleting resource:', error);
        // });
        
        commitMutation({
            onCompleted: () => {
                signUser(null);
                Cookies.remove('user');
                navigate('/');
            },
            onError: (error) => {
                console.log("Error:", error)
            }
        })
    }

    return ( 
        <button className="sign_out_button" onClick={handleSignOut} disabled={isMutationInFlight}> Sign Out</button>
     );
}
 
export default SignOutButton;