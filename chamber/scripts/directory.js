
fetch('./assets/data.json')
    .then((response) => response.json())
    .then((json) =>{
         console.table(json)
         displayCards(json)
        });


function displayCards(resp){

    const cards = document.querySelector('div.cards'); // select the output container element
  
    resp.forEach((item) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let a1 = document.createElement('a');
      let portrait = document.createElement('img');
      let memberClass =(`${item.membershipLevel}`).toLowerCase()
  
      // Build the h2 content out to show the item's  - finish the template string
      h2.textContent = `${item.name}`;

      //Info
      p1.textContent = `Address: ${item.addresses}`
      p2.textContent = `Phone: ${item.phone}`

      //Membership Level
      p3.textContent = `${item.membershipLevel}`
      p3.setAttribute('class', `${memberClass}`)

      //website
      a1.setAttribute('href', `${item.website}`)
      a1.textContent = `Website: ${item.website}`

  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', item.image);
      portrait.setAttribute('class', "dirImg");
      portrait.setAttribute('alt', `Portait of ${item.name}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(a1);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(portrait);
      card.appendChild(p3);
  
      cards.appendChild(card);
    }) // end of forEach loop
}


    
