/* 
    TABLE OF CONTENT
    1. TAGS WHICH GOES INSIDE HEAD TAG 
*/


// 1. TAGS WHICH GOES INSIDE HEAD TAG 

const head = document.querySelector('head');

const cssGeneral = document.createElement('link');
cssGeneral.rel = "stylesheet";
cssGeneral.href = "/style/style.css";

const cssResponsive = document.createElement('link');
cssResponsive.rel = "stylesheet";
cssResponsive.href = "/style/responsive.css";

const devdocCSS = document.createElement('link');
devdocCSS.rel = "stylesheet";
devdocCSS.href = "/style/devdoc/style.css";

const devdocResponsive = document.createElement('link');
devdocResponsive.rel = "stylesheet";
devdocResponsive.href = "/style/devdoc/responsive.css";

head.appendChild(cssGeneral);
head.appendChild(cssResponsive);
head.appendChild(devdocCSS);
head.appendChild(devdocResponsive);

// TAGS WHICH GOES INSIDE HEAD TAG  END