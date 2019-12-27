function myFunction() {
  let x = document.getElementById("num").value;
  let result = "\n";
  if (x == 1) {
    for (let i = 0; i < 13; i++) {
      result += x * i + " ";
    }
    alert(result);
  } else if (x == 2) {
    for (let i = 0; i < 13; i++) {
      result += x * i + " ";
    }
    alert(result);
  }
}
