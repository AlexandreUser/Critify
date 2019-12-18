const express = require("express");
require("dotenv").config({ path: "./src/.env" });

const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use("/", require("./route"));

const port = process.env.PORT;
app.listen(port, "0.0.0.0");
