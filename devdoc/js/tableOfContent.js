document.addEventListener('DOMContentLoaded', function () {
    const contents = Array.from(document.getElementsByTagName('h2'));
    const table = document.getElementById('tableOfContent');


    const h5 = document.createElement('h5');
    h5.innerHTML = 'In questa pagina:';

    const listContainer = document.createElement('ul');

    for (let i = 0; i < contents.length; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.innerHTML = `${contents[i].innerHTML}`;
        a.href = `#${contents[i].id}`;

        li.appendChild(a);
        listContainer.appendChild(li);
    }

    try {
        table.appendChild(h5);
        table.appendChild(listContainer);
    } catch (error) {
        console.log(error);
    }


    const sidebarMd = document.getElementById('sidebarMdContent');

    const listContainerClone = listContainer.cloneNode(true);
    const h5Clone = h5.cloneNode(true);

    sidebarMd.appendChild(h5Clone);
    sidebarMd.appendChild(listContainerClone);


});