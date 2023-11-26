/**
 * @generated SignedSource<<0cbd864eaf6a3329e4ca321ef20dc86d>>
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
    "concreteType": "Tag",
    "kind": "LinkedField",
    "name": "tags",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "tagId",
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
    "name": "GetTagsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetTagsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "fde09765c10b59ab28f44e672b884451",
    "id": null,
    "metadata": {},
    "name": "GetTagsQuery",
    "operationKind": "query",
    "text": "query GetTagsQuery {\n  tags {\n    tagId\n    name\n  }\n}\n"
  }
};
})();

node.hash = "0b836dba0d90e3ce3b4750f268ad5a45";

module.exports = node;
