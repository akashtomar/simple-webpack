var express = require('express');

var app = express();

app.get('/', (req,res)=>{
    res.sendFile(__dirname+"/dist/index.html");
});

app.use(express.static('dist'));
app.listen(3000,()=>{
    console.log("lights at 3000");
});