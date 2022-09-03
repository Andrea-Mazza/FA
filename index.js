document.addEventListener('DOMContentLoaded', function () {

    // Animation for dark and light color
    const moonButton = document.getElementById('moon');
    const body = document.getElementById('body');
    const nav = document.querySelector('.nav-container');
    const menuDivider = document.querySelector('.menu-divider');
    const navButtons = Array.from(document.getElementsByClassName('menu-btn'));

    const h1 = Array.from(document.querySelectorAll('h1'));
    const h2 = Array.from(document.querySelectorAll('h2'));
    const h3 = Array.from(document.querySelectorAll('h3'));
    const h4 = Array.from(document.querySelectorAll('h4'));
    const h5 = Array.from(document.querySelectorAll('h5'));
    const h6 = Array.from(document.querySelectorAll('h6'));
    const p = Array.from(document.querySelectorAll('p'));

    const headingsArray = [h1, h2, h3, h4, h5, h6];

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
            headingsArray.forEach(array => {
                array.forEach(element => {
                    element.style.color = 'var(--heading-color-light-mode)';
                });
            });
            p.forEach(element => {
                element.style.color = 'var(--p-color-light-mode)';
            })
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


})