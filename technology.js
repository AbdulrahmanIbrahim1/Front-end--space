let allname = document.querySelector('[id="name"]');
console.log(allname.innerHTML)

let point = document.querySelectorAll('.point')
console.log(point)
point.onclick = () => {
  console.log("iam")
}

for (let i = 0; i < point.length; i++) {
  point[i].onclick = () => {
    removeActive(point)
    point[i].classList.add("active")
    gitdata(i)
  }
}

function removeActive(li) {
  for (let i = 0; i < li.length; i++) {
    li[i].classList.remove("active");
  }
}

function gitdata(a) {
  allname.innerHTML = myob["technology"][a]["name"]
  document.getElementById("bio").innerHTML = myob["technology"][a]["description"]
  document.getElementById("profimg").src = myob["technology"][a]["images"]["portrait"]
}