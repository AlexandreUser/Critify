const {movie} = require("../model/movies.model")
module.exports = {
    async insertMovie(objectMovie){
        movie.create(objectMovie,function(err,result){
            if(!err){
                return "Success"
            }
            else{
                return err
            }
        })
    },
    returnMovies(res){
        movie.find({},function(err,result){
            res.send(result)
        })
    }
}