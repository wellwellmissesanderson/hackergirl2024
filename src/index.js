import './app.css';

console.log('hey')

let on = false;
document.getElementById('toggle').addEventListener('click', e => {
  on = !on;
  console.log('clicked', on);

  document.getElementById('sliding-background').classList.toggle('slide');
})