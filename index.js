const express = require ('express');
const bodyParser = require('body-parser');

const app = express();


const ticketRouter=require('./routes/ticket')
const bookRouter=require('./routes/book')


port = process.env.port || 3001;

app.listen(port,function(){
    console.log("Sucessfully running");
})

app.use("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Content-Disposition", "application/binary");
    res.header("X-Frame-Options", "sameorigin");
    if (req.method == "OPTIONS") {
      res.send(200);
    } else {
      next();
    }
  });

  app.use('/ticket',ticketRouter);
  app.use('/book',bookRouter);



  app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
/*var url = "http://localhost:3001/ticket";

request(url,function (error, response, body){
  if (!error && response.statusCode == 200) {
    
    curAvail=JSON.parse(body).totalCountAvailable;  
    if(curAvail){
        
    }
    else{
        alert("Booking Not possible");
    }
  }
});*/