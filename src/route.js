const express = require("express");
const routes = express.Router();

const auth = require("./api/middlewares/auth.middleware")
const mainController = require("./api/controllers/main.controller");
routes.get("/",mainController.get);
routes.post("/",auth.authenticate,mainController.post);

module.exports = routes;