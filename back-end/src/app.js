const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
const morgan = require("morgan");
const express = require("express");
const cors = require("cors");

const reservationsRouter = require("./reservations/reservations.router");
const tablesRouter = require("./tables/tables.router");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/reservations", reservationsRouter);
app.use("/tables", tablesRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
