/**
 * @generated SignedSource<<8eb508a382bbaee99d09afc81de989d7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Category",
    "kind": "LinkedField",
    "name": "categories",
    "plural": true,
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
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetCategoriesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetCategoriesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "91ad8438c68702a47e018d6c6eaa7375",
    "id": null,
    "metadata": {},
    "name": "GetCategoriesQuery",
    "operationKind": "query",
    "text": "query GetCategoriesQuery {\n  categories {\n    id\n    name\n  }\n}\n"
  }
};
})();

node.hash = "76ab9df228b03bb40ad8fe8b88b41f2b";

module.exports = node;
