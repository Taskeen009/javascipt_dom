////FIVE MAJOR WAYS OF SELECTING ELEMENTS////
//DOM MANIPULATION
//GETELEMENT BY ID()
const title = document.getElementById("main-heading");
console.log(title);
//GETELEMENTBYCLASSNAME()
let list = document.getElementsByClassName("list-items");
console.log(list);
//GET ELEMT BY TAGE NAME
let listy = document.getElementsByTagName("li");
console.log(listy);
//QUERY SECLECTOR()
const cont = document.querySelector("div");
console.log(cont);
//QUERY SELECTORALL()
const all = document.querySelectorAll("div");
console.log(all);

const heading = document.querySelector("#main-heading");
heading.style.color = "red";

const lis = document.querySelectorAll(".list-items");
for (let i = 0; i < lis.length; i++) {
  lis[i].style.color = "blue";
  lis[i].style.fontSize = "23px";
  lis[i].style.border = "solid 2px red";
}

//CREATING ELEMNST
const ul = document.querySelector("ul");
const li = document.createElement("li");
//ADDING ELEMENT
ul.append(li);
//MADIFIYING THE TEXT
li.innerText = "X-Men";
//MODIFYING ATTRIBUTES AND CLASSES
li.setAttribute("id", "main-heading");
//li.removeAttribute("id");

/////////
const firstlistitem = document.querySelector(".list-items");
console.log(firstlistitem.innerText);
console.log(firstlistitem.textContent);
console.log(firstlistitem.innerHTML);

const ti = document.querySelector("#main-heading");
console.log(ti.getAttribute("id"));
////MODIFYING CLASSEA AND ATRIBUTES
li.classList.add("list-items");
//li.classList.remove('list-items')
console.log(li.classList.contains("list-items"));
//REMOVE ELEMENTS
//li.remove();

let u = document.querySelector("ul");
console.log(ul.parentNode);
console.log(ul.parentElement);
console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

const htm = document.documentElement;
console.log(htm);
console.log(htm.parentNode);
console.log(htm.parentElement);

//CHILD NODE TRAVERSAL
let ull = document.querySelector("ul");
console.log(ull.childNodes);
console.log(ull.firstChild);
console.log(ull.lastChild);
//ull.firstChild.style.backgroundColor = "pink";
ull.childNodes[1].style.backgroundColor = "pink";
console.log(ull.children);
console.log(ull.firstElementChild);
console.log(ul.lastElementChild);

//SIBLING NODE TRAVERSAL
let lu = document.querySelector("ul");
const di = document.querySelector("div");
console.log(di.childNodes);
console.log(lu.previousSibling);
console.log(lu.nextSibling);
