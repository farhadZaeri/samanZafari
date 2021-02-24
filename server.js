const express = require('express')
const bodyparesr = require('body-parser')

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send("node js server is runing on minishift by saman zafari")

})


app.listen(8080,()=>{
    console.log("app is run on port 8080");
})