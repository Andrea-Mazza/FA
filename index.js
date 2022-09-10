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
            iconContainer.src = './images/sun-icon.svg';
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
            iconContainer.src = './images/moon-icon.svg';
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
            imgSrc: "./images/templates-preview/digimedia.svg",

        },
        firstPortfolio = {
            h3: "First Portfolio",
            imgSrc: "./images/templates-preview/First-portfolio.svg"
        },
        leadershipEvent = {
            h3: "Leadership Event",
            imgSrc: "./images/templates-preview/leadership-event.svg"
        }
    ];

    const techIcon = {
        html: "./images/html-5.svg",
        css: "./images/css-3.svg",
        sass: "./images/sass.svg",
        js: "./images/javascript.svg"
    };

    // const cardBody = document.getElementById('cardBody');

    // for (i = 0; i < preview.length; i++) {
    //     const previewContainer = document.createElement('div');
    //     previewContainer.classList.add('preview');

    //     cardBody.appendChild(previewContainer);

    //     const h3 = document.createElement('h3');
    //     h3.innerHTML = preview[i].h3

    //     previewContainer.appendChild(h3);

    //     const img = document.createElement('img');
    //     img.src = preview[i].imgSrc;
    //     img.classList.add('preview-img');

    //     previewContainer.appendChild(img);

    //     const description = document.createElement('div');
    //     description.classList.add('description');

    //     previewContainer.appendChild(description);

    //     const p = document.createElement('p');
    //     p.innerHTML = "Modello costruito con:";

    //     description.appendChild(p);

    //     const techDetails = document.createElement('div');
    //     techDetails.classList.add('tech-details');

    //     description.appendChild(techDetails);

    //     const htmlDiv = document.createElement('div');
    //     htmlDiv.title = "HTML 5";
    //     htmlDiv.classList.add('item');

    //     techDetails.appendChild(htmlDiv)

    //     const htmlImg = document.createElement('img');
    //     htmlImg.src = techIcon.html;
    //     htmlImg.classList.add('tech-icon');

    //     htmlDiv.appendChild(htmlImg);

    //     const cssDiv = document.createElement('div');
    //     cssDiv.title = "CSS 3";
    //     cssDiv.classList.add('item');

    //     techDetails.appendChild(cssDiv);

    //     const cssImg = document.createElement('img');
    //     cssImg.src = techIcon.css;
    //     cssImg.classList.add('tech-icon');

    //     cssDiv.appendChild(cssImg);

    //     const sassDiv = document.createElement('div');
    //     sassDiv.title = "Sass";
    //     sassDiv.classList.add('item');

    //     techDetails.appendChild(sassDiv);

    //     const sassImg = document.createElement('img');
    //     sassImg.src = techIcon.sass;
    //     sassImg.classList.add('tech-icon')

    //     sassDiv.appendChild(sassImg);

    //     const jsDiv = document.createElement('div');
    //     jsDiv.title = "Javascript";
    //     jsDiv.classList.add('item');

    //     techDetails.appendChild(jsDiv);

    //     const jsImg = document.createElement('img');
    //     jsImg.src = techIcon.js;
    //     jsImg.classList.add('tech-icon');


    //     jsDiv.appendChild(jsImg);

    //     const previewImgAnimation = [
    //         { opacity: 0 },
    //         { opacity: 1 }
    //     ];

    //     const previewImgTiming = {
    //         duration: 1000,
    //         iteration: 1,
    //         fill: 'both'
    //     }

    //     img.animate(previewImgAnimation, previewImgTiming);

    //     const techIconAnimation = [
    //         { opacity: 0 },
    //         { opacity: 1 }
    //     ];

    //     const htmlTiming = {
    //         duration: 250,
    //         iteration: 1,
    //         fill: 'both'
    //     };

    //     const cssTiming = {
    //         duration: 250,
    //         iteration: 1,
    //         delay: 200,
    //         fill: 'both'
    //     };

    //     const sassTiming = {
    //         duration: 250,
    //         iteration: 1,
    //         delay: 400,
    //         fill: 'both'
    //     };

    //     const jsTiming = {
    //         duration: 250,
    //         iteration: 1,
    //         delay: 600,
    //         fill: 'both'
    //     };
    //     htmlImg.animate(techIconAnimation, htmlTiming);
    //     cssImg.animate(techIconAnimation, cssTiming);
    //     sassImg.animate(techIconAnimation, sassTiming);
    //     jsImg.animate(techIconAnimation, jsTiming);

    //     setTimeout(function () {
    //         img.animate(previewImgAnimation, previewImgTiming).reverse();
    //         htmlImg.animate(techIconAnimation, htmlTiming).reverse();
    //         cssImg.animate(techIconAnimation, cssTiming).reverse();
    //         sassImg.animate(techIconAnimation, sassTiming).reverse();
    //         jsImg.animate(techIconAnimation, jsTiming).reverse();

    //         previewContainer.remove();
    //     }, 3000);

    // }

})