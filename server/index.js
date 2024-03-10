//comment
const express = require("express");
const app= express();

const userRouters = require("./routes/User");
const cors = require("cors");
const database = require("./config/database");

require("dotenv").config();

const PORT = process.env.PORT || 4000;

database.connect();
app.use(express.json());

app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true,
    })
)
app.use("/api/v1/auth",userRouters);


app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"your server is up and running...."
    })
})

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
})