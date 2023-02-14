migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tg7w50udc6wvg88")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0rtceasv",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tg7w50udc6wvg88")

  // remove
  collection.schema.removeField("0rtceasv")

  return dao.saveCollection(collection)
})
