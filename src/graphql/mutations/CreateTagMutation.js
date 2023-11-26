import graphql from 'babel-plugin-relay/macro';

const CreateTagMutation = graphql`
    mutation CreateTagMutation($input: CreateTagInput!) {
        createTag(input: $input) {
            tag {
                tagId
                name
            }
            errors
        }
    }
`;

export default CreateTagMutation;