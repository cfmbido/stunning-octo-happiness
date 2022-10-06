const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/students", (req, res) => {
  res.send("Hello Students");
});

app.listen(PORT, () => {
  console.log(`Listening to port: http://localhost:${PORT}`);
});
