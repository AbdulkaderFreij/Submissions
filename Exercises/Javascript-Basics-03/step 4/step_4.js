let button = document.querySelector("button");
button.addEventListener("click", () => {
  let confirmation = document.querySelector("#confirmation");
  let password = document.querySelector("#password");
  if (password.value != confirmation.value) {
    confirmation.style.border = "3px red solid";
    password.style.border = "3px red solid";
  }
});
