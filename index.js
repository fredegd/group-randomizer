const express = require("express");
require("dotenv").config();
const path = require("path")
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

const port = process.env.PORT || 3011;


app.use(express.static(path.join(__dirname, "client", "dist")))

const { errorHandler } = require("./middlewares/errorHandler");

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(cookieParser());

app.use(express.json());


const createGroupRouter = require("./routes/createGroupRouter");
app.use("/api/create", createGroupRouter);


// app.get("*", (req, res)=>{
//   res.sendFile(path.join(__dirname, "client", "dist", "index.html" ))
// })

app.use(errorHandler);

app.listen(port, () =>
console.log(`Server is successfully running on http://localhost:${port}`)
);
