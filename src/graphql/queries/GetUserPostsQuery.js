import graphql from 'babel-plugin-relay/macro';

const GetUserPostsQuery = graphql`
    query GetUserPostsQuery($userId: ID!, $pageNumber: String, $title: String, $description: String, $categoryId: ID, $tagsIds: [ID!]) {
        userPosts(userId: $userId, pageNumber: $pageNumber, title: $title, description: $description, categoryId: $categoryId, tagsIds: $tagsIds) {
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