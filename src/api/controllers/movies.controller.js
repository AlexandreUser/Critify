const {insertMovie,returnMovies,findMovie} = require("../constructor/movies.constructor")
module.exports = {
    async movieFinder(req,res){
        findMovie(req.params.id,res)
    },
    async listMovies(req,res){
        
        returnMovies(res)
    },
    async createMovie(req,res){
        let objectMovie = {
            movieId:await returnMovies(),
            name: req.body.movieName,
            description: req.body.description,
            rank: req.body.rank,
            tags: req.body.tags,
            duration: req.body.duration,
            year:req.body.year,
            image:req.body.image
        }
        insertMovie(objectMovie)
        res.status(200).send({result:"sucess"})
    }
}