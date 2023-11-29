/**
 * @generated SignedSource<<a3742e57a1458586e53be611dde5dd31>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "categoryId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "pageNumber"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "tagsIds"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "categoryId",
        "variableName": "categoryId"
      },
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "pageNumber",
        "variableName": "pageNumber"
      },
      {
        "kind": "Variable",
        "name": "tagsIds",
        "variableName": "tagsIds"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "PaginatedPostType",
    "kind": "LinkedField",
    "name": "userPosts",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "pagePosts",
        "plural": true,
        "selections": [
          (v6/*: any*/),
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "kind": "LinkedField",
            "name": "category",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          },
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
              (v7/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "pagesCount",
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
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetUserPostsQuery",
    "selections": (v8/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v5/*: any*/),
      (v2/*: any*/),
      (v4/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "GetUserPostsQuery",
    "selections": (v8/*: any*/)
  },
  "params": {
    "cacheID": "33c5ecc015c8fe3a0f7524fc6bfd129d",
    "id": null,
    "metadata": {},
    "name": "GetUserPostsQuery",
    "operationKind": "query",
    "text": "query GetUserPostsQuery(\n  $userId: ID!\n  $pageNumber: String\n  $title: String\n  $description: String\n  $categoryId: ID\n  $tagsIds: [ID!]\n) {\n  userPosts(userId: $userId, pageNumber: $pageNumber, title: $title, description: $description, categoryId: $categoryId, tagsIds: $tagsIds) {\n    pagePosts {\n      id\n      title\n      body\n      category {\n        id\n        name\n      }\n      tags {\n        tagId\n        name\n      }\n    }\n    pagesCount\n  }\n}\n"
  }
};
})();

node.hash = "7d126189c2580c6006a19fb3b0d9370d";

module.exports = node;
