const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let btn = document.querySelector('.btn');
let color = document.querySelector('.color');

btn.addEventListener('click', () => {
  let hexcolor = '#';
  let randomNumber = Math.floor(Math.random() * hex.length);
  console.log(randomNumber);
  for (let i = 0; i < 6; i++) {
    hexcolor += hex[getRandomNum()];
  }
  color.innerHTML = hexcolor;
  document.body.style.backgroundColor = hexcolor;
});

//**I tried to ways of doing this and only the functional way worked */

function getRandomNum() {
  return Math.floor(Math.random() * hex.length);
}
