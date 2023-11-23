/**
 * @generated SignedSource<<63cfceb5b61f3c3dcb5431e728d4877d>>
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
    "concreteType": "CurrentUser",
    "kind": "LinkedField",
    "name": "currentUser",
    "plural": false,
    "selections": [
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "displayName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "avatar",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
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
    "name": "CurrentUserQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CurrentUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "28e0b9f515d6fd95cb841d5dc6672a6f",
    "id": null,
    "metadata": {},
    "name": "CurrentUserQuery",
    "operationKind": "query",
    "text": "query CurrentUserQuery {\n  currentUser {\n    email\n    username\n    displayName\n    avatar\n    error\n  }\n}\n"
  }
};
})();

node.hash = "1d098af8539e207ae427db0551b5cc33";

module.exports = node;
