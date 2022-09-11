document.addEventListener('DOMContentLoaded', function () {
    // TABLE OF CONTENT
    // 1. CAROUSEL ANIMATION

    // 1. CAROUSEL ANIMATION

    const carouselContainer = document.getElementById('carouselContainer');
    const carouselItem = Array.from(document.getElementsByClassName('carousel-item'));

    const itemMediumAnimation = [
        { width: '300px', height: '300px' },
        { width: '350px', height: '350px' }
    ];

    const itemSmallAnimation = [
        { width: '250px', height: '250px' },
        { width: '350px', height: '350px' }
    ];

    const itemTiming = {
        duration: 300,
        iterations: 1,
        fill: 'both'
    };

    carouselItem.forEach(item => {
        if (item.offsetLeft === 0) {
            item.style.width = '350px';
            item.style.height = '350px';
        } else if (item.offsetLeft === 370) {
            item.style.width = '300px';
            item.style.height = '300px';

            item.addEventListener('mouseenter', function () {
                item.animate(itemMediumAnimation, itemTiming);
            });

            item.addEventListener('mouseleave', function () {
                item.animate(itemMediumAnimation, itemTiming).reverse();
            });
        } else {
            item.style.width = '250px';
            item.style.height = '250px';

            item.addEventListener('mouseenter', function () {
                item.animate(itemSmallAnimation, itemTiming);
            });

            item.addEventListener('mouseleave', function () {
                item.animate(itemSmallAnimation, itemTiming).reverse();
            });
        }
    });

    // CAROUSEL ANIMATION END
});