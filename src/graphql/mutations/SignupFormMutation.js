import graphql from 'babel-plugin-relay/macro';

const SignupFormMutation = graphql`
  mutation SignupFormMutation(
    $input: SignUpUserInput!
  ) {
    signUpUser(
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

export default SignupFormMutation;