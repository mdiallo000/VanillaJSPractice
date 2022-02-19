// *First get the url endpoint link where we will fetch our jokes

const api_url = 'https://api.chucknorris.io/jokes/random';

// * Next, get the nodes to our button and the P element where we will display our jokes

const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

// * now we can take our button and add a click event where whenever it is pressed we will make an api call and display random jokes.

btn.addEventListener('click', () => {
  console.log('hello');
  getData(api_url);
});

// * We make a seperate function with our xhr object and send the request to the api server

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) return;
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      //* if we get the proper response we can then convert it into JSon so that we can extract the value out, because our intial response is in a string format
      const response = JSON.parse(xhr.responseText);
      console.log(response);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };
}
