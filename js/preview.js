document.addEventListener('DOMContentLoaded', function () {
    const previewContainer = document.getElementById('previewContainer');

    const previewPath = `./templates/`;
    const templateImgPath = `./assets/template_preview/`;


    const title = ['arsha', 'digimedia', 'leadership event', 'first portfolio'];
    const imgSrc = [`${templateImgPath}arsha.svg`, `${templateImgPath}digimedia.svg`, `${templateImgPath}leadershipEvent.svg`, `${templateImgPath}firstPortfolio.svg`];
    const href = [`${previewPath}arsha.html`, `${previewPath}digimedia.html`, `${previewPath}leadershipEvent.html`, `${previewPath}firstPortfolio.html`];



    for (let i = 0; i < title.length; i++) {
        const col = document.createElement('div');
        col.classList.add('preview-card');
        col.classList.add('col-12');
        col.classList.add('col-lg-3');
        col.classList.add('col-md-6');
        col.classList.add('d-flex');
        col.classList.add('justify-content-center');

        const a = document.createElement('a');
        a.href = `${href[i]}`;

        const img = document.createElement('img');
        img.src = `${imgSrc[i]}`;
        img.classList.add('img-fluid');

        a.appendChild(img);
        col.appendChild(a);
        previewContainer.appendChild(col);
    }


});