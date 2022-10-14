document.addEventListener('DOMContentLoaded', function () {

    const menuBtn = document.getElementById('menuBtn');
    const lineOne = document.getElementById('lineOne');
    const lineTwo = document.getElementById('lineTwo');
    const lineThree = document.getElementById('lineThree');

    const lineOneAnimation = [
        { width: '20px', top: '0', transform: 'rotate(0deg)' },
        { width: '40px', top: '7px', transform: 'rotate(45deg)' }
    ];

    const lineTwoAnimation = [
        { width: '30px' },
        { width: '0' }
    ];

    const lineThreeAnimation = [
        { top: '14px', transform: 'rotate(0deg)' },
        { top: '7px', transform: 'rotate(-45deg)' }
    ];

    const menuAnimationTiming = {
        duration: 300,
        iterations: 1,
        fill: 'both'
    };

    menuBtn.addEventListener('click', function () {

        if (menuBtn.classList.contains('opened')) {
            lineOne.animate(lineOneAnimation, menuAnimationTiming).reverse();
            lineTwo.animate(lineTwoAnimation, menuAnimationTiming).reverse();
            lineThree.animate(lineThreeAnimation, menuAnimationTiming).reverse();
        } else {
            lineOne.animate(lineOneAnimation, menuAnimationTiming);
            lineTwo.animate(lineTwoAnimation, menuAnimationTiming);
            lineThree.animate(lineThreeAnimation, menuAnimationTiming);
        }

        menuBtn.classList.toggle('opened');
    });

});