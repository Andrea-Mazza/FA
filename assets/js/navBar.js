const hamburgerIcon = document.getElementById('hamburgerIcon');
const lineOne = document.getElementById('lineOne');
const lineTwo = document.getElementById('lineTwo');
const lineThree = document.getElementById('lineThree');

const lineOneAnimation = [
    { width: '20px', top: '0', transform: 'rotate(0deg)' },
    { width: '40px', top: '10px', transform: 'rotate(45deg)' }
];


const lineThreeAnimation = [
    { width: '40px', top: '20px', transform: 'rotate(0deg)' },
    { width: '40px', top: '10px', transform: 'rotate(-45deg)' }
];

const lineTwoAnimation = [
    { width: '30px', transform: 'translateX(0)' },
    { width: '0px', transform: 'translateX(0)' },
    { width: '40px', transform: 'translateX(100px)' }
];

const lineAnimationTiming = {
    duration: 300,
    iterations: 1,
    fill: 'both'
};

hamburgerIcon.addEventListener('click', function () {

    if (hamburgerIcon.classList.contains('active')) {
        lineOne.animate(lineOneAnimation, lineAnimationTiming).reverse();
        lineTwo.animate(lineTwoAnimation, lineAnimationTiming).reverse();
        lineThree.animate(lineThreeAnimation, lineAnimationTiming).reverse();
    } else {
        lineOne.animate(lineOneAnimation, lineAnimationTiming);
        lineTwo.animate(lineTwoAnimation, lineAnimationTiming);
        lineThree.animate(lineThreeAnimation, lineAnimationTiming);
    }
    hamburgerIcon.classList.toggle('active');
});