import express from "express";

const app = express() ;

const port = 8080 ;

app.get("/", (req, res) => {
    res.send ( "hello word")
})
app.get("/tieptheo", (req, res) => {
    res.send ( "hello word 1")
})


app.listen(port , () => {
    console.log("my app running " ,  port)
})