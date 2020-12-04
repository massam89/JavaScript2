const quotes = [
  {
    quote: 'If you judge people, you have no time to love them',
    author: 'Mother Teresa'
  },
  {
    quote: 'All that we are is the result of what we have thought',
    author: 'Buddha'
  },
  {
    quote: 'The most courageous act is still to think for yourself',
    author: 'Aloud. Coco'
  },
  {
    quote: 'Stay hungry, stay foolish',
    author: 'Steve Jobs'
  },
  {
    quote: 'The greatest wealth is to live content with little',
    author: 'Plato '
  },
  {
    quote: 'The future belongs to those who prepare for it today',
    author: 'Malcolm X'
  },
  {
    quote: 'The successful warrior is the average man, with laser-like focus',
    author: 'Bruce Lee'
  },
  {
    quote: 'A great man is always willing to be little',
    author: 'Ralph Waldo Emerson'
  },
  {
    quote: 'Don’t count the days, make the days count',
    author: 'Muhammad Ali'
  },
  {
    quote: 'In order to be irreplaceable one must always be different',
    author: 'Coco Chanel'
  }
];

const quote = document.getElementById('quote');
const author = document.getElementById('author');
const button = document.getElementById('button');
let quoteNum = 0;


button.addEventListener('click', changeQuote);

function changeQuote() {
  quote.classList.remove('transition');
  setTimeout(() => {
    quote.classList.add('transition');
  }, 5)
  quote.textContent = quotes[quoteNum].quote;
  author.textContent = quotes[quoteNum].author;
  quoteNum++;
  if (quoteNum >= quotes.length) {
    quoteNum = 0;
  }
}