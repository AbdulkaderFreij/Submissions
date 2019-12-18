function myFunc() {
  const images = document.querySelectorAll("img");
  for (let i = 0; i < 5; i++) {
    images[i].addEventListener("mouseover", () => {
      images[i].src = "images/image" + (i + 1) + "_2.jpg";
    });
  }
}
myFunc();

function myFunc2() {
  const images = document.querySelectorAll("img");
  for (let i = 0; i < 5; i++) {
    images[i].addEventListener("mouseout", () => {
      images[i].src = "images/image" + (i + 1) + ".jpg";
    });
  }
}
myFunc2();
