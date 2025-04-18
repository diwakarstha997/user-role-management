import express from "express";
import cors from "cors";
import { connectToMongoDb } from "./config/dbconfig.js";

// initialize express app and PORT
const app = express();
const PORT = 3000;

// middlewares
app.use(cors()); // For Cross Origin Requests
app.use(express.json()) // parse incoming requests with JSON payloads

// database configuration
connectToMongoDb();

// Start Server and Listen to Request
app.listen(PORT, (error) => {
    error
        ? console.log("Cannot start server !!! \n Error: "+error)
        : console.log("Server started at port:"+PORT)
})