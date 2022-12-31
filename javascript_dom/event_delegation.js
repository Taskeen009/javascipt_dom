console.log("jo");

document.querySelector("#football").addEventListener("click", function (e) {
  console.log("football is clicked");
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "lightgreen";
  }
});

document.querySelector("#basketball").addEventListener("click", function (e) {
  console.log("basketball is clicked");
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "lightgreen";
  }
});

document.querySelector("#boxing").addEventListener("click", function (e) {
  console.log("boxing is clicked");
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "lightgreen";
  }
});

document.querySelector("#tennis").addEventListener("click", function (e) {
  console.log("tennis is clicked");
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "lightgreen";
  }
});

document.querySelector("#golf").addEventListener("click", function (e) {
  console.log("golf is clicked");
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "lightgreen";
  }
});

document.querySelector("#sports").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id") + "is clicked");
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "pink";
  }
});

const sports = document.querySelector("#sports");
const newSport = document.createElement("li");
newSport.innerText = "rugby";
newSport.setAttribute("id", "rugby");
sports.appendChild(newSport);
