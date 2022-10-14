document.addEventListener('DOMContentLoaded', function () {
    const previewCard = Array.from(document.getElementsByClassName('preview-card'));

    for (let i = 0; i < previewCard.length; i++) {
        const card = previewCard[i];

        const description = document.createElement('div');
        description.classList.add('description');

        const p = document.createElement('p');
        p.innerHTML = `Costruito con:`;

        description.appendChild(p);
        card.appendChild(description);
    }
});