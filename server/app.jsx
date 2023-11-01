const express = require("express");
const app = express();
require("./connection/connection.jsx");
const auth = require("./routes/auth.jsx");
const task = require("./routes/task.jsx");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1", auth);
app.use("/api/v2", task);

app.listen(1000, () => {
  console.log("Server Started");
});
