/**
 
 ** Exercise 4: What 's the time? **
 
 Why wear a watch when you can check the time, live in your webpage ?

  1. Create a basic HTML file
  2. in the HTML file Include a script tag and link the JavaScript file
  3. Inside the JS file, write a function that adds the current time to the webpage. Make sure it 's written in the HH:MM:ss notation (hour, minute, second). Hint: use `setInterval()` to make sure the time stays current
  4. Have the function execute when it 's loading in the browser

 */
const timeP = document.createElement('p');

function displayCurrentTime() {
  // your code goes in here
  const now = new Date();
  timeP.innerText = `${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`;
  document.body.appendChild(timeP);
  timeP.style.textAlign = 'center';
  timeP.style.fontSize = '24px'
}

setInterval(displayCurrentTime, 1000);