document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');

    // 1. Insert new topics here
    const languages = [`HTML`];

    // 2. Create an array of categories which are part of the topic
    const htmlCategories = [`Attributi`];

    // 3. Then store default path and title in two different variables
    const htmlAttributiPath = `/Users/andrea/Desktop/FAtesting/FA/devdoc/HTML/Attributi/`;
    const title = [`accept.html`];

    // 4. Create an empy array where you will concatenate path and title
    const htmlPath = [];

    function pathGenerator(arrayInput, arrayOutput, pathStandard) {
        for (let i = 0; i < arrayInput.length; i++) {
            arrayOutput.push(`${pathStandard + arrayInput[i]}`);
        }
    }

    //Then call pathGenerator function to concatenate path and title and push them into the array previously created
    pathGenerator(title, htmlPath, htmlAttributiPath);

    for (let i = 0; i < languages.length; i++) {
        const mainDetails = document.createElement('details');
        const mainSummary = document.createElement('summary');
        mainSummary.innerHTML = `${languages[i]}`;

        const mainUl = document.createElement('ul');

        if (i === 0) {
            for (let j = 0; j < htmlCategories.length; j++) {
                const mainLi = document.createElement('li');
                mainLi.innerHTML = `${htmlCategories[j]}`;

                const secondUl = document.createElement('ul');

                for (let x = 0; x < htmlPath.length; x++) {
                    const secondLi = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = `${htmlPath[x]}`;
                    a.innerHTML = `${title[x]}`;

                    secondLi.appendChild(a);
                    secondUl.appendChild(secondLi);
                }


                mainLi.appendChild(secondUl);
                mainUl.appendChild(mainLi);
            }

            // for (let j = 0; j < htmlPath.length; j++) {
            //     let mainLi = document.createElement('li');
            //     const a = document.createElement('a');
            //     a.href = `${htmlPath[j]}`;
            //     a.innerHTML = `${title[j]}`;

            //     mainLi.appendChild(a);
            //     mainUl.appendChild(mainLi);
            // }

        }


        mainDetails.appendChild(mainSummary);

        mainDetails.appendChild(mainUl);

        sidebar.appendChild(mainDetails);


    }
});