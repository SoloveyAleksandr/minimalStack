const menuBtn = document.querySelector('.menu-btn');
const menuBox = document.querySelector('.menu__box');

const arrowBtns = document.querySelectorAll('.cube-buttons__btn');
const arrowUp = document.querySelector('.arrow-up');
const arrowLeft = document.querySelector('.arrow-left');
const arrowDown = document.querySelector('.arrow-down');
const arrowRight = document.querySelector('.arrow-right');


menuBtn.addEventListener('click', (e) => {
    menuBtn.classList.toggle('active');
    menuBox.classList.toggle('active');
})

const cube = document.querySelector('.cube');
let rotateY = 22;
let rotateX = 12;
const allSides = document.querySelectorAll('.side');

document.onkeydown = function (e) {
    if (e.key.includes('Arrow')) {
        arrowBtns.forEach(btn => {
            btn.classList.remove('active');
        })
        if (e.key === 'ArrowLeft') {
            rotateY -= 2;
            arrowLeft.classList.add('active');
        }
        else if (e.key === 'ArrowUp') {
            rotateX -= 2;
            arrowUp.classList.add('active');
        }
        else if (e.key === 'ArrowRight') {
            rotateY += 2;
            arrowRight.classList.add('active');
        }
        else if (e.key === 'ArrowDown') {
            rotateX += 2;
            arrowDown.classList.add('active');
        }

        allSides.forEach(side => {
            side.classList.add('active');
        })

        cube.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    }
    return;
};

document.onkeyup = function (e) {
    if (e.key.includes('Arrow')) {
        allSides.forEach(side => {
            side.classList.remove('active')
        })
        arrowBtns.forEach(btn => {
            btn.classList.remove('active');
        })
    }
};

const mouseCursor = document.querySelector('.circle-1');
const circle2 = document.querySelector('.circle-2');
const circle3 = document.querySelector('.circle-3');
const circle4 = document.querySelector('.circle-4');
const circle5 = document.querySelector('.circle-5');
const circle6 = document.querySelector('.circle-6');
const circle7 = document.querySelector('.circle-7');
const circle8 = document.querySelector('.circle-8');
const circle9 = document.querySelector('.circle-9');


document.onmousemove = (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    mouseCursor.style.left = `${posX - 15}px`;
    mouseCursor.style.top = `${posY - 15}px`;
    setTimeout(() => {
        circle2.style.left = `${posX - 25}px`;
        circle2.style.top = `${posY - 25}px`;

    }, 70);
    setTimeout(() => {
        circle3.style.left = `${posX + 25}px`;
        circle3.style.top = `${posY -40}px`;
    }, 100);
    setTimeout(() => {
        circle4.style.left = `${posX - 5}px`;
        circle4.style.top = `${posY + 25}px`;
    }, 150);
    setTimeout(() => {
        circle5.style.left = `${posX + 15}px`;
        circle5.style.top = `${posY + 10}px`;
    }, 40);
    setTimeout(() => {
        circle6.style.left = `${posX - 25}px`;
        circle6.style.top = `${posY + 15}px`;
    }, 200);
    setTimeout(() => {
        circle7.style.left = `${posX - 25}px`;
        circle7.style.top = `${posY - 100}px`;
    }, 115);
    setTimeout(() => {
        circle8.style.left = `${posX + 60}px`;
        circle8.style.top = `${posY + 60}px`;
    }, 170);
    setTimeout(() => {
        circle9.style.left = `${posX - 50}px`;
        circle9.style.top = `${posY}px`;
    }, 60);
}