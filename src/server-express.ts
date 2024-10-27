import express, { Application } from "express";
import { PORT as port } from "./config";
import expenseRoute from "./routes/user.route";
// import masukMiddleWare from "./middlewares/masuk.middleware";

const PORT = Number(port) || 8000;

const app: Application = express();

// Middleware
app.use(express.json());
// app.use(masukMiddleWare);

// Route
app.use("/user-management", expenseRoute);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
