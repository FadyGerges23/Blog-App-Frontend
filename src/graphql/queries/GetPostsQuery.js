import graphql from 'babel-plugin-relay/macro';

const GetPostsQuery = graphql`
    query GetPostsQuery($pageNumber: String, $title: String, $description: String, $categoryId: ID, $tagsIds: [ID!]) {
        posts(pageNumber: $pageNumber, title: $title, description: $description, categoryId: $categoryId, tagsIds: $tagsIds) {
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
            user {
              id
              displayName
              avatar
            }
          }
          pagesCount
        }
    }
`

export default GetPostsQuery;