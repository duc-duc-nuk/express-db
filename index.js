const express = require('express')
const app = express()
const fs = require('fs')

app.get("/messages", (req, res) => {

    console.log("read")
    let data = fs.readFileSync("messages.txt", { encoding: 'utf8', flag: 'r' })
    console.log(data)
    res.send(data)
    res.end()

})

app.post("/messages/:user/:message", (req, res) => {

    fs.appendFileSync("messages.txt", req.params.user + "?:" + req.params.message + "!?:")
    console.log("append")

})

app.get("/users/:user/:pass", (req, res) => {

    let result = false;
    fs.readFileSync("users.txt", (err, data) => {

        let users = data.split(",")
        users.forEach(element => {
            if (!result) {

                if(element == req.params.user+"?:"+"pass") {

                    result = true;
                    res.send("true")

                }

            }
        });

    })

    if (!result) {res.send("false")}
    res.send()

})

app.post("/users/:user/:pass", (req, res) => {

    fs.appendFileSync("messages.txt", req.params.user + "?:" + req.params.pass + ",")

})

app.listen(3000)
