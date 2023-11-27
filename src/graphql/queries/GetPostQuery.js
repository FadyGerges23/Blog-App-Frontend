import graphql from 'babel-plugin-relay/macro';

const GetPostQuery = graphql`
    query GetPostQuery($postId: ID!) {
        post(postId: $postId) {
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

export default GetPostQuery;