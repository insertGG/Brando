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
  // Generate a random number of swaps (between 2 and 5)
  let numSwaps = Math.floor(Math.random() * 4) + 2;

  for (let i = 0; i < numSwaps; i++) {
    // Generate two distinct random indices
    let randomIndex1, randomIndex2;
    do {
      randomIndex1 = Math.floor(Math.random() * imgElements.length);
      randomIndex2 = Math.floor(Math.random() * imgElements.length);
    } while (randomIndex1 === randomIndex2);

    // Swap the images at the two indices
    let temp = imgElements[randomIndex1].src;
    imgElements[randomIndex1].src = imgElements[randomIndex2].src;
    imgElements[randomIndex2].src = temp;
  }

  // Set a random delay (between 0.5 and 1.5 seconds) before the next image change
  let delay = Math.floor(Math.random() * 500) + 1000;
  setTimeout(changeImage, delay);
}

// Start the image changes
changeImage();
