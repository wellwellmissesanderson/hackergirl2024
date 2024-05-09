import './app.css';
import './App.jsx';

console.log('hey')

// move background
let on = false;
document.getElementById('toggle').addEventListener('click', e => {
  on = !on;
  console.log('clicked', on);

  document.getElementById('sliding-background').classList.toggle('slide');
})

// penguin jump
const penguin = document.getElementById('penguin');
penguin.addEventListener('click', e => {
  penguin.classList.toggle('penguin-standing');
  penguin.classList.toggle('penguin-jumping');
})

// https://css-tricks.com/books/fundamental-css-tactics/infinite-scrolling-background-image