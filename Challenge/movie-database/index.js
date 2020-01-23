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
    res.status(500).json({
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
  res.json({ status: 200, message: "ok", data: movies });
});

app.get("/movies/get/by-date", (req, res) => {
  const sortedByDate = movies.sort((a, b) => b.year - a.year);

  res.json({ status: 200, message: "ok", data: sortedByDate });
});

app.get("/movies/get/by-rating", (req, res) => {
  const sortedByRate = movies.sort((a, b) => b.rating - a.rating);

  res.json({ status: 200, message: "ok", data: sortedByRate });
});

app.get("/movies/get/by-title", (req, res) => {
  const sortedByTitle = movies.sort((a, b) =>
    a.title.localeCompare(b.title, "es", { sensitivity: "base" })
  );

  res.json({ status: 200, message: "ok", data: sortedByTitle });
});

app.get("/movies/add?", (req, res) => {
  const year = req.query.year;
  const title = req.query.title;
  const rating = req.query.rating;

  let errors = [];
  if (!year) {
    errors.push({
      status: 403,
      error: true,
      message: "you cannot create a movie without providing a year"
    });
  } else if (!title) {
    errors.push({
      status: 403,
      error: true,
      message: "you cannot create a movie without providing a title"
    });
  } else if (!year.match(/^-{0,1}\d+$/)) {
    errors.push({
      status: 403,
      error: true,
      message: "year should be a number"
    });
  } else if (parseInt(title)) {
    errors.push({
      status: 403,
      error: true,
      message: "title should be a string"
    });
  } else if (year.length !== 4) {
    errors.push({
      status: 403,
      error: true,
      message: "year should be 4 digits"
    });
  }

  if (errors.length > 0) {
    res.json({ status: 403, error: true, message: errors });
  } else if (!rating) {
    movies.push({ title: title, year: year, rating: 4 });
    res.json({ title: title, year: year, rating: 4 });
  } else {
    movies.push({ title: title, year: year, rating: rating });
    res.json({ title: title, year: year, rating: rating });
  }
});

app.get("/movies/edit", (req, res) => {
  res.json({ status: 200, data: "Do you have any update?" });
});

app.get("/movies/delete", (req, res) => {
  res.json({ status: 200, data: "Are you sure you want to delete the movie?" });
});

app.get("/movies/get/id/:id?", (req, res) => {
  const id = req.params.id;
  if (id <= movies.length && id > 0) {
    res.json({ status: 200, message: "ok", data: movies[id - 1] });
  } else
    res.status(500).json({
      status: 404,
      error: true,
      message: "the movie <ID> does not exist"
    });
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
