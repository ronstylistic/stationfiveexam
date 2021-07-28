const express = require('express');
const bodyParser = require('body-parser');
const validate = require('./validate');
const utils = require('./utils');

const app = express();
app.use(bodyParser.json());

app.post('/message', validate.messageFormat, (req, res) => {
    
    const messages = req.body.message.split(" ");

    for(let m of messages){
        if(m.includes("Hello") || m.includes("Hi")){
            return res.status(200).send(utils.sendResponse("Welcome to StationFive."));
        }
        else if(m.includes("Goodbye") || m.includes("bye")){
            return res.status(200).send(utils.sendResponse("Thank you, see you around."));
        }
    }
  
    return res.status(200).send(utils.sendResponse("Sorry, I don’t understand."))
})

app.listen(3000, () => {
  console.log('listening on port 3000');
});