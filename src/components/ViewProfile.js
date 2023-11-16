import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const ViewProfile = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext)
    
    useEffect(() => {
        if(!user) {
            navigate('/sign_in');
        }
    }, [user, navigate]);

    const handleEdit = () => {
        navigate('/edit_profile')
    }

    return ( 
        <div className="profile-container">
            { user && 
                <div className="profile content">
                    <h2 className="heading">User Profile</h2>
                    <div className="user-info">
                        <span className="info-label">Email:</span>
                        <span className="info-value">{user.email}</span>
                        <br />
                        <br />
                        <span className="info-label">Username:</span>
                        <span className="info-value">{user.username}</span>
                        <br />
                        <br />
                        <span className="info-label">Display Name:</span>
                        <span className="info-value">{user.displayName}</span>
                    </div>
                    <button className="edit-button" onClick={handleEdit}>Edit</button>
                </div>
            }
        </div>
     );
}
 
export default ViewProfile;