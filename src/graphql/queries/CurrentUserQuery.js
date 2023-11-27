import graphql from 'babel-plugin-relay/macro';

const CurrentUserQuery = graphql`
    query CurrentUserQuery {
        currentUser {
            id
            email
            username
            displayName
            avatar
            error
        }
    }
`

export default CurrentUserQuery;