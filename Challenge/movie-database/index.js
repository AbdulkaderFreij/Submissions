const express = require("express");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("ok");
});

app.get("/test", (req, res) => {
  res.json({ status: 200, message: "ok" });
});

app.get("/time", (req, res) => {
  var dt = new Date();
  //  dt.setHours( dt.getHours() + 2 );
  res.json({ status: 200, message: `${dt.getHours()}:${dt.getMinutes()}` });
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
