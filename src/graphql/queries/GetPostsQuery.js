import graphql from 'babel-plugin-relay/macro';

const GetPostsQuery = graphql`
    query GetPostsQuery($userId: ID!) {
        posts(userId: $userId) {
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

export default GetPostsQuery;