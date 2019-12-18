module.exports = {
    authenticate(req,res,next){
        if(req.body.apiKey === process.env.ADMIN_KEY){
            req.authenticated = true;
            next();
        }
        else{
            res.status(401).end()
        }
    }
}