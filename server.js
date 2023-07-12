const express = require("express");
const cors = require("cors");
const PORT = 5000;
const sql = require("./models/db");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extends:false}));

app.get("/",(req,res)=>{
    res.send("<p>This is a restaurabt API   </p>");

});

app.listen(PORT,() =>{
console.log("Server is running on http://localhost:" + PORT);

});