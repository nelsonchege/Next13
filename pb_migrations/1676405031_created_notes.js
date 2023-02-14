migrate((db) => {
  const collection = new Collection({
    "id": "tg7w50udc6wvg88",
    "created": "2023-02-14 20:03:51.960Z",
    "updated": "2023-02-14 20:03:51.960Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nxanfekb",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tg7w50udc6wvg88");

  return dao.deleteCollection(collection);
})
