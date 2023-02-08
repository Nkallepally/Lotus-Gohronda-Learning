import express from "express";
const app = express();
import dotenv from 'dotenv';
dotenv.config()
import dbConnection from "./config/db.js"
import { serverHandler } from "./controllers/mongoControllers.js";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get("/", serverHandler);


app.listen(process.env.PORT);
console.log("App listening on port " + process.env.PORT);



































