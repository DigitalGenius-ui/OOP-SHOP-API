import express from "express";
import cors from "cors";
import productRouter from "./routes/Routes.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is home page");
});

// all products
app.use("/api/products", productRouter);

app.listen(port, () => {
  console.log(`Port is running in port ${port}`);
});
