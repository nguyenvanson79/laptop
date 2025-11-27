import express from "express";


import 'dotenv/config'; 
// require('dotenv').config() ;


const app = express() ;

const port = process.env.PORT || 8080 ;

app.get("/", (req, res) => {
    res.send ( "hello word")
})
app.get("/tieptheo", (req, res) => {
    res.send ( "hello word 1 okla")
})


app.listen(port , () => {
    console.log("my app running " ,  port)
})