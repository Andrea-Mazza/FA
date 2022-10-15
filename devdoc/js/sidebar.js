document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');

    // 1. Insert new topics here
    const languages = [`HTML`];

    // 2. Create an array of categories which are part of the topic
    const htmlCategories = [`Attributi`, `Elementi`, `Elementi input`];

    // 3. Then store default path and title in two different variables
    const htmlAttributiPath = `/devdoc/HTML/Attributi/`;
    const htmlElementiPath = `/devdoc/HTML/Elementi/`;
    const htmlInputPath = `/devdoc/HTML/Elementi_input`;

    const attributiTitle = [`accept.html`,
        `accesskey.html`,
        `autocapitalize.html`,
        `autocomplete.html`,
        `autofocus.html`,
        `capture.html`,
        `class.html`,
        `contenteditable.html`,
        `contextmenu.html`,
        `crossorigin.html`,
        `data-*.html`,
        `dir.html`,
        `disabled.html`,
        `draggable.html`,
        `enterkeyhint.html`,
        `for.html`,
        `hidden.html`,
        `id.html`,
        `inputmode.html`,
        `is.html`,
        `itemid.html`,
        `itemprop.html`,
        `itemref.html`,
        `itemscope.html`,
        `itemtype.html`,
        `lang.html`,
        `max.html`,
        `maxlength.html`,
        `min.html`,
        `minlength.html`,
        `multiple.html`,
        `nonce.html`,
        `part.html`,
        `pattern.html`,
        `readonly.html`,
        `rel.html`,
        `required.html`,
        `role.html`,
        `size.html`,
        `slot.html`,
        `spellcheck.html`,
        `step.html`,
        `style.html`,
        `tabindex.html`,
        `title.html`,
        `x-ms-acceleratorkey.html`,
        `x-ms-format-detection.html`];
    const elementiTitle = [`a.html`,
        `abbr.html`,
        `acronym.html`,
        `address.html`,
        `applet.html`,
        `area.html`,
        `article.html`,
        `aside.html`,
        `audio.html`,
        `b.html`,
        `base.html`,
        `basefont.html`,
        `bdi.html`,
        `bdo.html`,
        `bgsound.html`,
        `big.html`,
        `blink.html`,
        `blockquote.html`,
        `body.html`,
        `br.html`,
        `button.html`,
        `canvas.html`,
        `caption.html`,
        `center.html`,
        `cite.html`,
        `code.html`,
        `col.html`,
        `colgroup.html`,
        `content.html`,
        `data.html`,
        `datalist.html`,
        `dd.html`,
        `del.html`,
        `details.html`,
        `dfn.html`,
        `dialog.html`,
        `dir.html`,
        `div.html`,
        `dl.html`,
        `dt.html`,
        `em.html`,
        `embed.html`,
        `fieldset.html`,
        `figcaption.html`,
        `figure.html`,
        `font.html`,
        `footer.html`,
        `form.html`,
        `frame.html`,
        `frameset.html`,
        `h1_h6.html`,
        `head.html`,
        `header.html`,
        `hgroup.html`,
        `hr.html`,
        `html.html`,
        `i.html`,
        `iframe.html`,
        `image.html`,
        `img.html`,
        `input.html`,
        `ins.html`,
        `kbd.html`,
        `keygen.html`,
        `label.html`,
        `legend.html`,
        `li.html`,
        `link.html`,
        `main.html`,
        `map.html`,
        `mark.html`,
        `marquee.html`,
        `menu.html`,
        `menuitem.html`,
        `meta.html`,
        `meter.html`,
        `nav.html`,
        `nobr.html`,
        `noembed.html`,
        `noframes.html`,
        `noscript.html`,
        `object.html`,
        `ol.html`,
        `optgroup.html`,
        `option.html`,
        `output.html`,
        `p.html`,
        `param.html`,
        `picture.html`,
        `plaintext.html`,
        `portal.html`,
        `pre.html`,
        `progress.html`,
        `q.html`,
        `rb.html`,
        `rp.html`,
        `rt.html`,
        `rtc.html`,
        `ruby.html`,
        `s.html`,
        `samp.html`,
        `script.html`,
        `section.html`,
        `select.html`,
        `shadow.html`,
        `slot.html`,
        `small.html`,
        `source.html`,
        `spacer.html`,
        `span.html`,
        `strike.html`,
        `strong.html`,
        `style.html`,
        `sub.html`,
        `summary.html`,
        `sup.html`,
        `table.html`,
        `tbody.html`,
        `td.html`,
        `template.html`,
        `textarea.html`,
        `tfoot.html`,
        `th.html`,
        `thead.html`,
        `time.html`,
        `title.html`,
        `tr.html`,
        `track.html`,
        `tt.html`,
        `u.html`,
        `ul.html`,
        `var.html`,
        `video.html`,
        `wbr.html`,
        `xmp.html`];
    const inputTitle = [
        `input_type_button.html`,
        `input_type_checkbox.html`,
        `input_type_color.html`,
        `input_type_date.html`,
        `input_type_datetime-local.html`,
        `input_type_email.html`,
        `input_type_file.html`,
        `input_type_hidden.html`,
        `input_type_image.html`,
        `input_type_month.html`,
        `input_type_number.html`,
        `input_type_password.html`,
        `input_type_radio.html`,
        `input_type_range.html`,
        `input_type_reset.html`,
        `input_type_search.html`,
        `input_type_submit.html`,
        `input_type_tel.html`,
        `input_type_text.html`,
        `input_type_time.html`,
        `input_type_url.html`,
        `input_type_week.html`
    ];

    // 4. Create an empy array where you will concatenate path and title
    const htmlAttrPath = [];
    const htmlElPath = [];
    const htmlInpPath = [];

    function pathGenerator(arrayInput, arrayOutput, pathStandard) {
        for (let i = 0; i < arrayInput.length; i++) {
            arrayOutput.push(`${pathStandard + arrayInput[i]}`);
        }
    }

    //Then call pathGenerator function to concatenate path and title and push them into the array previously created
    pathGenerator(attributiTitle, htmlAttrPath, htmlAttributiPath);
    pathGenerator(elementiTitle, htmlElPath, htmlElementiPath);
    pathGenerator(inputTitle, htmlInpPath, htmlInputPath);

    for (let i = 0; i < languages.length; i++) {
        const mainDetails = document.createElement('details');
        const mainSummary = document.createElement('summary');
        mainSummary.innerHTML = `${languages[i]}`;

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


    }
});