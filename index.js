// const burgerMenu = document.querySelector(".burger-menu");
// const links = document.querySelector(".navbar a");

// burgerMenu.addEventListener("click", () => {
//   links.classList.toggle("active");
// });
const burgerMenu = document.querySelector(".burger-menu");
const burgerMenuContent = document.querySelector(".burger-menu-content");
const closeButton = document.querySelector(".close-button");

burgerMenu.addEventListener("click", function () {
  document.body.classList.toggle("burger-menu-open");
});

closeButton.addEventListener("click", function () {
  document.body.classList.remove("burger-menu-open");
});

document.addEventListener("click", function (event) {
  if (
    !event.target.closest(".burger-menu") &&
    !event.target.closest(".burger-menu-content")
  ) {
    document.body.classList.remove("burger-menu-open");
  }
});
const title = document.querySelector(".title");

title.addEventListener("click", function () {
  window.location.href = "./index.html";
});
