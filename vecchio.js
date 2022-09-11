document.addEventListener('DOMContentLoaded', function () {

    // Animation for dark and light color
    const moonButton = document.getElementById('moon');
    const iconContainer = document.getElementById('icon-container');
    const body = document.getElementById('body');
    const nav = document.querySelector('.nav-container');
    const menuDivider = document.querySelector('.menu-divider');
    const navButtons = Array.from(document.querySelectorAll('.menu-btn'));
    const toolTips = Array.from(document.querySelectorAll('.tooltip'));
    const marker = Array.from(document.querySelectorAll('.marker'));

    const h1 = Array.from(document.querySelectorAll('h1'));
    const h2 = Array.from(document.querySelectorAll('h2'));
    const h3 = Array.from(document.querySelectorAll('h3'));
    const h4 = Array.from(document.querySelectorAll('h4'));
    const h5 = Array.from(document.querySelectorAll('h5'));
    const h6 = Array.from(document.querySelectorAll('h6'));
    const p = Array.from(document.querySelectorAll('p'));

    const headingsArray = [h1, h2, h3, h4, h5, h6];


    // This EventListener is about color changes between dark and light mode
    moonButton.addEventListener('click', function colorTranslation() {
        if (moonButton.id === 'moon') {
            // This set properties for light mode
            body.style.backgroundColor = 'var(--background-light)';
            nav.style.backgroundColor = 'var(--background-light)';
            nav.style.borderColor = 'var(--border-color-light-mode)';
            menuDivider.style.borderColor = 'var(--border-color-light-mode)';
            navButtons.forEach(element => {
                element.style.backgroundImage = 'linear-gradient(45deg, var(--light-gradient-color-1), var(--light-gradient-color-2), var(--light-gradient-color-1), var(--light-gradient-color-2))';
            });
            iconContainer.src = './assets/images/sun-icon.svg';
            document.querySelector('.tooltip-content').innerHTML = 'Dark mode';

            headingsArray.forEach(array => {
                array.forEach(element => {
                    element.style.color = 'var(--heading-color-light-mode)';
                });
            });
            p.forEach(element => {
                element.style.color = 'var(--p-color-light-mode)';
            });
            moonButton.id = 'sun';
        } else {
            // This set properties for dark mode
            body.style.backgroundColor = 'var(--background-dark)';
            nav.style.backgroundColor = 'var(--background-dark)';
            nav.style.borderColor = 'var(--border-color-dark-mode)';
            menuDivider.style.borderColor = 'var(--border-color-dark-mode)';
            navButtons.forEach(element => {
                element.style.backgroundImage = 'linear-gradient(45deg, var(--dark-gradient-color-1), var(--dark-gradient-color-2), var(--dark-gradient-color-1), var(--dark-gradient-color-2))';
            });
            iconContainer.src = './assets/images/moon-icon.svg';
            document.querySelector('.tooltip-content').innerHTML = 'Light mode';
            headingsArray.forEach(array => {
                array.forEach(element => {
                    element.style.color = 'var(--heading-color-dark-mode)';
                });
            });
            p.forEach(element => {
                element.style.color = 'var(--p-color-light-mode)';
            })
            moonButton.id = 'moon';
        }
    })


    // Code and animation relative to NAV BOTTOM
    const tabletSize = window.matchMedia("(min-width: 769px)");

    if (tabletSize.matches) {
        const menuBtnAnimation = [
            { transform: 'scale(1, 1) translateY(0)' },
            { transform: 'scale(1.5, 1.5) translateY(-16px)' }
        ];

        const menuBtnTiming = {
            duration: 100,
            iteration: 1,
            fill: 'both'
        }

        const navAnimation = [
            { transform: 'scale(1, 1) translateY(-8px)' },
            { transform: 'scale(1.3, 1.3) translateY(-13px)' }
        ];

        const navTiming = {
            duration: 300,
            iteration: 1,
            fill: 'both'
        }

        nav.addEventListener('mouseenter', function () {
            nav.animate(navAnimation, navTiming);
        });
        nav.addEventListener('mouseleave', function () {
            nav.animate(navAnimation, navTiming).reverse();
        });

        navButtons.forEach(element => {
            element.addEventListener("mouseenter", function increaseSize() {
                element.animate(menuBtnAnimation, menuBtnTiming);
                element.style.marginRight = '17px';
                element.style.marginLeft = '17px';
                if (element == navButtons[0]) {
                    document.querySelector('.home').style.display = 'block';
                } else if (element == navButtons[1]) {
                    document.querySelector('.projects').style.display = 'block';
                } else if (element == navButtons[2]) {
                    document.querySelector('.mode').style.display = 'block';
                }
            });


            element.addEventListener('mouseleave', function decreaseSize() {
                element.animate(menuBtnAnimation, menuBtnTiming).reverse();
                element.style.marginRight = '';
                element.style.marginLeft = '';
                toolTips.forEach(element => {
                    element.style.display = 'none';
                });
            });

            element.addEventListener('click', function () {
                const btnSelectionAnimation = [
                    { transform: 'scale(1.5, 1.5) translateY(-16px)' },
                    { transform: 'scale(1.5, 1.5) translateY(-20px)' },
                    { transform: 'scale(1.5, 1.5) translateY(-16px)' }
                ];

                const btnSelectionTiming = {
                    duration: 800,
                    iteration: 1,
                    fill: 'both'
                }

                element.animate(btnSelectionAnimation, btnSelectionTiming);
                // element.animate(menuBtnAnimation, menuBtnTiming).reverse();
                // nav.animate(navAnimation, navTiming).reverse();
                if (element == navButtons[0]) {
                    document.querySelector('.marker-home').style.display = 'block';
                    document.querySelector('.marker-projects').style.display = 'none';
                    document.querySelector('.marker-mode').style.display = 'none';
                } else if (element == navButtons[1]) {
                    document.querySelector('.marker-projects').style.display = 'block';
                    document.querySelector('.marker-home').style.display = 'none';
                    document.querySelector('.marker-mode').style.display = 'none';
                }
            });
        });
    } else {
        const btnSelectionAnimation = [
            { transform: 'scale(1.5, 1.5) translateY(-16px)' },
            { transform: 'scale(1.5, 1.5) translateY(-20px)' },
            { transform: 'scale(1.5, 1.5) translateY(-16px)' }
        ];

        const btnSelectionTiming = {
            duration: 800,
            iteration: 1,
            fill: 'both'
        }
        element.animate(btnSelectionAnimation, btnSelectionTiming);
        if (element == navButtons[0]) {
            document.querySelector('.marker-home').style.display = 'block';
            document.querySelector('.marker-projects').style.display = 'none';
            document.querySelector('.marker-mode').style.display = 'none';
        } else if (element == navButtons[1]) {
            document.querySelector('.marker-projects').style.display = 'block';
            document.querySelector('.marker-home').style.display = 'none';
            document.querySelector('.marker-mode').style.display = 'none';
        }
    }



    // NAV BOTTOM animation for mobile devices to do


    // Code and animation about template preview in index.html

    const preview = [
        digimedia = {
            h3: "Digimedia",
            imgSrc: "./assets/images/templates-preview/digimedia.svg",

        },
        firstPortfolio = {
            h3: "First Portfolio",
            imgSrc: "./assets/images/templates-preview/First-portfolio.svg"
        },
        leadershipEvent = {
            h3: "Leadership Event",
            imgSrc: "./assets/images/templates-preview/leadership-event.svg"
        }
    ];


    const techIcon = {
        html: "./images/html-5.svg",
        css: "./images/css-3.svg",
        sass: "./images/sass.svg",
        js: "./images/javascript.svg"
    };

    const cardBody = document.getElementById('cardBody');

    const previewDiv = document.createElement('div');
    previewDiv.classList.add('preview');

    cardBody.appendChild(previewDiv);

    const carouselContainer = document.createElement('div');
    carouselContainer.classList.add('carousel-container');

    previewDiv.appendChild(carouselContainer);

    const carousel = document.createElement('div');
    carousel.classList.add('carousel');

    carouselContainer.appendChild(carousel);

    for (i = 0; i < preview.length; i++) {
        const imgPreview = document.createElement('img');
        imgPreview.classList.add('preview-img');
        imgPreview.src = preview[i].imgSrc;

        carousel.appendChild(imgPreview);
    }

    // When a new template previews is addedd, add here two line incrementing translate3d first value fo -290px (which is every coursel item's width)
    const previewAnimation = [
        { transform: `translate3d(400px, 0, 0)` },
        { transform: `translate3d(400px, 0, 0)` },
        { transform: `translate3d(0px, 0, 0)` },
        { transform: `translate3d(0px, 0, 0)` },
        { transform: `translate3d(-400px, 0, 0)` },
        { transform: `translate3d(-400px, 0, 0)` },
        { transform: `translate3d(400px, 0, 0)` }
    ];

    const previewTiming = {
        duration: preview.length * 1000,
        iterations: Infinity,
    };

    carousel.animate(previewAnimation, previewTiming);

})