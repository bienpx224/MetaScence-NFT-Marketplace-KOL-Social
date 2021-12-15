const express = require("express"); 
const app = express();
const cors = require('cors')
require('dotenv').config()
app.use(express.static("public"));
app.use(cors())
app.set("view engine", "ejs");
app.set("views", "./views");
const path = require('path');


const server = require("http").Server(app)
const io = require("socket.io")(server)

server.listen((process.env.PORT || '3000') , (err)=>{
    console.log(`Server listening on port ${server.address().port}... : `)
})

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))

// Connect Mongoose
const mongoose = require("mongoose")
// Mongo bienpx: name: meta / pass: jPAnRTPGSxON0DP4
mongoose.connect(`${process.env.MONGODB_URI}`, function(err){
    if(err){
        console.log("Connect Mongo Error: "+ err)
    }else{
        console.log("Connect mongo success.")
    }
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

require('./controllers/user')(app)
require('./controllers/char')(app)

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.use(function(req,res,next){
    next(createError(404))
})

app.use(function(err, req,res,next){
    res.locals.message = err.message
    res.locals.error = req.app.get("env") === "development" ? err:{}

    res.status(err.status || 500)
    res.send('error')
})

module.exports = app