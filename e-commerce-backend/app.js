console.log("E-commerce BackEnd")

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const menuApi = require("./routes/menu-api")

const app = express()
const PORT = 8081
const MONGODB_CONNECTION_STRING = "mongodb+srv://puntsagbatka99:Hujshand2020@cluster0.ymsry8p.mongodb.net/ishop";

app.use(express.json())
app.use(cors())
app.use("/menu", menuApi)


app.listen(PORT, ()=>{
    mongoose.connect(MONGODB_CONNECTION_STRING).then(
        console.log("Database is successfully connected")
    ).catch((error) =>
        console.error(error)
    )
    console.log(`E-Commerce application is running on http://localhost:${PORT}`)
})
