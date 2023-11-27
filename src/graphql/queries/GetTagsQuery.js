import graphql from 'babel-plugin-relay/macro';

const GetTagsQuery = graphql`
    query GetTagsQuery {
        tags {
            tagId
            name
        }
    }
`

export default GetTagsQuery;