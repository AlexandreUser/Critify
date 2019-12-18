const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/movies",{
	useNewUrlParser: true
});

var Schema = mongoose.Schema;
var movieSchema = new Schema({
    movieId:Number,
    name:String,
    description:String,
    rank:Number,
    tags:[String]
})

exports.movie = mongoose.model("moviesData",movieSchema)

