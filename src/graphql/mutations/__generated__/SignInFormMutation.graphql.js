/**
 * @generated SignedSource<<eed3a0ee9d1d47c70e9f37846724031f>>
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
            "name": "token",
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
    "cacheID": "fa708f7de9769f2902d66e3e9acd9e51",
    "id": null,
    "metadata": {},
    "name": "SignInFormMutation",
    "operationKind": "mutation",
    "text": "mutation SignInFormMutation(\n  $input: SignInUserInput!\n) {\n  signInUser(input: $input) {\n    user {\n      id\n      token\n    }\n    errors\n  }\n}\n"
  }
};
})();

node.hash = "eafa4deed14697630131857080d1cb61";

module.exports = node;
