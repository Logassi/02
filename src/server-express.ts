import express, { Application } from "express";
import { PORT as port } from "./config";
import userRoute from "./routes/user.route";

const PORT = Number(port) || 8000;

const app: Application = express();

// Middleware
app.use(express.json());

// Route
app.use("/user-management", userRoute);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
