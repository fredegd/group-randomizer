const express = require("express");
require("dotenv").config();
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

const port = process.env.PORT || 3010;

app.use(express.static(path.join(__dirname, "client", "dist")));
require("./db");

const { errorHandler } = require("./middlewares/errorHandler");

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(cookieParser());

app.use(express.json());

const batchRouter = require("./routes/batchRouter");
const groupRouter = require("./routes/groupRouter");
const memberRouter = require("./routes/memberRouter");
const groupProjectsRouter = require("./routes/groupProjectsRouter");

app.use("/api/groups", groupRouter);

app.use("/api/batches", batchRouter);

app.use("/api/members", memberRouter);

app.use("/api/projects", groupProjectsRouter);

app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server is successfully running on http://localhost:${port}`)
);
