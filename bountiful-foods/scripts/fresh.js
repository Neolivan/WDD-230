const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";
let fruitData = [];

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      fruitData = data
      setResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
apiFetch();

function setResults(results) {
  const firstoption = document.createElement("option");
  firstoption.value = "";
  firstoption.innerHTML = "Select...";
  const firstoption2 = document.createElement("option");
  firstoption2.value = "";
  firstoption2.innerHTML = "Select...";
  const firstoption3 = document.createElement("option");
  firstoption3.value = "";
  firstoption3.innerHTML = "Select...";
  const fruits1 = document.getElementById("first");
  const fruits2 = document.getElementById("second");
  const fruits3 = document.getElementById("third");
  fruits1.appendChild(firstoption);
  fruits2.appendChild(firstoption2);
  fruits3.appendChild(firstoption3);
  results.map((item) => {
    const option1 = document.createElement("option");
    option1.value = item.name;
    option1.innerHTML = item.name;
    fruits1.appendChild(option1);
    const option2 = document.createElement("option");
    option2.value = item.name;
    option2.innerHTML = item.name;
    fruits2.appendChild(option2);
    const option3 = document.createElement("option");
    option3.value = item.name;
    option3.innerHTML = item.name;
    fruits3.appendChild(option3);
  });
}

//Form submit

let formElem = document.getElementById("form");
formElem.addEventListener("submit", formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();
  console.log("Form submitted");
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const fruits1 = document.getElementById("first").value;
  const fruits2 = document.getElementById("second").value;
  const fruits3 = document.getElementById("third").value; 
  const specialInfo = document.getElementById("instructions").value; 
  const info1 = findFruitInfo(fruits1);
  const info2 = findFruitInfo(fruits2);
  const info3 = findFruitInfo(fruits3);
  console.log(info2)
  const totalAmount = {
    carbohydrates:( (info1.nutritions.carbohydrates) + (info2.nutritions.carbohydrates) + (info3.nutritions.carbohydrates)).toFixed(1),
    protein: ((info1.nutritions.protein) + (info2.nutritions.protein) + (info3.nutritions.protein)).toFixed(1), 
    fat: ((info1.nutritions.fat) + (info2.nutritions.fat) + (info3.nutritions.fat)).toFixed(1),
    sugar: ((info1.nutritions.sugar) + (info2.nutritions.sugar) + (info3.nutritions.sugar)).toFixed(1),
    calories: ((info1.nutritions.calories) + (info2.nutritions.calories) + (info3.nutritions.calories)).toFixed(1)
  }
  console.log(totalAmount)

  formElem.setAttribute("class", "d-none")

  const successOrder = document.getElementById('orderSuccess')
  successOrder.classList.remove('d-none')

  const successMensage ={
    client: {
        name: document.getElementById('c-name'),
        email: document.getElementById('c-email'),
        phone: document.getElementById('c-phone'),
        date: document.getElementById('c-date')
    },
    fruitInfo: {
        selected: document.getElementById('c-fruits'),
        special: document.getElementById('c-sepecial')
    },
    table:{
        carbo: document.getElementById("carbo"),
        protein: document.getElementById("protein"),
        fat: document.getElementById("fat"),
        sugar: document.getElementById("sugar"),
        calories: document.getElementById("calories")
    }
  }

  successMensage.client.name.innerHTML = name;
  successMensage.client.email.innerHTML = email;
  successMensage.client.phone.innerHTML = phone;
  successMensage.client.date.innerHTML = (new Date()).toDateString();

  successMensage.fruitInfo.selected.innerHTML= `${fruits1} ; ${fruits2} ; ${fruits3}`
  successMensage.fruitInfo.special.innerHTML = specialInfo;

  successMensage.table.carbo.innerHTML = totalAmount.carbohydrates;
  successMensage.table.protein.innerHTML = totalAmount.protein;
  successMensage.table.fat.innerHTML = totalAmount.fat;
  successMensage.table.sugar.innerHTML = totalAmount.sugar;
  successMensage.table.calories.innerHTML = totalAmount.calories;

console.log(localStorage.getItem("orderCount"))
let counter =  localStorage.getItem("orderCount");

if(counter){
    localStorage.setItem("orderCount", parseInt(counter) + 1);
}else{
    localStorage.setItem("orderCount", 1);
}

}

function findFruitInfo(fruit){
    let fruitInfo;
    for(let i = 0 ; i < fruitData.length;i ++){
        if(fruitData[i].name == fruit){
            fruitInfo = fruitData[i];
            break
        }
    }
    return fruitInfo
}
