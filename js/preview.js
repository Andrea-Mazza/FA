document.addEventListener('DOMContentLoaded', function () {
    const previewContainer = document.getElementById('previewContainer');

    const previewPath = `./templates/`;
    const templateImgPath = `./assets/template_preview/`;


    const title = ['first portfolio', 'leadership event', 'digimedia', 'arsha'];
    const imgSrc = [`${templateImgPath}firstPortfolio.svg`, `${templateImgPath}leadershipEvent.svg`, `${templateImgPath}digimedia.svg`, `${templateImgPath}arsha.svg`];
    const href = [`${previewPath}firstPortfolio.html`, `${previewPath}leadershipEvent.html`, `${previewPath}digimedia.html`, `${previewPath}arsha.html`];

    //IMPORTANT: Once you've added new templates into these arrays, you must increase by 1 the variable 'i'
    //in 'portfolio.js'



    for (let i = title.length - 1; i >= 0; i--) {
        const col = document.createElement('div');
        col.classList.add('preview-card');
        col.classList.add('col-12');
        col.classList.add('col-lg-3');
        col.classList.add('col-md-6');
        col.classList.add('col-sm-6');
        col.classList.add('d-flex');
        col.classList.add('justify-content-center');

        const a = document.createElement('a');
        a.href = `${href[i]}`;

        const img = document.createElement('img');
        img.src = `${imgSrc[i]}`;
        img.classList.add('img-fluid');
        img.classList.add('preview-img');

        a.appendChild(img);
        col.appendChild(a);
        previewContainer.appendChild(col);
    }


    const totalTemplate = document.getElementById('totalTemplates');

    totalTemplate.innerHTML = title.length;

});