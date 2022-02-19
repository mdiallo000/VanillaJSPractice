const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  let randomNumber = Math.floor(Math.random() * 3);
  document.body.style.backgroundColor = colors[randomNumber];
  color.innerHTML = colors[randomNumber];
});
