function myFunction() {
  let x = document.getElementById("name").value;
  if (x.toUpperCase() == "ALICE" || x.toUpperCase() == "BOB") {
    alert("Hello " + x);
  } else alert("Hello Stranger");
}
