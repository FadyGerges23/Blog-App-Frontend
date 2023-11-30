import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePreloadedQuery, useQueryLoader } from "react-relay";
import { UserContext } from "../contexts/UserContext";
import DeletePostButton from "./DeletePostButton";
import GetUserPostsQuery from "../graphql/queries/GetUserPostsQuery";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import PostsList from "./PostsList";
import GetPostsQuery from "../graphql/queries/GetPostsQuery";
import PageIndicator from "./PageIndicator";
import SearchFilters from "./SearchFilters";
import GetCategoriesQuery from "../graphql/queries/GetCategoriesQuery";
import GetTagsQuery from "../graphql/queries/GetTagsQuery";

const Home = ({ userPostsQueryRef, loadGetUserPostsQuery }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useContext(UserContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsType, setPostsType] = useState("All Posts")

    const { pagePosts, pagesCount } = usePreloadedQuery(
        GetUserPostsQuery,
        userPostsQueryRef,
      ).userPosts;

    const [currentPosts, setCurrentPosts] = useState(pagePosts);
    const [searchFilters, setSearchFilters] = useState({});

    const [
        getPostsQueryRef,
        loadGetPostsQuery,
      ] = useQueryLoader(GetPostsQuery);

    const [
        getCategoriesQueryRef,
        loadGetCategoriesQuery,
        ] = useQueryLoader(GetCategoriesQuery);

    const [
        getTagsQueryRef,
        loadGetTagsQuery,
        ] = useQueryLoader(GetTagsQuery);
    
    useEffect(() => {
        if(id !== user.id) {
            navigate("/unauthorized")
        }
        if(user.error) {
            navigate('/users/sign_in');
        }

        loadGetPostsQuery({ pageNumber: "1" }, { fetchPolicy: 'network-only' });
        loadGetCategoriesQuery();
        loadGetTagsQuery();
    }, [id, user, navigate, loadGetPostsQuery, loadGetCategoriesQuery, loadGetTagsQuery]);

    useEffect(() => {
        setCurrentPosts(pagePosts);     
    }, [pagePosts])

    const handleToggle = (event, toggleValue) => {
        if (toggleValue) {
            setPostsType(toggleValue);
            loadGetPostsQuery({ pageNumber: "1" }, { fetchPolicy: 'network-only' });
            loadGetUserPostsQuery({ userId: user.id, pageNumber: "1" }, { fetchPolicy: 'network-only' });
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        loadGetUserPostsQuery({...searchFilters, pageNumber: pageNumber.toString(), userId: user.id}, { fetchPolicy: 'network-only' });
    };

    const reload = (params) => {
       loadGetUserPostsQuery(params)
    }

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
                                <div>
                                    <div className="post-list">
                                        { getCategoriesQueryRef && getTagsQueryRef && <SearchFilters categoriesQueryRef={getCategoriesQueryRef} tagsQueryRef={getTagsQueryRef} reload={reload} pageNumber={currentPage} postsType="My Posts" setSearchFilters={setSearchFilters} /> }
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

                                    <PageIndicator
                                        totalPages={pagesCount}
                                        currentPage={currentPage}
                                        onPageChange={handlePageChange}
                                    />
                                </div>
                                
                            }
                         
                            <button className="custom-button create-post" onClick={ () => navigate(`/users/${user.id}/create_post`) }>Create Post</button>
                </div>
            }
        </div>
     );
}
 
export default Home;