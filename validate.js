module.exports.messageFormat = (req, res, next) => {
    if(req.body.hasOwnProperty("conversation_id") && req.body.hasOwnProperty("message")){
        next();
    }
    else
        return res.status(500).send({error: "Format was incorrect."});
    
}