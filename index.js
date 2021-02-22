import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import config from "config";
import postRoutes from "./routes/posts.js";

const app = express();
app.use("/posts", postRoutes);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// DB Config
const db = config.get("mongoURI");

//Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected ..."))
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);

//PORT for Server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));
