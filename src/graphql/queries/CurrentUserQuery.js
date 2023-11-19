import graphql from 'babel-plugin-relay/macro';

const CurrentUserQuery = graphql`
    query CurrentUserQuery {
        currentUser {
            email
            username
            displayName
            error
        }
    }
`

export default CurrentUserQuery;