function myFunction() {
  let x = document.getElementById("prime").value;
  let arr = [];
  if (x == "prime") {
    for (let i = 2; i <= 30; i++) {
      let notPrime = false;
      for (let j = 2; j <= i; j++) {
        if (i % j === 0 && i !== j) {
          notPrime = true;
        }
      }
      if (notPrime === false) {
        arr.push(i);
      }
    }
    alert(arr);
  } else alert("enter the right text");
}
