const express = require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const path= require('path');

const items= require('./routes/api/items');
const app= express();

//Boddyparser middleware
app.use(bodyParser.json());

const db= require('./config/keys').mongoURI;


mongoose.connect(db,{useUnifiedTopology: true,useNewUrlParser:true}).then(()=>{
    console.log("mongo db connected")
})
.catch(err=>{
    console.log("error");
})


//use routes
app.use('/api/items',items);

//serve static assets if in production
if(process.env.NODE_ENV==='production'){
    //set static folder
    app.use(express.static('client/build'))

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

const port = process.env.Port || 5000;

app.listen(port,()=>console.log(`server started on port ${port}`))