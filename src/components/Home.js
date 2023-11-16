import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    useEffect(() => {
        if(!user) {
            navigate('/sign_in');
        }
    }, [user, navigate]);

    return ( 
        <div>
            { user && <h2 className="content">Welcome { user.displayName }!</h2> }
        </div>
     );
}
 
export default Home;