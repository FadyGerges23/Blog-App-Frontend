import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLazyLoadQuery } from "react-relay";
import CurrentUserQuery from "../graphql/queries/CurrentUserQuery";
import { UserContext } from "../contexts/UserContext";

const Home = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useContext(UserContext);
    const data = useLazyLoadQuery(CurrentUserQuery, {}, { fetchPolicy: 'network-only' });
    const {displayName, error} = data.currentUser;

    useEffect(() => {
        if(id !== user.id) {
            navigate("/unauthorized")
        }
        if(error) {
            navigate('/users/sign_in');
        }
    }, [id, user, error, navigate, data]);

    return ( 
        <div>
            {!error && <h2 className="content">Welcome { displayName }!</h2>}
        </div>
     );
}
 
export default Home;