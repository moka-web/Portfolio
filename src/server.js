const express = require("express");
const app = express()
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(require("./routes/send-email"))

app.use(express.static(path.join(__dirname,"public")))

app.listen(PORT,()=>{
    console.log("server listening on port 3000")
})