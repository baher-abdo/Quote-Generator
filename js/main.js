let quoteContent = document.getElementById("quote-content");

let quotes = [
  {quote:"“In three words I can sum up everything I've learned about life: it goes on.”",author:"― Robert Frost"},
  {quote:"“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”",author:"― Albert Camus"},
  {quote:"“Without music, life would be a mistake.”",author:"― Friedrich Nietzsche"},
  {quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",author:"― Albert Einstein"},
  {quote:"“A friend is someone who knows all about you and still loves you.”",author:"― Elbert Hubbard"},
  {quote:"“Be the change that you wish to see in the world.”",author:"― Mahatma Gandhi"},
];

let index;
function getQuote() {
  let randomValue = Math.ceil(Math.random() * (quotes.length - 1));
  if (randomValue == index) {
    index = 0;
  } else {
    index = randomValue;
  }
  quoteContent.innerHTML = ` 
  <span class="icon text-info-emphasis"></span>
  <p id="quote" class="fw-medium fs-2 px-2">${quotes[index].quote}</p>
  <p id="signature" class="fw-medium fs-2 px-2">${quotes[index].author}</p>
  `
}
getQuote();
