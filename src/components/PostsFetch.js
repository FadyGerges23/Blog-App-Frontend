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
        loadGetPostsQuery();
      }, [loadGetPostsQuery]);
    
    return ( 
        getPostsQueryRef && <PostsList queryRef={getPostsQueryRef} title={title} />
     );
}
 
export default PostsFetch;