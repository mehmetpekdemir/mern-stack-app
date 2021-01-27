import express from "express";
import TodoRoutes from "./routes/TodoRoutes";

const app = express();

app.use("/todos", TodoRoutes);

module.exports = app;
