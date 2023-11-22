import graphql from 'babel-plugin-relay/macro';

const DeletePostMutation = graphql`
    mutation DeletePostMutation($input: DeletePostInput!) {
        deletePost(input: $input) {
            isDeleteSuccessful
        }
    }
`;

export default DeletePostMutation;