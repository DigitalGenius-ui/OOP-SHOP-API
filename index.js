import express from "express";
import data from "./data/data.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("This is home page")
});

app.get("/api/products", (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Port is running in port ${port}`);
})