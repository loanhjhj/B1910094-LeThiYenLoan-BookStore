const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const authorRoute = require("./routes/author.route");
const bookRoute = require("./routes/book.route");

dotenv.config();

app.use(bodyParser.json({limit:"50mb"}));
app.use(helmet());
app.use(cors());
app.use(morgan("common"));

//ROUTES
app.use("/bookstore/author", authorRoute);
app.use("/bookstore/book", bookRoute);

async function startServer(){
    try{
      mongoose.set("strictQuery", true);
      mongoose.connect((process.env.MONGODB_URL), () => {
      console.log("Connected to the database!");

      app.listen(process.env.PORT || 8000, () => {
        console.log("Server is running on port 8000");
      });

  });

    } catch(error){
      console.log("Cannot connect to the database!", error);
      process.exit();
    }
}

startServer();