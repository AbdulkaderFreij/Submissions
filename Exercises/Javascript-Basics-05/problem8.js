let y = Math.floor(Math.random() * 100 + 1);
let guess = 0;
let triesRemaining = 8;
function myFunction() {
  let x = Number(document.getElementById("guess-number").value);
  if (x == y) {
    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " Tries ");
    return guess;
  } else if (x > y) {
    document.getElementById("hint").innerHTML =
      "OOPS SORRY!! TRY A SMALLER NUMBER " +
      --triesRemaining +
      " Tries remaining";
  } else if (x < y) {
    document.getElementById("hint").innerHTML =
      "OOPS SORRY!! TRY A bigger NUMBER " +
      --triesRemaining +
      " Tries remaining";
  }
  guess++;
  if (guess == 8) {
    alert("out of tries, gameover");
    window.location.reload(false);
  }
}
