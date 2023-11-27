import graphql from 'babel-plugin-relay/macro';

const GetCategoriesQuery = graphql`
    query GetCategoriesQuery {
        categories {
            id
            name
        }
    }
`

export default GetCategoriesQuery;