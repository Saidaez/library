import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import livreRoutes from "./routes/livreRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api/v1/livre", livreRoutes);

mongoose
  .connect("mongodb://localhost:27017/dbLivre", {
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
