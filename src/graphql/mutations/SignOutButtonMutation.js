import graphql from 'babel-plugin-relay/macro';

const SignOutButtonMutation = graphql`
  mutation SignOutButtonMutation {
    signOutUser(input: {}) {
      isSignOutSuccessful
    }
  }
`;

export default SignOutButtonMutation;