import { useLazyLoadQuery } from "react-relay";
import GetPostQuery from "../graphql/queries/GetPostQuery";
import { useParams } from "react-router-dom";
import baseUrl from "../constants/baseUrl";

const PostDetails = () => {
    const { id } = useParams();
    const { post } = useLazyLoadQuery(GetPostQuery, { postId: id });

    return ( 
        <div className="content">
            <div className="post">
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
                <div className="author">
                    <img src={post.user.avatar ? (baseUrl + post.user.avatar) : "/assets/default-avatar.png"} alt="avatar" className="avatar" />
                    <p>{ post.user.displayName }</p>
                </div>
            </div>
        </div>
     );
}
 
export default PostDetails;