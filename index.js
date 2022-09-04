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

    // Creation of SVG sun icon
    // const sunIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    // sunIconSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    // sunIconSvg.setAttribute("viewBox", "0 0 24 24");
    // sunIconSvg.setAttribute("width", "24");
    // sunIconSvg.setAttribute("height", "24");
    // sunIconSvg.setAttribute("fill", "none");

    // const sunIConG = document.createElement('g');
    // sunIConG.setAttribute("fill", "#A0A0A0");

    // const sunIconPath = document.createElement('path');
    // sunIconPath.setAttribute("d", "M22 12l-3-1.9L20.7 7l-3.5-.1-.2-3.6L13.9 5 12 2l-1.9 3L7 3.3l-.1 3.6-3.6.1L5 10.1 2 12l3 1.9L3.3 17l3.5.1.2 3.6 3.1-1.7 1.9 3 1.9-3 3.1 1.7.1-3.5 3.5-.1-1.6-3.2 3-1.9zm-10 6c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z");
    // sunIConG.appendChild(sunIconPath);

    // const sunIconCircle = document.createElement('circle');
    // sunIconCircle.setAttribute("cx", "12");
    // sunIconCircle.setAttribute("cy", "12");
    // sunIconCircle.setAttribute("r", "5");
    // sunIConG.appendChild(sunIconCircle);

    // sunIconSvg.appendChild(sunIConG);


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
        { transform: 'scale(1, 1) translateY(-28px)' },
        { transform: 'scale(1.3, 1.3) translateY(-28px)' }
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
            // toolTips.forEach(element => {
            //     element.style.display = 'block';
            // });
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
                { transform: 'scale(1.5, 1.5) translateY(-16px)' },
                { transform: 'scale(1.5, 1.5) translateY(-20px)' },
                { transform: 'scale(1.5, 1.5) translateY(0px)' }
            ];

            const btnSelectionTiming = {
                duration: 800,
                iteration: 1,
                fill: 'both'
            }

            element.animate(btnSelectionAnimation, btnSelectionTiming);
            element.animate(menuBtnAnimation, menuBtnTiming).reverse();
            nav.animate(navAnimation, navTiming).reverse();
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
})