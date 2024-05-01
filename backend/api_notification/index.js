import express from "express";
import bodyParser from "body-parser";
import notificationRoutes from "./routes/notificationRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api/v1/notification", notificationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
