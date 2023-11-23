import graphql from 'babel-plugin-relay/macro';

const GetPostQuery = graphql`
    query GetPostQuery($userId: ID!, $postId: ID!) {
        post(userId: $userId, postId: $postId) {
          id
          title
          body
          category {
            id
            name
          }
        }
    }
`

export default GetPostQuery;