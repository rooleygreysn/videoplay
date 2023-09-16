const buttonEl = document.querySelector('#closeButton');
const overlayEl = document.querySelector('.overlay');

const turnOn = () => {
  overlayEl.style.display = 'block';
};

buttonEl.addEventListener('click', turnOn);

const turnOff = (e) => {
  if (e.target.matches('.overlay')) {
    overlayEl.style.display = 'none';
  }
};

window.addEventListener('click', turnOff);