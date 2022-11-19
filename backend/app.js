import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
const app = express();
app.use("/api/user", router);
mongoose
  .connect(
    "mongodb+srv://admin:IMnPharJdhIP54N0@cluster0.lorjd0e.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("conneceted to mongodb"))
  .catch((err) => console.log(err));
