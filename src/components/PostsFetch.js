import { useQueryLoader } from "react-relay";
import GetPostsQuery from "../graphql/queries/GetPostsQuery";
import PostsList from "./PostsList";
import { useEffect } from "react";

const PostsFetch = ({ title }) => {
    const [
        getPostsQueryRef,
        loadGetPostsQuery,
      ] = useQueryLoader(GetPostsQuery);

      useEffect(() => {
        loadGetPostsQuery({ pageNumber: "1" }, { fetchPolicy: 'network-only' });
      }, [loadGetPostsQuery]);
    
    return ( 
        <div>
          { getPostsQueryRef && <PostsList queryRef={getPostsQueryRef} title={title} loadGetPostsQuery={loadGetPostsQuery} /> }
        </div>
     );
}
 
export default PostsFetch;