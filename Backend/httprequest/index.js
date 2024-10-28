import express from "express"
const app = express()
const port = 3000
app.get("/",(req,res) => {
    console.log(req.rawHeaders)
    res.send("<h1>Hello Welcome to my website</h1>")
})
app.get("/about",(req,res) => {
    res.send("<h2>About Me</h2>")
})
app.listen(port,() =>{
    console.log("Server is running in port 3000")
})