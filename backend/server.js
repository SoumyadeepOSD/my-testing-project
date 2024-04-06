const express = require("express");
const userRoute = require("./routes/user.route.js");
const connectDb = require("./dbconfig/connect.js");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env.PORT;
const path = require("path");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDb();


app.use("/data",userRoute);


// DEPLOYMENT----------------------------

const __dirname1 = path.resolve();
if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname1,"/frontend/build")));

    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
    })
}else{
    app.get("/", (req, res) => {
        console.log("Hello World");
    });    
}

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));