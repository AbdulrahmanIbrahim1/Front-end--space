
// ================

setTimeout(()=>{
  console.log(typeof myob["crew"])
},6000)
// 

let allname = document.querySelector('[id="name"]');
console.log(allname.innerHTML)

let point = document.querySelectorAll('.point')
console.log(point)
point.onclick = () => {
  console.log("iam")
}

for(let i=0 ;i<point.length;i++){
  point[i].onclick=()=>{
      removeActive(point)
      point[i].classList.add("active")
      gitdata(i)
    // allname.innerHTML = myob["crew"][0]["name"]
    }
}

function removeActive(li) {
  for (let i = 0; i < li.length; i++) {
    li[i].classList.remove("active");
  }
}

function gitdata(a){
  allname.innerHTML = myob["crew"][a]["name"]
  document.getElementById("role").innerHTML = myob["crew"][a]["role"]
  document.getElementById("bio").innerHTML = myob["crew"][a]["bio"]
  document.getElementById("profimg").src = myob["crew"][a]["images"]["png"]
}