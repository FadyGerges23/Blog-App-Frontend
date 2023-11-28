import graphql from 'babel-plugin-relay/macro';

const GetPostsQuery = graphql`
    query GetPostsQuery($pageNumber: String) {
        posts(pageNumber: $pageNumber) {
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