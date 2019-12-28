function myFunction() {
  let x = document.getElementById("num").value;
  let result = "\n";
  if (x) {
    for (let i = 1; i < 13; i++) {
      result += x * i + " ";
    }

    alert(result);
  }
}
