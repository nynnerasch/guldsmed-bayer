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

/* DESIGN DIT EGET SMYKKE FORM*/
let sendButton = document.getElementById("send-button-design");
const form = document.getElementById("form");

sendButton.addEventListener("click", function (e) {
  e.preventDefault();
  sendButton.value = "Send...";
  const serviceID = "default_service";
  const templateID = "template_wtrhctn";

  emailjs.sendForm(serviceID, templateID, form).then(
    () => {
      sendButton.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      send.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
