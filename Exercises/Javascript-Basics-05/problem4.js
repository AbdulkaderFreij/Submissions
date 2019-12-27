function myFunction() {
  let x = document.getElementById("num").value;
  let sum = 0;
  for (let i = 1; i <= x; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  alert(sum);
}
