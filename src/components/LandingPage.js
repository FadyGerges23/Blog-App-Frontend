import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    useEffect(() => {
        if(user) {
            navigate(`/users/${user.id}/home`);
        }
    }, [user, navigate]);

    return ( 
        <div className="center">
            <h1>Welcome to Blog App!</h1>
            <button className="custom-button show-posts-button" onClick={() => navigate("/posts")}>Show Posts</button>
        </div>
     );
}
 
export default LandingPage;