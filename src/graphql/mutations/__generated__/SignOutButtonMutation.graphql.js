/**
 * @generated SignedSource<<a4e9b8b36c7488f10982e74d81596907>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "input",
        "value": {}
      }
    ],
    "concreteType": "SignOutUserPayload",
    "kind": "LinkedField",
    "name": "signOutUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isSignOutSuccessful",
        "storageKey": null
      }
    ],
    "storageKey": "signOutUser(input:{})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SignOutButtonMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SignOutButtonMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "f883f736cbef1ba4a98f0afa975758d7",
    "id": null,
    "metadata": {},
    "name": "SignOutButtonMutation",
    "operationKind": "mutation",
    "text": "mutation SignOutButtonMutation {\n  signOutUser(input: {}) {\n    isSignOutSuccessful\n  }\n}\n"
  }
};
})();

node.hash = "0b328907baf576b7468913cb843afc7c";

module.exports = node;
