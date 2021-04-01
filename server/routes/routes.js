const AlgoController = require('../controllers/Algo.controller');
const itemController = require('../controllers/controller');
const userController = require('../controllers/user.controller');
const PortfolioController = require('../controllers/portfolio.controller');
const ProjectController = require('../controllers/project.controller');
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

    //portfolio routes
    app.post("/api/portfolios", PortfolioController.createPortfolio);
    app.get("/api/portfolios", PortfolioController.getAllPortfolios);
    app.get("/api/portfolios/:id", PortfolioController.getOnePortfolio);
    app.put("/api/portfolios/:id/", PortfolioController.updatePortfolio);
    app.delete("/api/portfolios/:id/", PortfolioController.deletePortfolio);
    
    //project routes
    app.post("/api/projects", ProjectController.createProject);
    app.get("/api/projects", ProjectController.getAllProjects );
    app.get("/api/projects/:id", ProjectController.getOneProject);
    app.put("/api/projects/:id/", ProjectController.updateProject);
    app.delete("/api/projects/:id/", ProjectController.deleteProject);

    //generic item routes
    app.post("/api/items", itemController.createItem);
    app.get("/api/items", itemController.getAllItems);
    app.get("/api/items/:id", itemController.getOneItem);
    app.put("/api/items/:id/", itemController.updateItem);
    app.delete("/api/items/:id/", itemController.deleteItem);

    //algo routes
    app.post("/api/algos", AlgoController.createAlgo);
    app.get("/api/algos", AlgoController.getAllAlgos);
    app.get("/api/algos/:id", AlgoController.getOneAlgo);
    app.put("/api/algos/:id/", AlgoController.updateAlgo);
    app.delete("/api/algos/:id/", AlgoController.deleteAlgo);
}
