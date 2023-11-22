/**
 * @generated SignedSource<<2aa8277946150351fbd6afd7e77b56ed>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "postId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "postId",
        "variableName": "postId"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "post",
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
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "body",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetPostQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "GetPostQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "d8fe26e00a2a7300f16c9e5398220d57",
    "id": null,
    "metadata": {},
    "name": "GetPostQuery",
    "operationKind": "query",
    "text": "query GetPostQuery(\n  $userId: ID!\n  $postId: ID!\n) {\n  post(userId: $userId, postId: $postId) {\n    id\n    title\n    body\n  }\n}\n"
  }
};
})();

node.hash = "08ec0e29a16f734e57f560a14d2384e4";

module.exports = node;
