const itemController = require('../controllers/controller');
module.exports = app => {
    app.post("/api/items", itemController.createItem);
    app.get("/api/items", itemController.getAllItems);
    app.get("/api/items/:id", itemController.getOneItem);
    app.put("/api/items/:id/", itemController.updateItem);
    app.delete("/api/items/:id/", itemController.deleteItem);
}