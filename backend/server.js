const express = require("express");
const dbConnect = require("./database/index");
const app = express();
const {PORT} = require("./config/index");
const router = require("./routes/index");

dbConnect();

app.use(router);

// app.get("/", (req, res) => {
//   res.send("Hello World1123!");
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
