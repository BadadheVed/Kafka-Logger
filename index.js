import express from "express";
import userRouter from "./routes.js";

const app = express();
import dotenv from "dotenv";
dotenv.config();
app.use(express.json());
app.use(userRouter);
const PORT = process.env.PORT || 8080;
app.get("/", (req, res) => {
  console.log("Health OK!!!!");
  res.send("Health Ok!!!!!!");
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// import express from "express";
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is running 🚀");
// });

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });
