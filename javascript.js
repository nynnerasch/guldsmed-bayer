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
  fetch(endpoint + "categories?parent=2&_fields.name")
    .then((res) => res.json())
    .then(setupCategories);
}
function getTheSmykker() {
  fetch(
    "http://guldsmedbayer.josefinemoerchh.com/wp-json/wp/v2/smykke?per_page=100&_embed"
  )
    .then((res) => res.json())
    .then(setupSmykker);
}

function setupSmykker(smykkeArray) {
  console.log(smykkeArray);
  const template = document.querySelector("template#smykke-template").content;
  const parentElement = document.querySelector(".shop-page main section");
  smykkeArray.forEach((smykke) => {
    const copy = template.cloneNode(true);
    copy.querySelector("img").src =
      smykke._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.full.source_url;
    console.log(
      smykke._embedded["wp:featuredmedia"][0].media_details.sizes.full
        .source_url
    );
    copy.querySelector("h3").textContent = `${smykke.title.rendered}`;
    copy.querySelector("h3.price").textContent = `${smykke.price}`;
    parentElement.appendChild(copy);
  });
}

function setupCategories(catArray) {
  const template = document.querySelector("template#category-template").content;
  const parentElement = document.querySelector("main");
  catArray.forEach((cat) => {
    const copy = template.cloneNode(true);
    copy.querySelector("h2").textContent = cat.name;
    parentElement.appendChild(copy);
  });
  getTheSmykker();
}
