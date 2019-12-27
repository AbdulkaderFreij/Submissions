function myFunction() {
  let x = document.getElementById("num").value;
  let choose = window.prompt("Please enter a number 1 for factorial 2 for sum");
  let sum = 0;
  let product = 1;
  if (choose == 1) {
    for (let i = 1; i <= x; i++) {
      product *= i;
    }
    alert(product);
  } else if (choose == 2) {
    for (let i = 1; i <= x; i++) {
      sum += i;
    }
    alert(sum);
  } else alert("enter a valid number");
}
