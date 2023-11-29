import { useQueryLoader } from "react-relay";
import Home from "./Home";
import GetUserPostsQuery from "../graphql/queries/GetUserPostsQuery";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

const UserPostsFetch = () => {
    const { user } = useContext(UserContext);

    const [
        getUserPostsQuery,
        loadGetUserPostsQuery
    ] = useQueryLoader(GetUserPostsQuery)
    
    useEffect(() => {
        loadGetUserPostsQuery({ userId: user.id, pageNumber: "1" }, { fetchPolicy: 'network-only' });
    }, [loadGetUserPostsQuery, user])

    return ( 
        getUserPostsQuery && <Home userPostsQueryRef={getUserPostsQuery} loadGetUserPostsQuery={loadGetUserPostsQuery} />
     );
}
 
export default UserPostsFetch;