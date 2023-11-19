import graphql from 'babel-plugin-relay/macro';

const SignInFormMutation = graphql`
  mutation SignInFormMutation(
    $input: SignInUserInput!
  ) {
    signInUser(
        input: $input
    ) {
      user {
        id
        token
      }
      errors
    }
  }
`;

export default SignInFormMutation;