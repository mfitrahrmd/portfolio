var styles = {
  color: "red",
  width: "50px",
  height: "50px",
};
const btnEmail = document.querySelector(".email");
btnEmail.addEventListener("mouseenter", function () {
  this.textContent = "tgcfitrah26@gmail.com";
});
btnEmail.addEventListener("mouseleave", function () {
  this.textContent = "Let's work together!";
});

const time = document.querySelector("#banner .location p");

setInterval(() => {
  time.textContent = new Date().toLocaleTimeString();
}, 1000);
