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

/*SHOP PAGE DYNAMIC*/
const urlParams = new URLSearchParams(window.category.search);
const area = urlParams.get("category");

const url =
  "http://guldsmedbayer.josefinemoerchh.com/wp-json/wp/v2/smykke?filter=" +
  category;

//API-key
const options = {
  headers: {
    "x-apikey": "620a2fc134fd6215658584c2",
  },
};

//fetch the data
fetch(url, options)
  .then((res) => res.json())
  .then((data) => handleBarList(data));

function handleBarList(data) {
  data.forEach((bar) => {
    //console.log(bar);
    //Grab template
    const template = document.querySelector(".barListTemplate").content;
    //Clone it
    const clone = template.cloneNode(true);
    //Populate with data
    document.querySelector("h1").textContent = bar.location;
    clone.querySelector("h2").textContent = bar.barname;
    clone.querySelector(".barcontainer img").src = bar.img_url;
    clone.querySelector(".rating").textContent = bar.rating;
    clone.querySelector(".price").textContent = bar.pricerange;
    clone.querySelector("a").href += bar._id;
    clone.querySelector(".barcontainer a").href += bar._id;
    //Append it to the DOM
    const mainEL = document.querySelector("main");
    mainEL.appendChild(clone);
  });
}

/* INDIVIDUAL PRODUCT DYNAMIC*/
