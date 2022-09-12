document.addEventListener('DOMContentLoaded', function () {
    // TABLE OF CONTENT
    // 1. GLOBAL VARIABLES FOR ELEMENT
    // 2. ANIMATION FOR HAMBURGER MENU
    // 3. ANIMATION FOR THEME SWITCH BTN


    // 1. GLOBAL VARIABLES FOR ELEMENT
    const body = document.querySelector('body');
    const main = document.querySelector('main');
    const header = document.querySelector('header');
    const h1 = Array.from(document.getElementsByTagName('h1'));
    const h2 = Array.from(document.getElementsByTagName('h2'));
    const h3 = Array.from(document.getElementsByTagName('h3'));
    const h4 = Array.from(document.getElementsByTagName('h4'));
    const h5 = Array.from(document.getElementsByTagName('h5'));
    const h6 = Array.from(document.getElementsByTagName('h6'));
    const p = Array.from(document.getElementsByTagName('p'));
    const logo = document.querySelector('.logo');
    const headingArray = [h1, h2, h3, h4, h5, h6];


    // VARIABLES FOR ELEMENT END

    // 2. ANIMATION FOR HAMBURGER MENU
    const menuBtn = document.getElementById('menuBtn');
    const firstLine = document.getElementById('firstLine');
    const secondLine = document.getElementById('secondLine');
    const thirdLine = document.getElementById('thirdLine');
    const menuContent = document.getElementById('menuContent');

    const secondLineAnimation = [
        { transform: "translateX(0)", width: "30px" },
        { transform: "translateX(-30px)" },
        { transform: "translateX(-30px)", width: "0px" },
        { transform: "translateX(-30px)", width: "0px", display: "none" }
    ];

    const firstLineAnimation = [
        { top: "6px", transform: "rotate(0)" },
        { top: "0px" },
        { top: "14px" },
        { top: "14px", transform: "rotate(45deg)" }
    ];

    const thirdLineAnimation = [
        { top: "22px", transform: "rotate(0)" },
        { top: "28px" },
        { top: "14px" },
        { top: "14px", transform: "rotate(-45deg)" }
    ];

    const lineTiming = {
        duration: 500,
        iterations: 1,
        fill: 'both'
    };

    const menuContentAnimation = [
        { transform: "scale(1, 0)" },
        { transform: "scale(1, 1)" }
    ];

    const menuContentTiming = {
        duration: 500,
        iterations: 1,
        fill: 'both'
    };

    menuBtn.addEventListener('click', function () {
        if (menuBtn.classList.contains('active')) {
            secondLine.animate(secondLineAnimation, lineTiming).reverse();
            firstLine.animate(firstLineAnimation, lineTiming).reverse();
            thirdLine.animate(thirdLineAnimation, lineTiming).reverse();
            menuContent.animate(menuContentAnimation, menuContentTiming).reverse();
            main.style.filter = "blur(0px)";
        } else {
            secondLine.animate(secondLineAnimation, lineTiming);
            firstLine.animate(firstLineAnimation, lineTiming);
            thirdLine.animate(thirdLineAnimation, lineTiming);
            menuContent.animate(menuContentAnimation, menuContentTiming);
            main.style.filter = "blur(100px)";
        }
        menuBtn.classList.toggle('active');
    });

    //ANIMATION FOR HAMBURGER MENU END



    // 3. ANIMATION FOR THEME SWITCH BTN

    const themeSwitchBtn = document.getElementById('themeSwitchBtn');
    const sunIcon = "./assets/icons/light_mode.svg";
    const moonIcon = "./assets/icons/dark_mode.svg";
    const actualThemeIcon = document.getElementById('actualThemeIcon');
    const menuLines = [firstLine, secondLine, thirdLine];


    const themeIconAnimation = [
        { transform: "translateY(0) rotate(0)" },
        { transform: "translateY(-40px) rotate(360deg)" },
        { transform: "translateY(0) rotate(0)" }
    ];

    const themeIconTiming = {
        duration: 500,
        iterations: 1,
        fill: 'both'
    };


    themeSwitchBtn.addEventListener('click', function () {
        if (themeSwitchBtn.classList.contains('dark-mode')) {
            // Write here changes from dark mode to light mode

            body.style.backgroundColor = "var(--background-light)";
            menuLines.forEach(element => element.style.backgroundColor = "var(--background-dark)");
            headingArray.forEach(element => element.forEach(heading => heading.style.color = "var(--heading-color-light-mode)"));
            p.forEach(element => element.style.color = "var(--p-color-light-mode)");
            logo.style.color = "var(--heading-color-light-mode)";
            actualThemeIcon.animate(themeIconAnimation, themeIconTiming);
            actualThemeIcon.src = moonIcon;
        } else {
            // Write here changes from light mode to dark mode

            body.style.backgroundColor = "var(--background-dark)";
            menuLines.forEach(element => element.style.backgroundColor = "var(--background-light)");
            headingArray.forEach(element => element.forEach(heading => heading.style.color = "var(--heading-color-dark-mode)"));
            p.forEach(element => element.style.color = "var(--p-color-dark-mode)");
            logo.style.color = "var(--heading-color-dark-mode)";
            actualThemeIcon.animate(themeIconAnimation, themeIconTiming);
            actualThemeIcon.src = sunIcon;
        }

        themeSwitchBtn.classList.toggle('dark-mode');
    });




    // ANIMATION FOR THEME SWITCH BTN END
});