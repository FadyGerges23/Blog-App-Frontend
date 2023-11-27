import graphql from 'babel-plugin-relay/macro';

const GetUserPostQuery = graphql`
    query GetUserPostQuery($userId: ID!, $postId: ID!) {
        userPost(userId: $userId, postId: $postId) {
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
    }
`

export default GetUserPostQuery;