window.addEventListener("load", setup);

/* SHOP */
const endpoint = "http://guldsmedbayer.josefinemoerchh.com/wp-json/wp/v2/";

function setup() {
  getCategories();
}

function getCategories() {
  fetch(endpoint + "categories?parent=2&_fields.name")
    .then((res) => res.json())
    .then(setupCategories);
}
function getTheSmykker() {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");
  let endpoint =
    "http://guldsmedbayer.josefinemoerchh.com/wp-json/wp/v2/smykke?per_page=100&_embed";
  if (id) {
    endpoint = endpoint + "&categories[]=" + id;
  }
  fetch(endpoint)
    .then((res) => res.json())
    .then(setupSmykker);
}

function setupCategories(catArray) {
  const template = document.querySelector("template#category-template").content;
  const parentElement = document.querySelector(".shop-page main .categories");
  catArray.forEach((cat) => {
    const copy = template.cloneNode(true);
    copy.querySelector("a").textContent = cat.name;
    copy.querySelector("a").href = "?id=" + cat.id;

    parentElement.appendChild(copy);
  });
  getTheSmykker();
}

function setupSmykker(smykkeArray) {
  console.log(smykkeArray);
  const template = document.querySelector("template#smykke-template").content;
  const parentElement = document.querySelector(
    ".shop-page main section.smykker"
  );
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
