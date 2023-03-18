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
document.getElementById('update').innerHTML = lastMod

fetch('./assets/data.json')
    .then((response) => response.json())
    .then((json) =>{
         console.table(json)
         displayCards(json)
        });

        function displayCards(resp){

          const cards = document.querySelector('section.simple2'); // select the output container element
        
          for (let index = 0; index < 3; index++) {

             // Create elements to add to the div.cards element
             let card = document.createElement('section');
             let h1 = document.createElement('h1');
             let portrait = document.createElement('img');
             let h12 = document.createElement('h1');
             let h3 = document.createElement('h3');
             let h31 = document.createElement('h3');
         
             // Build the h2 content out to show the item's  - finish the template string
             h1.textContent = `${resp[index].name}`;
       
             //Info
             h12.textContent = `${resp[index].addresses}`
             h31.textContent = `${resp[index].phone}`
             h31.setAttribute('id', 'contact')
       
             //website
             h12.textContent = `${resp[index].website}`
              h12.setAttribute('class', 'website1')
         
             // Build the image portrait by setting all the relevant attribute
             portrait.setAttribute('src', resp[index].image);
             portrait.setAttribute('alt', `Portait of ${resp[index].name}`);
             portrait.setAttribute('loading', 'lazy');
             portrait.setAttribute('width', '340');
             portrait.setAttribute('height', '440');
         
             // Append the section(card) with the created elements
             card.appendChild(h1);
             card.appendChild(portrait);
             card.appendChild(h12);
             // card.appendChild(h3);
             card.appendChild(h31);
         
             cards.appendChild(card);
            
          }
      }