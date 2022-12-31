console.log("hi");
//DOM MANILPULATION

//EVENT LISTENERS
//element.addEvenListner("click",function)

const buttonTwo = document.querySelector(".btn-2");
function alertBtn() {
  alert(`i love you `);
}
//buttonTwo.addEventListener("click", alertBtn);
//MOUSEOVER
/*const newBackgroundColor = document.querySelector(".box-3");
function changebgcolor() {
  newBackgroundColor.style.backgroundColor = "blue";
}
newBackgroundColor.addEventListener("mouseover", changebgcolor);*/

//REVEAL EVENT
const revealBtn = document.querySelector(".reveal-btn");
const hiddencontent = document.querySelector(".hidden-content");
function revalContent() {
  if (hiddencontent.classList.contains("reveal-btn")) {
    hiddencontent.classList.remove("reveal-btn");
  } else {
    hiddencontent.classList.add("reveal-btn");
  }
}
revealBtn.addEventListener("click", revalContent);
