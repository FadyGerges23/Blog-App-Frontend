import graphql from 'babel-plugin-relay/macro';

const GetPostsQuery = graphql`
    query GetPostsQuery {
        posts {
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
    }
`

export default GetPostsQuery;