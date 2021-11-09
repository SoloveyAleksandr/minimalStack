const mouseCursor = document.querySelector('.circle-1');
const circle2 = document.querySelector('.circle-2');
const circle3 = document.querySelector('.circle-3');
const circle4 = document.querySelector('.circle-4');
const circle5 = document.querySelector('.circle-5');
const circle6 = document.querySelector('.circle-6');
const circle7 = document.querySelector('.circle-7');
const circle8 = document.querySelector('.circle-8');
const circle9 = document.querySelector('.circle-9');

function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min));
}

document.onmousemove = (e) => {
  const posX = e.clientX;
  const posY = e.clientY;
  mouseCursor.style.left = `${posX - 15}px`;
  mouseCursor.style.top = `${posY - 15}px`;
  setTimeout(() => {
    circle2.style.left = `${posX - getRandomNum(15, 35)}px`;
    circle2.style.top = `${posY - getRandomNum(15, 35)}px`;
  }, 70);
  setTimeout(() => {
    circle3.style.left = `${posX + getRandomNum(15, 35)}px`;
    circle3.style.top = `${posY - getRandomNum(30, 50)}px`;
  }, 100);
  setTimeout(() => {
    circle4.style.left = `${posX - getRandomNum(15, -5)}px`;
    circle4.style.top = `${posY + getRandomNum(15, 35)}px`;
  }, 150);
  setTimeout(() => {
    circle5.style.left = `${posX + getRandomNum(5, 25)}px`;
    circle5.style.top = `${posY + getRandomNum(0, 10)}px`;
  }, 40);
  setTimeout(() => {
    circle6.style.left = `${posX - getRandomNum(15, 35)}px`;
    circle6.style.top = `${posY + getRandomNum(5, 25)}px`;
  }, 200);
  setTimeout(() => {
    circle7.style.left = `${posX - getRandomNum(15, 35)}px`;
    circle7.style.top = `${posY - getRandomNum(80, 100)}px`;
  }, 115);
  setTimeout(() => {
    circle8.style.left = `${posX + getRandomNum(50, 70)}px`;
    circle8.style.top = `${posY + getRandomNum(50, 70)}px`;
  }, 170);
  setTimeout(() => {
    circle9.style.left = `${posX - getRandomNum(40, 60)}px`;
    circle9.style.top = `${posY + getRandomNum(10, 30)}px`;
  }, 60);
}