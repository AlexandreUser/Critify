const express = require("express");
const routes = express.Router();

const auth = require("./api/middlewares/auth.middleware")
const movieController = require("./api/controllers/movies.controller");
routes.get("/api/movies",movieController.listMovies);
routes.get("/api/movies/:id",movieController.movieFinder);
routes.post("/api/movies",auth.authenticate,movieController.createMovie);

module.exports = routes;