let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  { quote: `"the best way is to stay strong"`, person: "gandhi" },
  {
    quote: `"you are slaying"`,
    person: "me",
  },
  {
    quote: `"love is in the air"`,
    person: "love",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
