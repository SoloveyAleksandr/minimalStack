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

//mobile