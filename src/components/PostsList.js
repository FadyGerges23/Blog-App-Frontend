import { useNavigate } from "react-router-dom";
import GetPostsQuery from "../graphql/queries/GetPostsQuery";
import { usePreloadedQuery } from "react-relay";
import baseUrl from "../constants/baseUrl";
import { useState } from "react";
import PageIndicator from "./PageIndicator";

const PostsList = ({ queryRef, title, loadGetPostsQuery }) => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    
    const { pagePosts: posts, pagesCount } = usePreloadedQuery(
        GetPostsQuery,
        queryRef,
      ).posts;

      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        loadGetPostsQuery({ pageNumber: pageNumber.toString() });
      };
    
    return ( 
        <div>
            <div>
                { !title && <h1 className="home-header">Posts</h1> }
                { posts.length === 0 ? <div></div> :
                    <div className="post-list">
                        {posts.map(post => {
                            return (
                                <div key={post.id} className="post clickable" onClick={() => navigate(`/posts/${post.id}`)}>
                                    <h2 className="post-title">{ post.title }</h2>
                                    <div className="post-header">
                                        <p className="post-category">{ post.category.name }</p>
                                        <div className="author">
                                            <img src={post.user.avatar ? (baseUrl + post.user.avatar) : "/assets/default-avatar.png"} alt="avatar" className="avatar" />
                                            <p>{ post.user.displayName }</p>
                                        </div>
                                    </div>   
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
            <PageIndicator
                totalPages={pagesCount}
                currentPage={currentPage}
                onPageChange={handlePageChange}
          />
        </div>
     );
}
 
export default PostsList;