const express = require('express')
const app = express()
const fs = require('fs')

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

    fs.appendFileSync(req.params.user + "?:" + req.params.pass + ",")

})

app.listen(3000)