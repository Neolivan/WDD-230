const count = document.getElementById("count");

function getCounter() {
  const current = localStorage.getItem("orderCount");
  console.log(current)
  if(current){
    count.innerHTML = current
}else{
      count.innerHTML = 0

  }
}

getCounter()
