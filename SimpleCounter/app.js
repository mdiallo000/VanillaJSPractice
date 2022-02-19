// ** step one select the number and the buttons
// const increaseBtn = document.querySelector('.btn decrease');
// console.log(increaseBtn);
// const decreaseBtn = document.querySelector('.btn decrease');
// const resetBtn = document.querySelector('.btn reset');
let number = document.querySelector('#value');
// * intintialize a counter
let counter = 0;

// * A smart way of performing this action is selecting all our buttons

const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let styles = e.target.classList;

    if (styles.contains('increase')) {
      counter++;
    } else if (styles.contains('decrease')) {
      counter--;
    } else {
      counter = 0;
    }
    if (counter < 0) {
      number.style.color = 'red';
    }
    if (counter > 0) {
      number.style.color = 'green';
    }
    if (counter == 0) {
      number.style.color = 'black';
    }

    number.innerHTML = counter;
  });
});
