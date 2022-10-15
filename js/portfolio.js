document.addEventListener('DOMContentLoaded', function () {
    const previewCard = Array.from(document.getElementsByClassName('preview-card'));
    const icon = ['./assets/icons/html-5.svg',
        './assets/icons/css3.svg',
        './assets/icons/sass.svg',
        './assets/icons/javascript.svg'];
    const bootstrapIcon = './assets/icons/bootstrap.svg';

    for (let i = 0; i < previewCard.length; i++) {
        const card = previewCard[i];

        const description = document.createElement('div');
        description.classList.add('description');

        const p = document.createElement('p');
        p.innerHTML = `Costruito con:`;

        const iconContainer = document.createElement('div');
        iconContainer.classList.add('tech-icon-container');

        for (let j = 0; j < icon.length; j++) {
            const img = document.createElement('img');

            img.src = icon[j];
            img.classList.add('img-fluid');

            iconContainer.appendChild(img);
        }

        //This condition must be increased by 1 each time you add new templates into arrays in preview.js
        if (i < 1) {
            const bootstrap = document.createElement('img');
            bootstrap.src = `${bootstrapIcon}`;

            bootstrap.classList.add('img-fluid');
            iconContainer.appendChild(bootstrap);
        }

        description.appendChild(p);
        description.appendChild(iconContainer);
        card.appendChild(description);
    }
});