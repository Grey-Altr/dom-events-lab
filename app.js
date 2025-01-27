/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');


/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
  button.addEventListener("click"),
    (event) => {
      console.log(event.target.innerText);
    };
});

calculator.addEventListener('click', (event) => {
    console.log(event.target.innerText);

    if(event.target.classList.contains('number')) {
        
    }
})

/*-------------------------------- Functions --------------------------------*/
