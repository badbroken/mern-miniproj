const express = require("express")

const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json({extended: false}))
// Creating a route ("/") with request and response, this will send a response
// to the frontend
// app.get("/", (req, res) => {
//     res.send("Inside my node js backend")
// })

app.post("/api/register", (req, res) => {
    console.log(req.body)
    res.json({
        message: "Data Recieved"
    })
})
app.get("/api/users", (req, res) => {

})

const Port = 6969;
//makes sure our server runs on whatever port we assign it to
app.listen(Port, () => {
    console.log(`Server running on http://localhost:${Port}`)
})