const express = require("express");
const app = express();
require("./connection/connection.jsx");
const auth = require("./routes/auth.jsx");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1", auth);

app.listen(1000, () => {
  console.log("Server Started");
});
