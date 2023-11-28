import { useNavigate } from "react-router-dom";
import GetPostsQuery from "../graphql/queries/GetPostsQuery";
import { usePreloadedQuery } from "react-relay";
import baseUrl from "../constants/baseUrl";
import { useContext, useEffect, useState } from "react";
import PageIndicator from "./PageIndicator";
import { UserContext } from "../contexts/UserContext";
import DeletePostButton from "./DeletePostButton";

const PostsList = ({ queryRef, title, loadGetPostsQuery }) => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [currentPage, setCurrentPage] = useState(1);
    
    const { pagePosts, pagesCount } = usePreloadedQuery(
        GetPostsQuery,
        queryRef,
      ).posts;

      const [currentPosts, setCurrentPosts] = useState(pagePosts);

      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        loadGetPostsQuery({ pageNumber: pageNumber.toString() }, { fetchPolicy: 'network-only' });
      };

      useEffect(() => {
        setCurrentPosts(pagePosts);
      }, [pagePosts]);
    
    return ( 
        <div>
            <div>
                { !title && <h1 className="home-header">Posts</h1> }
                { currentPosts.length === 0 ? <div></div> :
                    <div className="post-list">
                        {currentPosts.map(post => {
                            return (
                                <div key={post.id} className="post">
                                    <h2 className="post-title">{ post.title }</h2>
                                    <div className="post-header">
                                        <p className="post-category">{ post.category.name }</p>
                                        <div className="author">
                                            <img src={post.user.avatar ? (baseUrl + post.user.avatar) : "/assets/default-avatar.png"} alt="avatar" className="avatar" />
                                            <p>{ post.user.displayName }</p>
                                        </div>
                                    </div>   
                                    <br />
                                    <br />
                                    { user ? 
                                        user.id === post.user.id ? 
                                            <div className="actions">
                                                <button className="custom-button" onClick={() => navigate(`/posts/${post.id}`)}>View</button>
                                                <button className="custom-button" onClick={() => navigate(`/users/${user.id}/posts/${post.id}/edit`)}>Edit</button>
                                                <DeletePostButton postId={post.id} currentPosts={currentPosts} setCurrentPosts={setCurrentPosts} />
                                            </div>
                                            :
                                            <div className="actions">
                                                <button className="custom-button" onClick={() => navigate(`/posts/${post.id}`)}>View</button>
                                            </div>
                                        :
                                        <div className="actions">
                                            <button className="custom-button" onClick={() => navigate(`/posts/${post.id}`)}>View</button>
                                        </div>
                                    }
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