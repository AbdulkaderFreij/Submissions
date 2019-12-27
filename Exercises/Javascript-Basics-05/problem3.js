function myFunction() {
  let x = document.getElementById("num").value;
  let sum = 0;
  for (let i = 1; i <= x; i++) {
    sum += i;
  }
  alert(sum);
}
