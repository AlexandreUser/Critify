const {movie} = require("../model/movies.model")
module.exports = {
    async findMovie(id,res){
        movie.findOne({movieId:id},function(err,result){
            if(err){
                res.send(err);
                return;
            }
            if(result){
                res.send(result);
                return;
            }
            res.send({error:"not found"})
        })
    },
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
    async returnMovies(res=null){
        if(res){
            movie.find({},function(err,result){
                res.send(result)
            }) 
        }
        else{
            return await movie.estimatedDocumentCount({}) 
        }
    }
}