const itemController = require('../controllers/controller');
const userController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');
module.exports = app => {
    //user controller routes
    app.post("/api/users", userController.register);
    app.post("/api/users/login", userController.login);
    app.get("/api/users", userController.getAllUsers);
    app.get("/api/users/logout", userController.logout);
    app.get("/api/users/:id", userController.getOneUser);
    app.put("/api/users/:id/", userController.updateUser);
    app.delete("/api/users/:id/", userController.deleteUser);

    //generic item routes
    app.post("/api/items", itemController.createItem);
    app.get("/api/items", itemController.getAllItems);
    app.get("/api/items/:id", itemController.getOneItem);
    app.put("/api/items/:id/", itemController.updateItem);
    app.delete("/api/items/:id/", itemController.deleteItem);
}