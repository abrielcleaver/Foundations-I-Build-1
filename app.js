// import functions and grab DOM elements

// initialize global state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state
const result = document.getElementById('random-num');
const generateButton = document.getElementById('generate');


generateButton.addEventListener('click', () => {
   // console.log('click');
   let randomNum = Math.floor(Math.random() * 100);
   result.textContent = randomNum;
})