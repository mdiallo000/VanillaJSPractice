const API_url = '	https://api.adviceslip.com/advice';

const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

btn.addEventListener('click', () => {
  getJoke(API_url);
});

const getJoke = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.slip.advice);
  content.textContent = data.slip.advice;
};
