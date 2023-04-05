// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
const mainnav = document.querySelector('.menu-small')
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  console.log('entrou')
  hamburger.classList.toggle("is-active");
  mainnav.classList.toggle('responsive')
  // Do something else, like open/close menu
});

document.getElementById('update').innerHTML = document.lastModified


