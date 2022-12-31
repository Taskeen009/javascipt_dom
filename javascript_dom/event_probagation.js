/*THREE PAHSES
EVENT CAPTURIMG
TARGET
EVENT BUBBLING
 */
window.addEventListener(
  "click",
  function () {
    console.log("window");
  },
  true
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  true
);

document.querySelector(".div2").addEventListener(
  "click",
  function () {
    console.log("DIV 2");
  },
  true
);

document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("DIV 1");
  },
  true
);

document.querySelector("button").addEventListener(
  "click",
  function (e) {
    console.log((e.target.innerText = "clicked"));
  },
  true
);
// age sare true ko false kr dia toh ulta ho jaega phle root se target jaa rha tha aab target se root' jaega yhi bubbling hai
