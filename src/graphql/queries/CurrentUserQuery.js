import graphql from 'babel-plugin-relay/macro';

const CurrentUserQuery = graphql`
    query CurrentUserQuery {
        currentUser {
            email
            username
            displayName
            avatar
            posts {
                id
                title
                body
            }
            error
        }
    }
`

export default CurrentUserQuery;