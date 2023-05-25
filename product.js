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

/*DYNAMIC PRODUCT*/
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `http://guldsmedbayer.josefinemoerchh.com/wp-json/wp/v2/smykke/${id}`;
console.log(urlParams.get("id"));
console.log(url);

//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

//populate the page
function showProduct(product) {
  console.log(product);
  document.querySelector("#product-text-section h1").textContent =
    product.title["rendered"];
  document.querySelector("#product-text-section h3").textContent =
    product.price;
  document.querySelector("#product-text-section p").textContent =
    product.description;
  //document.querySelector("#img-section img").src =
  // product._links["wp:featuredmedia"][0].href;
}

/* PRODUCT QUANTITY */
function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}
