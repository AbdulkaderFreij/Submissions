function result() {
  var number1 = document.getElementById("shoe_size").value;
  var number2 = document.getElementById("year").value;
  var result = (number1 * 2 + 5) * 50 - number2 + 1766;
  alert("result: " + result);
}
