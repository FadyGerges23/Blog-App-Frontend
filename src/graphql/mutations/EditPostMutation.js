import graphql from 'babel-plugin-relay/macro';

const EditPostMutation = graphql`
    mutation EditPostMutation($input: EditPostInput!){
        editPost(input: $input) {
            post {
                id
                title
                body
            }
            errors
        }
    }
`;

export default EditPostMutation;