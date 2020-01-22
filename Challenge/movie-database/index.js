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
  res.json({ status: 200, message: `${dt.getHours()}:${dt.getMinutes()}` });
});

app.get("/search", (req, res) => {
  const id = req.query.s;
  if (id) {
    res.json({ status: 200, message: "ok", data: id });
  } else {
    res
      .status(500)
      .json({
        status: 500,
        error: true,
        message: "you have to provide a search"
      });
  }
});

app.get("/hello/:id?", (req, res) => {
  const id = req.params.id;

  if (id) {
    res.json({ status: 200, message: "Hello, " + id });
  } else {
    res.json({ status: 200, message: "Hello" });
  }
});

const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 }
];

app.get("/movies/get", (req, res) => {
  res.json({ status: 200, data: movies });
});

app.get("/movies/add", (req, res) => {
  res.json({ status: 200, data: "I can add movies!!" });
});

app.get("/movies/edit", (req, res) => {
  res.json({ status: 200, data: "Do you have any update?" });
});

app.get("/movies/delete", (req, res) => {
  res.json({ status: 200, data: "Are you sure you want to delete the movie?" });
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
