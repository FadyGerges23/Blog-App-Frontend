/**
 * @generated SignedSource<<b88fc3a246ef4fa71cfe310dd5d62a58>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "SignUpUserPayload",
    "kind": "LinkedField",
    "name": "signUpUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "errors",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SignupFormMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignupFormMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ca688d3ec269a334062ba8a90ad871e9",
    "id": null,
    "metadata": {},
    "name": "SignupFormMutation",
    "operationKind": "mutation",
    "text": "mutation SignupFormMutation(\n  $input: SignUpUserInput!\n) {\n  signUpUser(input: $input) {\n    user {\n      id\n      email\n      username\n    }\n    errors\n  }\n}\n"
  }
};
})();

node.hash = "c0ef6fdfc1db4dda1dad47ecb04a7afc";

module.exports = node;
