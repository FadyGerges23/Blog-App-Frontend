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
        <h2 className="content">Welcome to Blog App!</h2>
     );
}
 
export default LandingPage;