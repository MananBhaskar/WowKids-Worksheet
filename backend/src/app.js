const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const CORS = require("cors");
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(
  CORS({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
const errorMiddleware = require("./middlewares/error.middleware");
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"));


app.use('/api/v1', require('./routes/auth.routes'));
app.use('/api/v1/admin', require('./routes/admin.routes'));



app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

app.get("/ping", (req, res) => {
  res.status(200).json({ message: "Server is awake" });
});

app.use(errorMiddleware);
module.exports = { app };
