import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import { useLazyLoadQuery } from "react-relay";
import CurrentUserQuery from "../graphql/queries/CurrentUserQuery";


const ViewProfile = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useContext(UserContext)
    const data = useLazyLoadQuery(CurrentUserQuery, {}, { fetchPolicy: 'network-only' });
    const {email, username, displayName, error} = data.currentUser;
    
    
    useEffect(() => {
        if(id !== user.id) {
            navigate("/unauthorized")
        }
        if(error) {
            navigate('/users/sign_in');
        }
    }, [id, user, error, navigate]);

    const handleEdit = () => {
        navigate(`/users/${user.id}/edit_profile`)
    }

    return ( 
        <div className="profile-container">
            <div className="profile content">
                <h2 className="heading">User Profile</h2>
                <div className="user-info">
                    <span className="info-label">Email:</span>
                    <span className="info-value">{email}</span>
                    <br />
                    <br />
                    <span className="info-label">Username:</span>
                    <span className="info-value">{username}</span>
                    <br />
                    <br />
                    <span className="info-label">Display Name:</span>
                    <span className="info-value">{displayName}</span>
                </div>
                <button className="edit-button" onClick={handleEdit}>Edit</button>
            </div>
        </div>
     );
}
 
export default ViewProfile;