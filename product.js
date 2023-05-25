/* SINGLE PRODUCT */
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `guldsmedbayer.josefinemoerchh.com/wp-json/wp/v2/smykke/${id}`;
//console.log(urlParams.get("id"));
console.log(url);

//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showSmykke(data));

//populate the page

function showProduct(smykke) {
  console.log(smykke);
  document.querySelector("h1 .productname").textContent = smykke.title.rendered;
  document.querySelector("h3 .price").textContent = smykke.price;
  //document.querySelector(".product-img").src=`http://127.0.0.1:5500/assets/cross-ring.png`
}
