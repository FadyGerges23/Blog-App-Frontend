/**
 * @generated SignedSource<<94acc229f9a4e0acefa73e01cde72560>>
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
    "concreteType": "DeletePostPayload",
    "kind": "LinkedField",
    "name": "deletePost",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isDeleteSuccessful",
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
    "name": "DeletePostMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeletePostMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ddba19c93e1329a23da8bf4509695441",
    "id": null,
    "metadata": {},
    "name": "DeletePostMutation",
    "operationKind": "mutation",
    "text": "mutation DeletePostMutation(\n  $input: DeletePostInput!\n) {\n  deletePost(input: $input) {\n    isDeleteSuccessful\n  }\n}\n"
  }
};
})();

node.hash = "63ee6c35faeb924548e302c9ccc3f62d";

module.exports = node;
