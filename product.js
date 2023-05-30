/*DYNAMIC PRODUCT*/
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `http://guldsmedbayer.josefinemoerchh.com/wp-json/wp/v2/smykke/${id}?_embedded`;
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
  document.querySelector(".product-img").src =
    //product._links["wp:featuredmedia"][0].href;
    product.productimage.guid;
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

// TILFØJETT TIL KURV

function vis() {
  alert("Godt valg! Smykket er blevet tilføjet til kurven");
}
