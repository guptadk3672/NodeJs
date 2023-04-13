const express = require('express');
const dbConnection= require('../mongodb/mongodb');

const app = express();

app.get('/', async (req,res)=>{
    let data = await dbConnection();
    data = await data.find().toArray();
    console.log("data=====>",data);
    res.send(data)
})

app.listen(5000)


//http://localhost:5000/