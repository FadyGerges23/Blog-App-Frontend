import graphql from 'babel-plugin-relay/macro';

const EditProfileMutation = graphql`
  mutation EditProfileMutation(
    $input: EditUserInput!
  ) {
    editUser(
        input: $input
    ) {
      errors
    }
  }
`;

export default EditProfileMutation;