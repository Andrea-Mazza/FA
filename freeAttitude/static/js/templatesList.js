const templatesList = [
    'arsha',
    'digimedia',
    'firstPortfolio',
    'leadership-event',
    'medicio'
]


document.addEventListener('DOMContentLoaded', function () {
    const totalTemplates = document.getElementById('total-templates')

    totalTemplates.innerHTML = `${templatesList.length}`

    const categoriesContainer = document.getElementById('categoriesContainer')

    categoriesContainer.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        categoriesContainer.scrollLeft += evt.deltaY;
    })


})


