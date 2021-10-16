const images = document.querySelectorAll(".background-images img");
const bgImages = document.querySelectorAll(".bg-images");

bgImages.forEach(function (bgimage) {
  if (window.innerWidth > 1200) {
    bgimage.style.height = `${images[0].getBoundingClientRect().height - 94}px`;
  } else {
    bgimage.style.height = `${images[0].getBoundingClientRect().height}px`;
  }
});
window.addEventListener("resize", function () {
  bgImages.forEach(function (bgimage) {
    bgimage.style.height = `${images[0].getBoundingClientRect().height}px`;
  });
});

let counter = 0;
setInterval(() => {
  images.forEach(function (image) {
    image.style.opacity = "0";
  });
  counter++;
  if (counter == images.length) {
    counter = 0;
  }
  images[counter].style.opacity = "1";
}, 3000);
