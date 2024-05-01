import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import clientRoutes from "./routes/clientRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api/v1/client", clientRoutes);

mongoose
  .connect("mongodb://localhost:27017/clientDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
