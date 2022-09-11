document.addEventListener('DOMContentLoaded', function () {
    // TABLE OF CONTENT
    // 1. ANIMATION FOR HAMBURGER MENU
    // 2. ANIMATION FOR THEME SWITCH BTN



    // 1. ANIMATION FOR HAMBURGER MENU
    const menuBtn = document.getElementById('menuBtn');
    const firstLine = document.getElementById('firstLine');
    const secondLine = document.getElementById('secondLine');
    const thirdLine = document.getElementById('thirdLine');

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

    menuBtn.addEventListener('click', function () {
        if (menuBtn.classList.contains('active')) {
            secondLine.animate(secondLineAnimation, lineTiming).reverse();
            firstLine.animate(firstLineAnimation, lineTiming).reverse();
            thirdLine.animate(thirdLineAnimation, lineTiming).reverse();
        } else {
            secondLine.animate(secondLineAnimation, lineTiming);
            firstLine.animate(firstLineAnimation, lineTiming);
            thirdLine.animate(thirdLineAnimation, lineTiming);
        }
        menuBtn.classList.toggle('active');
    });

    //ANIMATION FOR HAMBURGER MENU END

    // 2. ANIMATION FOR THEME SWITCH BTN

    const themeSwitchBtn = document.getElementById('themeSwitchBtn');
    const sunIcon = "./assets/icons/light_mode.svg";
    const moonIcon = "./assets/icons/dark_mode.svg";
    const actualThemeIcon = document.getElementById('actualThemeIcon');
    const menuLines = [firstLine, secondLine, thirdLine];
    const body = document.querySelector('body');

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
            actualThemeIcon.animate(themeIconAnimation, themeIconTiming);
            actualThemeIcon.src = moonIcon;
        } else {
            // Write here changes from light mode to dark mode
            body.style.backgroundColor = "var(--background-dark)";
            menuLines.forEach(element => element.style.backgroundColor = "var(--background-light)");
            actualThemeIcon.animate(themeIconAnimation, themeIconTiming);
            actualThemeIcon.src = sunIcon;
        }

        themeSwitchBtn.classList.toggle('dark-mode');
    });




    // ANIMATION FOR THEME SWITCH BTN END
});