const menuBtn = document.querySelector('.menu-btn');
const menuBox = document.querySelector('.menu__box');

const arrowBtns = document.querySelectorAll('.cube-buttons__btn');
const arrowUp = document.querySelector('.arrow-up');
const arrowLeft = document.querySelector('.arrow-left');
const arrowDown = document.querySelector('.arrow-down');
const arrowRight = document.querySelector('.arrow-right');

const cube = document.querySelector('.cube');
const allSides = document.querySelectorAll('.side');
let rotateY = 22;
let rotateX = 12;

menuBtn.addEventListener('click', (e) => {
    menuBtn.classList.toggle('active');
    menuBox.classList.toggle('active');
})

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

document.onmousedown = (e) => {
    document.onmouseup = () => {
        clearInterval(moove);
        arrowBtns.forEach(btn => btn.classList.remove('active'));
    };
    const target = e.target;
    let moove;
    if (target === arrowLeft) {
        moove = setInterval(() => {
            rotateY -= 2;
            rotateCube();
        }, 60);
        arrowLeft.classList.add('active');
    }
    else if (target === arrowUp) {
        moove = setInterval(() => {
            rotateX -= 2;
            rotateCube();
        }, 60);
        arrowUp.classList.add('active');
    }
    else if (target === arrowRight) {
        moove = setInterval(() => {
            rotateY += 2;
            rotateCube();
        }, 60);
        arrowRight.classList.add('active');
    }
    else if (target === arrowDown) {
        moove = setInterval(() => {
            rotateX += 2;
            rotateCube();
        }, 60);
        arrowDown.classList.add('active');
    }
    rotateCube();
}

function rotateCube() {
    cube.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
}