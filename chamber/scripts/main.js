// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
const mainnav = document.querySelector('.menu')
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  console.log('entrou')
  hamburger.classList.toggle("is-active");
  mainnav.classList.toggle('responsive')
  // Do something else, like open/close menu
});

//current date
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
document.querySelector('#date').innerHTML = fulldate

const lastMod = document.lastModified
const date = new Date(document.lastModified)
const year = date.getFullYear()
console.log(year)
document.getElementById('year').innerHTML = year
document.getElementById('last').innerHTML = lastMod