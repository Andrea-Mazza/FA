document.addEventListener('DOMContentLoaded', function () {

    const menuBtn = document.getElementById('menuBtn');
    const lineOne = document.getElementById('lineOne');
    const lineTwo = document.getElementById('lineTwo');
    const lineThree = document.getElementById('lineThree');

    const lineOneAnimation = [
        { width: '30px', top: '18px', transform: 'rotate(0deg)' },
        { width: '30px', top: '26px', transform: 'rotate(45deg)' }
    ];

    const lineTwoAnimation = [
        { width: '20px', top: '26px' },
        { width: '0' }
    ];

    const lineThreeAnimation = [
        { width: '10px', top: '34px', transform: 'rotate(0deg)' },
        { width: '30px', top: '26px', transform: 'rotate(-45deg)' }
    ];

    const menuAnimationTiming = {
        duration: 200,
        iterations: 1,
        fill: 'both'
    };

    menuBtn.addEventListener('click', function () {

        if (menuBtn.classList.contains('opened')) {
            lineOne.animate(lineOneAnimation, menuAnimationTiming).reverse();
            lineTwo.animate(lineTwoAnimation, menuAnimationTiming).reverse();
            lineThree.animate(lineThreeAnimation, menuAnimationTiming).reverse();
        } else {
            setTimeout(function () {
                lineOne.animate(lineOneAnimation, menuAnimationTiming);
            }, 200);
            lineTwo.animate(lineTwoAnimation, menuAnimationTiming);
            setTimeout(function () {
                lineThree.animate(lineThreeAnimation, menuAnimationTiming);
            }, 200);
        }

        menuBtn.classList.toggle('opened');
    });

});