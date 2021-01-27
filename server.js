import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./src/api";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);
app.use((request, response, next) => {
  response.status(404).send("<h2 align=center>Page Not Found!</h2>");
});

const MONGO_DB = "mongodb://localhost:27017/todos";
mongoose.connect(MONGO_DB);

const PORT = process.env.PORT || 3001;
app.listen(PORT);
