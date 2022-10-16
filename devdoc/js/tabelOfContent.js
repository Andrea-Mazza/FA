document.addEventListener('DOMContentLoaded', function () {
    const contents = Array.from(document.getElementsByTagName('h2'));
    const table = document.getElementById('tableOfContent');

    const listContainer = document.createElement('ul');

    for (let i = 0; i < contents.length; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.innerHTML = `${contents[i].innerHTML}`;
        a.href = `#${contents[i].id}`;

        li.appendChild(a);
        listContainer.appendChild(li);
    }

    table.appendChild(listContainer)
});