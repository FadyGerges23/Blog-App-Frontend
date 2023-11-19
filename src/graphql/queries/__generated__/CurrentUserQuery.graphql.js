/**
 * @generated SignedSource<<6ebc9d27612617eba72db53918c921df>>
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
    "cacheID": "2338adc99418ac70f3a1ac1615319099",
    "id": null,
    "metadata": {},
    "name": "CurrentUserQuery",
    "operationKind": "query",
    "text": "query CurrentUserQuery {\n  currentUser {\n    email\n    username\n    displayName\n    error\n  }\n}\n"
  }
};
})();

node.hash = "4b45a1276ecf5175549be4252fc06c14";

module.exports = node;
