import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLazyLoadQuery, useQueryLoader } from "react-relay";
import { UserContext } from "../contexts/UserContext";
import DeletePostButton from "./DeletePostButton";
import GetUserPostsQuery from "../graphql/queries/GetUserPostsQuery";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import PostsList from "./PostsList";
import GetPostsQuery from "../graphql/queries/GetPostsQuery";
import PageIndicator from "./PageIndicator";

const Home = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useContext(UserContext);
    const [currentPage, setCurrentPage] = useState(1);
    const postsQueryData = useLazyLoadQuery(GetUserPostsQuery, {userId: user.id, pageNumber: currentPage.toString()}, { fetchPolicy: 'network-only' });
    const { pagePosts, pagesCount } = postsQueryData.userPosts;
    const [currentPosts, setCurrentPosts] = useState(pagePosts);
    const [postsType, setPostsType] = useState("All Posts")

    const [
        getPostsQueryRef,
        loadGetPostsQuery,
      ] = useQueryLoader(GetPostsQuery);
    
    useEffect(() => {
        if(id !== user.id) {
            navigate("/unauthorized")
        }
        if(user.error) {
            navigate('/users/sign_in');
        }

        loadGetPostsQuery({ pageNumber: "1" }, { fetchPolicy: 'network-only' });
    }, [id, user, navigate, loadGetPostsQuery]);

    useEffect(() => {
        setCurrentPosts(postsQueryData.userPosts.pagePosts);     
    }, [postsQueryData])

    const handleToggle = (event, toggleValue) => {
        if (toggleValue) {
            setPostsType(toggleValue);
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

    return ( 
        <div>
            { user.error ? 
                <div></div> :
                <div className="content">
                    <div className="home-header">
                        <h1>{ postsType }</h1>

                        <ToggleButtonGroup
                            className="toggle"
                            color="primary"
                            value={postsType}
                            exclusive
                            onChange={handleToggle}
                        >
                            <ToggleButton value="All Posts">All Posts</ToggleButton>
                            <ToggleButton value="My Posts">My Posts</ToggleButton>
                        </ToggleButtonGroup>
                        
                    </div>
                    
                    {
                        postsType === "All Posts" ?
                            ( getPostsQueryRef && <PostsList queryRef={getPostsQueryRef} title={postsType} loadGetPostsQuery={loadGetPostsQuery} /> )
                            :
                            currentPosts.length === 0 ? <div></div> :
                                <div className="post-list">
                                    {currentPosts.map(post => {
                                        return (
                                            <div key={post.id} className="post">
                                                <div className="post-header">
                                                    <h2 className="post-title">{ post.title }</h2>
                                                    <p className="post-category">{ post.category.name }</p>
                                                </div>
                                                <p className="post-body">{ post.body }</p>
                                                { post.tags.map(tag => {
                                                    return (
                                                        <div key={tag.tagId} className="tags-list">
                                                            <div className="tag">#{tag.name}</div>
                                                        </div>     
                                                    )
                                                }) 
                                                }
                                                <br />
                                                <br />
                                                <div className="actions">
                                                    <button className="custom-button" onClick={() => navigate(`/users/${user.id}/posts/${post.id}/edit`)}>Edit</button>
                                                    <DeletePostButton postId={post.id} currentPosts={currentPosts} setCurrentPosts={setCurrentPosts} />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            }
                            { postsType === "My Posts" 
                            && <PageIndicator
                                totalPages={pagesCount}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                            /> }
                            <button className="custom-button" onClick={ () => navigate(`/users/${user.id}/create_post`) }>Create Post</button>
                </div>
            }
        </div>
     );
}
 
export default Home;