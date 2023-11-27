/**
 * @generated SignedSource<<411424c03e0c9cffc82b2010e32aaa03>>
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
    "concreteType": "EditPostPayload",
    "kind": "LinkedField",
    "name": "editPost",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
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
    "name": "EditPostMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditPostMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9f07809ddc39a7bfb883f7e4a3d305b7",
    "id": null,
    "metadata": {},
    "name": "EditPostMutation",
    "operationKind": "mutation",
    "text": "mutation EditPostMutation(\n  $input: EditPostInput!\n) {\n  editPost(input: $input) {\n    post {\n      id\n      title\n      body\n    }\n    errors\n  }\n}\n"
  }
};
})();

node.hash = "e7c8426db6279d294922694207ebe3ad";

module.exports = node;
