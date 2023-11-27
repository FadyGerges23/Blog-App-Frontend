import graphql from 'babel-plugin-relay/macro';

const GetUserPostsQuery = graphql`
    query GetUserPostsQuery($userId: ID!) {
        userPosts(userId: $userId) {
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

export default GetUserPostsQuery;