const {insertMovie,returnMovies} = require("../constructor/movies.constructor")
module.exports = {
    get(req,res){
        returnMovies(res)
        

    },
    async post(req,res){
        let objectMovie = {
            name: req.body.movieName,
            description: req.body.description,
            rank: req.body.rank,
            tags: req.body.tags
        }
        insertMovie(objectMovie)
        res.status(200).send({result:"sucess"})
    }
}