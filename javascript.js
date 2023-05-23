window.addEventListener("load", setup);
const endpoint = "http://guldsmedbayer.josefinemoerchh.com/wp-json/wp/v2/";

function setup() {
  getCategories();
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

/* MAKE SURE BURGERMENU CLOSES WHEN CLICKING NAVIGATION LINK*/

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

/* SHOP */
function getCategories() {
  fetch(endpoint + "categories?parent=2")
    .then((res) => res.json())
    .then(setupCategories);
}

function setupCategories(catArray) {
  const template = document.querySelector("templatecategorytemplate").Content;
  const parentElement = document.querySelector("main");
  catArray.forEach((cat) => {
    const copy = template.cloneNode(true);
    copy.querySelector("h2").textContent = cat.name;
    parentElement.appendChild(copy);
  });
}
