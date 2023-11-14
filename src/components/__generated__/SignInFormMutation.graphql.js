/**
 * @generated SignedSource<<989804ede07b7718c781427fe78a1383>>
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
    "concreteType": "SignInUserPayload",
    "kind": "LinkedField",
    "name": "signInUser",
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
    "name": "SignInFormMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignInFormMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "59e40cb88accfa131123ea85d2651ab7",
    "id": null,
    "metadata": {},
    "name": "SignInFormMutation",
    "operationKind": "mutation",
    "text": "mutation SignInFormMutation(\n  $input: SignInUserInput!\n) {\n  signInUser(input: $input) {\n    user {\n      id\n      email\n      username\n    }\n    errors\n  }\n}\n"
  }
};
})();

node.hash = "73fc63340712a5b2fca1d7c22948ab98";

module.exports = node;
