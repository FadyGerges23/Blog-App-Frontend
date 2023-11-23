import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLazyLoadQuery } from "react-relay";
import CurrentUserQuery from "../graphql/queries/CurrentUserQuery";
import { UserContext } from "../contexts/UserContext";
import DeletePostButton from "./DeletePostButton";
import GetPostsQuery from "../graphql/queries/GetPostsQuery";

const Home = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useContext(UserContext);
    const data = useLazyLoadQuery(CurrentUserQuery, {}, { fetchPolicy: 'network-only' });
    const {error} = data.currentUser;
    const postsQueryData = useLazyLoadQuery(GetPostsQuery, {userId: user.id}, { fetchPolicy: 'network-only' });
    const [currentPosts, setCurrentPosts] = useState(postsQueryData.posts);
    
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
            { error ? 
                <div></div> :
                <div>
                    <h1 className="content">My Posts</h1>
                    { currentPosts.length === 0 ? <div></div> :
                        <div className="post-list">
                            {currentPosts.map(post => {
                                return (
                                    <div key={post.id} className="post">
                                        <div className="post-header">
                                            <h2 className="post-title">{ post.title }</h2>
                                            <p className="post-category">{ post.category.name }</p>
                                        </div>
                                        <p className="post-body">{ post.body }</p>
                                        <button className="custom-button" onClick={() => navigate(`/users/${user.id}/posts/${post.id}/edit`, { state: post })}>Edit</button>
                                        <DeletePostButton postId={post.id} currentPosts={currentPosts} setCurrentPosts={setCurrentPosts} />
                                    </div>
                                )
                            })}
                        </div>
                    }
                    <button className="custom-button" onClick={ () => navigate(`/users/${user.id}/create_post`) }>Create Post</button>
                </div>
            }
        </div>
     );
}
 
export default Home;