const toggleBtn = document.querySelector(".burger_menu");
const slider = document.querySelector(".mobile-header-slide");
const sliderHeight = slider.getBoundingClientRect().height;
const burger = document.querySelector(".toggle-btn");
slider.style.height = "0px";

toggleBtn.addEventListener("click", function headerToggle(e) {
  burger.classList.toggle("active");
  if (burger.classList.contains("active")) {
    slider.style.height = `${sliderHeight}px`;
  } else {
    slider.style.height = "0px";
  }
});

const header = document.querySelector("header");
const headerHeightRegular = header.getBoundingClientRect().height;
header.style.transform = `translateY(-${headerHeightRegular}px)`;

window.addEventListener("scroll", function () {
  const currentPosition = window.pageYOffset;
  const headerHeight = header.getBoundingClientRect().height;
  if (currentPosition < headerHeightRegular) {
    hideHeader(headerHeight);
  } else {
    showHeader();
  }
});

function hideHeader(headerHeight) {
  header.style.transform = `translateY(-${headerHeight}px)`;
  burger.classList.remove("active");
  slider.style.height = "0px";
}

function showHeader() {
  header.style.transform = `translateY(0px)`;
}
