document.addEventListener('DOMContentLoaded', function () {




    const sidebar = document.getElementById('sidebarLg');
    const sidebarMd = document.getElementById('sidebarMdContent');

    // 1. Insert new topics here
    const languages = [`HTML`];

    // 2. Create an array of categories which are part of the topic
    const htmlCategories = [`Attributi`, `Elementi`, `Elementi input`];

    // 3. Then store default path and title in two different variables
    const htmlAttributiPath = `/devdoc/HTML/Attributi/`;
    const htmlElementiPath = `/devdoc/HTML/Elementi/`;
    const htmlInputPath = `/devdoc/HTML/Elementi_input`;

    const attributiTitle = [`accept`,
        `accesskey`,
        `autocapitalize`,
        `autocomplete`,
        `autofocus`,
        `capture`,
        `class`,
        `contenteditable`,
        `contextmenu`,
        `crossorigin`,
        `data-*`,
        `dir`,
        `disabled`,
        `draggable`,
        `enterkeyhint`,
        `for`,
        `hidden`,
        `id`,
        `inputmode`,
        `is`,
        `itemid`,
        `itemprop`,
        `itemref`,
        `itemscope`,
        `itemtype`,
        `lang`,
        `max`,
        `maxlength`,
        `min`,
        `minlength`,
        `multiple`,
        `nonce`,
        `part`,
        `pattern`,
        `readonly`,
        `rel`,
        `required`,
        `role`,
        `size`,
        `slot`,
        `spellcheck`,
        `step`,
        `style`,
        `tabindex`,
        `title`,
        `x-ms-acceleratorkey`,
        `x-ms-format-detection`];
    const elementiTitle = [`a`,
        `abbr`,
        `acronym`,
        `address`,
        `applet`,
        `area`,
        `article`,
        `aside`,
        `audio`,
        `b`,
        `base`,
        `basefont`,
        `bdi`,
        `bdo`,
        `bgsound`,
        `big`,
        `blink`,
        `blockquote`,
        `body`,
        `br`,
        `button`,
        `canvas`,
        `caption`,
        `center`,
        `cite`,
        `code`,
        `col`,
        `colgroup`,
        `content`,
        `data`,
        `datalist`,
        `dd`,
        `del`,
        `details`,
        `dfn`,
        `dialog`,
        `dir`,
        `div`,
        `dl`,
        `dt`,
        `em`,
        `embed`,
        `fieldset`,
        `figcaption`,
        `figure`,
        `font`,
        `footer`,
        `form`,
        `frame`,
        `frameset`,
        `h1_h6`,
        `head`,
        `header`,
        `hgroup`,
        `hr`,
        `html`,
        `i`,
        `iframe`,
        `image`,
        `img`,
        `input`,
        `ins`,
        `kbd`,
        `keygen`,
        `label`,
        `legend`,
        `li`,
        `link`,
        `main`,
        `map`,
        `mark`,
        `marquee`,
        `menu`,
        `menuitem`,
        `meta`,
        `meter`,
        `nav`,
        `nobr`,
        `noembed`,
        `noframes`,
        `noscript`,
        `object`,
        `ol`,
        `optgroup`,
        `option`,
        `output`,
        `p`,
        `param`,
        `picture`,
        `plaintext`,
        `portal`,
        `pre`,
        `progress`,
        `q`,
        `rb`,
        `rp`,
        `rt`,
        `rtc`,
        `ruby`,
        `s`,
        `samp`,
        `script`,
        `section`,
        `select`,
        `shadow`,
        `slot`,
        `small`,
        `source`,
        `spacer`,
        `span`,
        `strike`,
        `strong`,
        `style`,
        `sub`,
        `summary`,
        `sup`,
        `table`,
        `tbody`,
        `td`,
        `template`,
        `textarea`,
        `tfoot`,
        `th`,
        `thead`,
        `time`,
        `title`,
        `tr`,
        `track`,
        `tt`,
        `u`,
        `ul`,
        `var`,
        `video`,
        `wbr`,
        `xmp`];
    const inputTitle = [
        `input_type_button`,
        `input_type_checkbox`,
        `input_type_color`,
        `input_type_date`,
        `input_type_datetime-local`,
        `input_type_email`,
        `input_type_file`,
        `input_type_hidden`,
        `input_type_image`,
        `input_type_month`,
        `input_type_number`,
        `input_type_password`,
        `input_type_radio`,
        `input_type_range`,
        `input_type_reset`,
        `input_type_search`,
        `input_type_submit`,
        `input_type_tel`,
        `input_type_text`,
        `input_type_time`,
        `input_type_url`,
        `input_type_week`
    ];

    // 4. Create an empy array where you will concatenate path and title
    const htmlAttrPath = [];
    const htmlElPath = [];
    const htmlInpPath = [];

    function pathGenerator(arrayInput, arrayOutput, pathStandard) {
        for (let i = 0; i < arrayInput.length; i++) {
            arrayOutput.push(`${pathStandard + arrayInput[i] + `.html`}`);
        }
    }

    //Then call pathGenerator function to concatenate path and title and push them into the array previously created
    pathGenerator(attributiTitle, htmlAttrPath, htmlAttributiPath);
    pathGenerator(elementiTitle, htmlElPath, htmlElementiPath);
    pathGenerator(inputTitle, htmlInpPath, htmlInputPath);


    const h5 = document.createElement('h5');
    h5.innerHTML = 'Specifiche:';

    const h5Clone = h5.cloneNode(true);

    sidebar.appendChild(h5);
    sidebarMd.appendChild(h5Clone);

    for (let i = 0; i < languages.length; i++) {
        const mainDetails = document.createElement('details');
        const mainSummary = document.createElement('summary');
        mainSummary.innerHTML = `${languages[i]}`;
        mainSummary.classList.add('language');

        const mainUl = document.createElement('ul');

        //HTML
        if (i === 0) {
            for (let j = 0; j < htmlCategories.length; j++) {
                const mainLi = document.createElement('li');
                const secondDetails = document.createElement('details');
                const secondSummary = document.createElement('summary');
                secondSummary.innerHTML = `${htmlCategories[j]}`;

                const secondUl = document.createElement('ul');

                //ATTRIBUTI
                if (j === 0) {
                    for (let x = 0; x < htmlAttrPath.length; x++) {
                        const secondLi = document.createElement('li');
                        const a = document.createElement('a');
                        a.href = `${htmlAttrPath[x]}`;
                        a.innerHTML = `${attributiTitle[x]}`;

                        secondLi.appendChild(a);
                        secondUl.appendChild(secondLi);
                    }
                    //ELEMENTI
                } else if (j === 1) {
                    for (let x = 0; x < htmlElPath.length; x++) {
                        const secondLi = document.createElement('li');
                        const a = document.createElement('a');
                        a.href = `${htmlElPath[x]}`;
                        a.innerHTML = `${elementiTitle[x]}`;

                        secondLi.appendChild(a);
                        secondUl.appendChild(secondLi);
                    }
                    //ELEMENTI INPUT  
                } else if (j === 2) {
                    for (let x = 0; x < htmlInpPath.length; x++) {
                        const secondLi = document.createElement('li');
                        const a = document.createElement('a');
                        a.href = `${htmlInpPath[x]}`;
                        a.innerHTML = `${inputTitle[x]}`;

                        secondLi.appendChild(a);
                        secondUl.appendChild(secondLi);
                    }
                }


                secondDetails.appendChild(secondSummary);
                secondDetails.appendChild(secondUl);
                mainLi.appendChild(secondDetails);
                mainUl.appendChild(mainLi);
            }

        }


        mainDetails.appendChild(mainSummary);

        mainDetails.appendChild(mainUl);

        sidebar.appendChild(mainDetails);

        // Use cloneNode to move sidebar content in sidebars built for md screens
        const mainDetailsClone = mainDetails.cloneNode(true);

        sidebarMd.appendChild(mainDetailsClone);

        const indexList = document.getElementById('indexList');

        const mainDetailsCloneIndex = mainDetailsClone.cloneNode(true);

        indexList.appendChild(mainDetailsCloneIndex);
    }

    // sidebarMd animation
    const mdBtn = document.getElementById('mdBtn');

    const sidebarMdAnimation = [
        { left: '-500px' },
        { left: '-10px' }
    ];

    const sidebarMdAnimationTiming = {
        duration: 300,
        iterations: 1,
        fill: 'both'
    };

    mdBtn.addEventListener('click', function () {

        if (mdBtn.classList.contains('active')) {
            sidebarMd.animate(sidebarMdAnimation, sidebarMdAnimationTiming).reverse();
        } else {
            sidebarMd.animate(sidebarMdAnimation, sidebarMdAnimationTiming);
        }

        mdBtn.classList.toggle('active');

    });


});