import express from "express"
const app = express()
const port = 3000
app.get("/",(req,res) => {
    res.send("<h1>Hello Welcome to my website</h1>")
})
app.post("/register",(req, res) =>{
    res.sendStatus(201);
})
app.put("/user/ananya",(req,res) => {
    res.sendStatus(200)
})
app.patch("/user/ananya",(req, res) => {
    res.sendStatus(200)
})
app.delete("/user/ananya",(req,res) => {
    res.sendStatus(200)
})
app.listen(port,() => {
    console.log("server is running")
})