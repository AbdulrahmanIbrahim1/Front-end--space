let icon = document.getElementsByClassName("icon")[0]
let ull = document.getElementById("for-click")
console.log(ull)
icon.addEventListener("click", function () {
  console.log("done")
  ull.classList.add("clickList")
})
ull.addEventListener("mouseleave", function () {
  console.log("done2")
  ull.classList.remove("clickList")
})
