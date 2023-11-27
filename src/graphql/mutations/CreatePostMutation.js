import graphql from 'babel-plugin-relay/macro';

const CreatePostMutation = graphql`
    mutation CreatePostMutation($input: CreatePostInput!){
        createPost(input: $input) {
            post {
                id
                title
                body
            }
            errors
        }
    }
`;

export default CreatePostMutation;