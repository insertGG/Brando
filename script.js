let images = [
  "source/polos1.png",
  "source/polos2.png",
  "source/polos3.png",
  "source/polos4.png",
  "source/polos5.png",
];
let index = 0;
let imgElements = Array.from(document.querySelectorAll("#polosImages img"));

function changeImage() {
  imgElements.forEach((imgElement, i) => {
    imgElement.src = images[(index + i) % images.length];
  });
  index = (index + 1) % images.length;
}

setInterval(changeImage, 3000);
