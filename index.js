const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

const bodyParser =require("body-parser")

const userRoutes = require("./src/routes/userRoutes.js")
const eventRoutes = require("./src/routes/eventRoutes.js")




const app = express()
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//middleware
app.use(cors())
app.use(express.json())


// Routes
app.use("/api/user", userRoutes)
app.use("/api/event", eventRoutes)


app.listen(9000, () => {
    console.log("Server is listening at port :9000")
})


