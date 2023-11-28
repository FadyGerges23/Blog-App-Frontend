import graphql from 'babel-plugin-relay/macro';

const GetUserPostsQuery = graphql`
    query GetUserPostsQuery($userId: ID!, $pageNumber: String) {
        userPosts(userId: $userId, pageNumber: $pageNumber) {
            pagePosts {
                id
                title
                body
                category {
                  id
                  name
                }
                tags {
                  tagId
                  name
                }
              }
            pagesCount
        }
    }
`

export default GetUserPostsQuery;