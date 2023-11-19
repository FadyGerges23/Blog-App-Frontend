/**
 * @generated SignedSource<<0c3ae7007cdf00929b3769bb8a61a3af>>
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
    "concreteType": "EditUserPayload",
    "kind": "LinkedField",
    "name": "editUser",
    "plural": false,
    "selections": [
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
    "name": "EditProfileMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditProfileMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "072ae72c452a879869946eb5aa0cfdff",
    "id": null,
    "metadata": {},
    "name": "EditProfileMutation",
    "operationKind": "mutation",
    "text": "mutation EditProfileMutation(\n  $input: EditUserInput!\n) {\n  editUser(input: $input) {\n    errors\n  }\n}\n"
  }
};
})();

node.hash = "4424a6b1ee90d09a8ac76dd62652c8c9";

module.exports = node;
