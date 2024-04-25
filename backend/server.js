const express = require("express");
const dbConnect = require("./database/index");
const app = express();
const {PORT} = require("./config/index");
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");

dbConnect();

app.use(cookieParser());
app.use(express.json());

app.use(router);

// app.get("/", (req, res) => {
//   res.send("Hello World1123!");
// });

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
