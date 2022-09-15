document.addEventListener('DOMContentLoaded', function () {
    const menuArguments = ['HTML', 'CSS', 'JS'];

    const asideContent = [
        html = [
            Attributi = [
                title = [
                    'accept-charset',
                    "accept",
                    "accesskey",
                    "allow",
                    "async",
                    "autocapitalize",
                    "autocomplete",
                    "capture",
                    "challenge",
                    "class",
                    "code",
                    "codebase",
                    "cols",
                    "content",
                    "contenteditable",
                    "coords",
                    "crossorigin",
                    "data-*",
                    "data",
                    "decoding",
                    "deault",
                    "defer",
                    "dir",
                    "disabled",
                    "draggable",
                    "enctype",
                    "for",
                    "hidden",
                    "high",
                    "http-equiv",
                    "id",
                    "inputmode",
                    "integrity",
                    "is",
                    "ismap",
                    "itemid",
                    "itemprop",
                    "itemref",
                    "itemscope",
                    "itemtype",
                    "keytype",
                    "kind",
                    "lang",
                    "language",
                    "list",
                    "low",
                    "manifest",
                    "max",
                    "maxlength",
                    "method",
                    "min",
                    "minlength",
                    "multiple",
                    "nonce",
                    "novalidate",
                    "optimum",
                    "part",
                    "pattern",
                    "ping",
                    "poster",
                    "readonly",
                    "rel",
                    "required",
                    "reversed",
                    "role",
                    "rows",
                    "sandbox",
                    "scope",
                    "scoped",
                    "selected",
                    "size",
                    "slot",
                    "spellcheck",
                    "srcdoc",
                    "srclang",
                    "start",
                    "step",
                    "style",
                    "summary",
                    "tabindex",
                    "title",
                    "translate",
                    "wrap",
                    "x-ms-acceleratorkey",
                    "x-ms-format-detection"
                ],
                path = [
                    "/devdoc/HTML/Elementi/form.html#attr-accept-charset",
                    "/devdoc/HTML/Attributi/accept.html",
                    "/devdoc/HTML/Attributi/accesskey.html",
                    "/devdoc/HTML/Elementi/iframe.html#attr-allow",
                    "/devdoc/HTML/Elementi/script.html##attr-async",
                    "/devdoc/HTML/Attributi/autocapitalize.html",
                    "/devdoc/HTML/Attributi/autocomplete.html",
                    "/devdoc/HTML/Attributi/capture.html",
                    "/devdoc/HTML/Elementi/keygen.html#attr-challenge",
                    "/devdoc/HTML/Attributi/class.html",
                    "/devdoc/HTML/Elementi/applet.html#attr-code",
                    "/devdoc/HTML/Elementi/applet.html#attr-codebase",
                    "/devdoc/HTML/Elementi/textarea.html#attr-cols",
                    "/devdoc/HTML/Elementi/meta.html#attr-content",
                    "/devdoc/HTML/Attributi/contenteditable.html",
                    "/devdoc/HTML/Elementi/area.html#attr-coords",
                    "/devdoc/HTML/Attributi/crossorigin.html",
                    "/devdoc/HTML/Attributi/data-*.html",
                    "/devdoc/HTML/Elementi/object.html#attr-data",
                    "/devdoc/HTML/Elementi/img.html#attr-decoding",
                    "/devdoc/HTML/Elementi/track.html#attr-default",
                    "/devdoc/HTML/Elementi/script.html#attr-defer",
                    "/devdoc/HTML/Attributi/dir.html",
                    "/devdoc/HTML/Attributi/disabled.html",
                    "/devdoc/HTML/Attributi/draggable.html",
                    "/devdoc/HTML/Elementi/form.html#attr-enctype",
                    "/devdoc/HTML/Attributi/for.html",
                    "/devdoc/HTML/Attributi/hidden.html",
                    "/devdoc/HTML/Elementi/meter.html#attr-high",
                    "/devdoc/HTML/Elementi/meta.html#attr-http-equiv",
                    "/devdoc/HTML/Attributi/id.html",
                    "/devdoc/HTML/Attributi/inputmode.html",
                    "/devdoc/HTML/Elementi/link.html#attr-integrity",
                    "/devdoc/HTML/Attributi/is.html",
                    "/devdoc/HTML/Elementi/img.html#attr-ismap",
                    "/devdoc/HTML/Attributi/itemid.html",
                    "/devdoc/HTML/Attributi/itemprop.html",
                    "/devdoc/HTML/Attributi/itemref.html",
                    "/devdoc/HTML/Attributi/itemscope.html",
                    "/devdoc/HTML/Attributi/itemtype.html",
                    "/devdoc/HTML/Elementi/keygen.html#attr-keytype",
                    "/devdoc/HTML/Elementi/track.html#attr-kind",
                    "/devdoc/HTML/Attributi/lang.html",
                    "/devdoc/HTML/Elementi/script.html#attr-language",
                    "/devdoc/HTML/Elementi/input.html#attr-list",
                    "/devdoc/HTML/Elementi/meter.html#attr-low",
                    "/devdoc/HTML/Elementi/html.html#attr-manifest",
                    "/devdoc/HTML/Attributi/max.html",
                    "/devdoc/HTML/Attributi/maxlength.html",
                    "/devdoc/HTML/Elementi/form.html#attr-method",
                    "/devdoc/HTML/Attributi/min.html",
                    "/devdoc/HTML/Attributi/minlength.html",
                    "/devdoc/HTML/Attributi/multiple.html",
                    "/devdoc/HTML/Attributi/nonce.html",
                    "/devdoc/HTML/Elementi/form.html#attr-novalidate",
                    "/devdoc/HTML/Elementi/meter.html#attr-optimum",
                    "/devdoc/HTML/Attributi/part.html",
                    "/devdoc/HTML/Attributi/pattern.html",
                    "/devdoc/HTML/Elementi/a.html#attr-ping",
                    "/devdoc/HTML/Elementi/video.html#attr-poster",
                    "/devdoc/HTML/Attributi/readonly.html",
                    "/devdoc/HTML/Attributi/rel.html",
                    "/devdoc/HTML/Attributi/required.html",
                    "/devdoc/HTML/Elementi/ol.html#attr-reversed",
                    "/devdoc/HTML/Attributi/role.html",
                    "/devdoc/HTML/Elementi/textarea.html#attr-rows",
                    "/devdoc/HTML/Elementi/iframe.html#attr-sandbox",
                    "/devdoc/HTML/Elementi/th.html#attr-scope",
                    "/devdoc/HTML/Elementi/style.html#attr-scoped",
                    "/devdoc/HTML/Elementi/option.html#attr-selected",
                    "/devdoc/HTML/Attributi/size.html",
                    "/devdoc/HTML/Attributi/slot.html",
                    "/devdoc/HTML/Attributi/spellcheck.html",
                    "/devdoc/HTML/Elementi/iframe.html#attr-srcdoc",
                    "/devdoc/HTML/Elementi/track.html#attr-srclang",
                    "/devdoc/HTML/Elementi/ol.html#attr-start",
                    "/devdoc/HTML/Attributi/step.html",
                    "/devdoc/HTML/Attributi/style.html",
                    "/devdoc/HTML/Elementi/table.html#attr-summary",
                    "/devdoc/HTML/Attributi/tabindex.html",
                    "/devdoc/HTML/Attributi/title.html",
                    "/devdoc/HTML/Attributi/translate.html",
                    "/devdoc/HTML/Elementi/textarea.html#attr-wrap",
                    "/devdoc/HTML/Attributi/x-ms-acceleratorkey.html",
                    "/devdoc/HTML/Attributi/x-ms-format-detection.html"
                ]
            ],
            Attributi_globali = [
                title = [
                    "accesskey",
                    "autocapitalize",
                    "autofocus",
                    "class",
                    "contenteditable",
                    "contextmenu",
                    "data -*",
                    "dir",
                    "draggable",
                    "enterkeyhint",
                    "hidden",
                    "id",
                    "inputmode",
                    "is",
                    "itemid",
                    "itemprop",
                    "itemref",
                    "itemscope",
                    "itemtype",
                    "lang",
                    "nonce",
                    "part",
                    "slot",
                    "spellcheck",
                    "style",
                    "tabindex",
                    "title",
                    "translate",
                    "x-ms-acceleratorkey",
                    "x-ms-format-detection"
                ],
                path = [
                    "/devdoc/HTML/Attributi/accesskey.html",
                    "/devdoc/HTML/Attributi/autocapitalize.html",
                    "/devdoc/HTML/Attributi/autofocus.html",
                    "/devdoc/HTML/Attributi/class.html",
                    "/devdoc/HTML/Attributi/contenteditable.html",
                    "/devdoc/HTML/Attributi/contextmenu.html",
                    "/devdoc/HTML/Attributi/data-*.html",
                    "/devdoc/HTML/Attributi/dir.html",
                    "/devdoc/HTML/Attributi/draggable.html",
                    "/devdoc/HTML/Attributi/enterkeyhint.html",
                    "/devdoc/HTML/Attributi/hidden.html",
                    "/devdoc/HTML/Attributi/id.html",
                    "/devdoc/HTML/Attributi/inputmode.html",
                    "/devdoc/HTML/Attributi/is.html",
                    "/devdoc/HTML/Attributi/itemid.html",
                    "/devdoc/HTML/Attributi/itemprop.html",
                    "/devdoc/HTML/Attributi/itemref.html",
                    "/devdoc/HTML/Attributi/itemscope.html",
                    "/devdoc/HTML/Attributi/itemtype.html",
                    "/devdoc/HTML/Attributi/lang.html",
                    "/devdoc/HTML/Attributi/nonce.html",
                    "/devdoc/HTML/Attributi/part.html",
                    "/devdoc/HTML/Attributi/slot.html",
                    "/devdoc/HTML/Attributi/spellcheck.html",
                    "/devdoc/HTML/Attributi/style.html",
                    "/devdoc/HTML/Attributi/tabindex.html",
                    "/devdoc/HTML/Attributi/title.html",
                    "/devdoc/HTML/Attributi/translate.html",
                    "/devdoc/HTML/Attributi/x-ms-acceleratorkey.html",
                    "/devdoc/HTML/Attributi/x-ms-format-detection.html"
                ]
            ],
            Elementi = [
                title = [
                    "<a>",
                    "<abbr>",
                    "<acronym>",
                    "<address>",
                    "<applet>",
                    "<area>",
                    "<article>",
                    "<aside>",
                    "<audio>",
                    "<b>",
                    "<base>",
                    "<basefont>",
                    "<bdi>",
                    "<bdo>",
                    "<bgsound>",
                    "<big>",
                    "<blink>",
                    "<blockquote>",
                    "<body>",
                    "<br>",
                    "<button>",
                    "<canvas>",
                    "<caption>",
                    "<center>",
                    "<cite>",
                    "<code>",
                    "<col>",
                    "<colgroup>",
                    "<content>",
                    "<data>",
                    "<datalist>",
                    "<dd>",
                    "<del>",
                    "<details>",
                    "<dfn>",
                    "<dialog>",
                    "<dir>",
                    "<div>",
                    "<dl>",
                    "<dt>",
                    "<em>",
                    "<embed>",
                    "<fieldset>",
                    "<figcaption>",
                    "<figure>",
                    "<font>",
                    "<footer>",
                    "<form>",
                    "<frame>",
                    "<frameset>",
                    "<h1 - h6>",
                    "<head>",
                    "<header>",
                    "<hgroup>",
                    "<hr>",
                    "<html>",
                    "<i>",
                    "<iframe>",
                    "<image>",
                    "<img>",
                    "<input>",
                    "<ins>",
                    "<kbd>",
                    "<keygen>",
                    "<label>",
                    "<legend>",
                    "<li>",
                    "<link>",
                    "<main>",
                    "<map>",
                    "<mark>",
                    "<marquee>",
                    "<menu>",
                    "<menuitem>",
                    "<meta>",
                    "<meter>",
                    "<nav>",
                    "<nobr>",
                    "<noembed>",
                    "<noframes>",
                    "<noscript>",
                    "<object>",
                    "<ol>",
                    "<optgroup>",
                    "<option>",
                    "<output>",
                    "<p>",
                    "<param>",
                    "<picture>",
                    "<plaintext>",
                    "<portal>",
                    "<pre>",
                    "<progress>",
                    "<q>",
                    "<rb>",
                    "<rp>",
                    "<rt>",
                    "<rtc>",
                    "<ruby>",
                    "<s>",
                    "<samp>",
                    "<script>",
                    "<section>",
                    "<select>",
                    "<shadow>",
                    "<slot>",
                    "<small>",
                    "<source>",
                    "<spacer>",
                    "<span>",
                    "<strike>",
                    "<strong>",
                    "<style>",
                    "<sub>",
                    "<summary>",
                    "<sup>",
                    "<table>",
                    "<tbody>",
                    "<td>",
                    "<template>",
                    "<textarea>",
                    "<tfoot>",
                    "<th>",
                    "<thead>",
                    "<time>",
                    "<title>",
                    "<tr>",
                    "<track>",
                    "<tt>",
                    "<u>",
                    "<ul>",
                    "<var>",
                    "<video>",
                    "<wbr>",
                    "<xmp>"
                ],
                path = [
                    "/devdoc/HTML/Elementi/a.html",
                    "/devdoc/HTML/Elementi/abbr.html",
                    "/devdoc/HTML/Elementi/acronym.html",
                    "/devdoc/HTML/Elementi/address.html",
                    "/devdoc/HTML/Elementi/applet.html",
                    "/devdoc/HTML/Elementi/area.html",
                    "/devdoc/HTML/Elementi/article.html",
                    "/devdoc/HTML/Elementi/aside.html",
                    "/devdoc/HTML/Elementi/audio.html",
                    "/devdoc/HTML/Elementi/b.html",
                    "/devdoc/HTML/Elementi/base.html",
                    "/devdoc/HTML/Elementi/basefont.html",
                    "/devdoc/HTML/Elementi/bdi.html",
                    "/devdoc/HTML/Elementi/bdo.html",
                    "/devdoc/HTML/Elementi/bgsound.html",
                    "/devdoc/HTML/Elementi/big.html",
                    "/devdoc/HTML/Elementi/blink.html",
                    "/devdoc/HTML/Elementi/blockquote.html",
                    "/devdoc/HTML/Elementi/body.html",
                    "/devdoc/HTML/Elementi/br.html",
                    "/devdoc/HTML/Elementi/button.html",
                    "/devdoc/HTML/Elementi/canvas.html",
                    "/devdoc/HTML/Elementi/caption.html",
                    "/devdoc/HTML/Elementi/center.html",
                    "/devdoc/HTML/Elementi/cite.html",
                    "/devdoc/HTML/Elementi/code.html",
                    "/devdoc/HTML/Elementi/col.html",
                    "/devdoc/HTML/Elementi/colgroup.html",
                    "/devdoc/HTML/Elementi/content.html",
                    "/devdoc/HTML/Elementi/data.html",
                    "/devdoc/HTML/Elementi/datalist.html",
                    "/devdoc/HTML/Elementi/dd.html",
                    "/devdoc/HTML/Elementi/del.html",
                    "/devdoc/HTML/Elementi/details.html",
                    "/devdoc/HTML/Elementi/dfn.html",
                    "/devdoc/HTML/Elementi/dialog.html",
                    "/devdoc/HTML/Elementi/dir.html",
                    "/devdoc/HTML/Elementi/div.html",
                    "/devdoc/HTML/Elementi/dl.html",
                    "/devdoc/HTML/Elementi/dt.html",
                    "/devdoc/HTML/Elementi/em.html",
                    "/devdoc/HTML/Elementi/embed.html",
                    "/devdoc/HTML/Elementi/fieldset.html",
                    "/devdoc/HTML/Elementi/figcaption.html",
                    "/devdoc/HTML/Elementi/figure.html",
                    "/devdoc/HTML/Elementi/font.html",
                    "/devdoc/HTML/Elementi/footer.html",
                    "/devdoc/HTML/Elementi/form.html",
                    "/devdoc/HTML/Elementi/frame.html",
                    "/devdoc/HTML/Elementi/frameset.html",
                    "/devdoc/HTML/Elementi/h1_h6.html",
                    "/devdoc/HTML/Elementi/head.html",
                    "/devdoc/HTML/Elementi/header.html",
                    "/devdoc/HTML/Elementi/hgroup.html",
                    "/devdoc/HTML/Elementi/hr.html",
                    "/devdoc/HTML/Elementi/html.html",
                    "/devdoc/HTML/Elementi/i.html",
                    "/devdoc/HTML/Elementi/iframe.html",
                    "/devdoc/HTML/Elementi/image.html",
                    "/devdoc/HTML/Elementi/img.html",
                    "/devdoc/HTML/Elementi/input.html",
                    "/devdoc/HTML/Elementi/ins.html",
                    "/devdoc/HTML/Elementi/kbd.html",
                    "/devdoc/HTML/Elementi/keygen.html",
                    "/devdoc/HTML/Elementi/label.html",
                    "/devdoc/HTML/Elementi/legend.html",
                    "/devdoc/HTML/Elementi/li.html",
                    "/devdoc/HTML/Elementi/link.html",
                    "/devdoc/HTML/Elementi/main.html",
                    "/devdoc/HTML/Elementi/map.html",
                    "/devdoc/HTML/Elementi/mark.html",
                    "/devdoc/HTML/Elementi/marquee.html",
                    "/devdoc/HTML/Elementi/menu.html",
                    "/devdoc/HTML/Elementi/menuitem.html",
                    "/devdoc/HTML/Elementi/meta.html",
                    "/devdoc/HTML/Elementi/meter.html",
                    "/devdoc/HTML/Elementi/nav.html",
                    "/devdoc/HTML/Elementi/nobr.html",
                    "/devdoc/HTML/Elementi/noembed.html",
                    "/devdoc/HTML/Elementi/noframes.html",
                    "/devdoc/HTML/Elementi/noscript.html",
                    "/devdoc/HTML/Elementi/object.html",
                    "/devdoc/HTML/Elementi/ol.html",
                    "/devdoc/HTML/Elementi/optgroup.html",
                    "/devdoc/HTML/Elementi/option.html",
                    "/devdoc/HTML/Elementi/output.html",
                    "/devdoc/HTML/Elementi/p.html",
                    "/devdoc/HTML/Elementi/param.html",
                    "/devdoc/HTML/Elementi/picture.html",
                    "/devdoc/HTML/Elementi/plaintext.html",
                    "/devdoc/HTML/Elementi/portal.html",
                    "/devdoc/HTML/Elementi/pre.html",
                    "/devdoc/HTML/Elementi/progress.html",
                    "/devdoc/HTML/Elementi/q.html",
                    "/devdoc/HTML/Elementi/rb.html",
                    "/devdoc/HTML/Elementi/rp.html",
                    "/devdoc/HTML/Elementi/rt.html",
                    "/devdoc/HTML/Elementi/rtc.html",
                    "/devdoc/HTML/Elementi/ruby.html",
                    "/devdoc/HTML/Elementi/s.html",
                    "/devdoc/HTML/Elementi/samp.html",
                    "/devdoc/HTML/Elementi/script.html",
                    "/devdoc/HTML/Elementi/section.html",
                    "/devdoc/HTML/Elementi/select.html",
                    "/devdoc/HTML/Elementi/shadow.html",
                    "/devdoc/HTML/Elementi/slot.html",
                    "/devdoc/HTML/Elementi/small.html",
                    "/devdoc/HTML/Elementi/source.html",
                    "/devdoc/HTML/Elementi/spacer.html",
                    "/devdoc/HTML/Elementi/span.html",
                    "/devdoc/HTML/Elementi/strike.html",
                    "/devdoc/HTML/Elementi/strong.html",
                    "/devdoc/HTML/Elementi/style.html",
                    "/devdoc/HTML/Elementi/sub.html",
                    "/devdoc/HTML/Elementi/summary.html",
                    "/devdoc/HTML/Elementi/sup.html",
                    "/devdoc/HTML/Elementi/table.html",
                    "/devdoc/HTML/Elementi/tbody.html",
                    "/devdoc/HTML/Elementi/td.html",
                    "/devdoc/HTML/Elementi/template.html",
                    "/devdoc/HTML/Elementi/textarea.html",
                    "/devdoc/HTML/Elementi/tfoot.html",
                    "/devdoc/HTML/Elementi/th.html",
                    "/devdoc/HTML/Elementi/thead.html",
                    "/devdoc/HTML/Elementi/time.html",
                    "/devdoc/HTML/Elementi/title.html",
                    "/devdoc/HTML/Elementi/tr.html",
                    "/devdoc/HTML/Elementi/track.html",
                    "/devdoc/HTML/Elementi/tt.html",
                    "/devdoc/HTML/Elementi/u.html",
                    "/devdoc/HTML/Elementi/ul.html",
                    "/devdoc/HTML/Elementi/var.html",
                    "/devdoc/HTML/Elementi/video.html",
                    "/devdoc/HTML/Elementi/wbr.html",
                    "/devdoc/HTML/Elementi/xmp.html",
                ]
            ],
            Elementi_sinput = [
                title = [
                    '<input type="button">',
                    '<input type="checkbox">',
                    '<input type="color">',
                    '<input type="date">',
                    '<input type="datetime-local">',
                    '<input type="datetime">',
                    '<input type="email">',
                    '<input type="file">',
                    '<input type="hidden">',
                    '<input type="image">',
                    '<input type="month">',
                    '<input type="number">',
                    '<input type="password">',
                    '<input type="radio">',
                    '<input type="range">',
                    '<input type="reset">',
                    '<input type="search">',
                    '<input type="submit">',
                    '<input type="tel">',
                    '<input type="text">',
                    '<input type="time">',
                    '<input type="url">',
                    '<input type="week">'
                ],
                path = [
                    "/devdoc/HTML/Elementi_input/input_type_button.html",
                    "/devdoc/HTML/Elementi_input/input_type_checkbox.html",
                    "/devdoc/HTML/Elementi_input/input_type_color.html",
                    "/devdoc/HTML/Elementi_input/input_type_date.html",
                    "/devdoc/HTML/Elementi_input/input_type_datetime-local.html",
                    "/devdoc/HTML/Elementi_input/input_type_datetime.html",
                    "/devdoc/HTML/Elementi_input/input_type_email.html",
                    "/devdoc/HTML/Elementi_input/input_type_file.html",
                    "/devdoc/HTML/Elementi_input/input_type_hidden.html",
                    "/devdoc/HTML/Elementi_input/input_type_image.html",
                    "/devdoc/HTML/Elementi_input/input_type_month.html",
                    "/devdoc/HTML/Elementi_input/input_type_number.html",
                    "/devdoc/HTML/Elementi_input/input_type_password.html",
                    "/devdoc/HTML/Elementi_input/input_type_radio.html",
                    "/devdoc/HTML/Elementi_input/input_type_range.html",
                    "/devdoc/HTML/Elementi_input/input_type_reset.html",
                    "/devdoc/HTML/Elementi_input/input_type_search.html",
                    "/devdoc/HTML/Elementi_input/input_type_submit.html",
                    "/devdoc/HTML/Elementi_input/input_type_tel.html",
                    "/devdoc/HTML/Elementi_input/input_type_text.html",
                    "/devdoc/HTML/Elementi_input/input_type_time.html",
                    "/devdoc/HTML/Elementi_input/input_type_url.html",
                    "/devdoc/HTML/Elementi_input/input_type_week.html"
                ]
            ]

        ]
    ];

    console.log(asideContent[0].length);

    const sidebarLgDevice = document.getElementById('sidebarLgDevice');

    for (i = 0; i < menuArguments.length; i++) {
        const mainDetails = document.createElement('details');

        const mainSummary = document.createElement('summary');
        mainSummary.innerHTML = menuArguments[i];

        // for (x = 0; x < asideContent[i].length; x++) {
        //     const nestedDetails = document.createElement('details');
        //     const nestedSummary = document.createElement('summary');
        //     nestedSummary.innerHTML = asideContent[x];

        //     nestedDetails.appendChild(nestedSummary);
        //     mainDetails.appendChild(nestedDetails);

        // };


        mainDetails.appendChild(mainSummary);
        sidebarLgDevice.appendChild(mainDetails);
    };



    // const place = Array.from(document.getElementsByClassName('js-aside'));

    // for (const element of place) {
    //     for (let menuArgument = 0; menuArgument < asideContent.menuArguments.length; menuArgument++) {

    //         const mainDetails = document.createElement('details');
    //         const mainSummary = document.createElement('summary');
    //         const mainSummaryContent = document.createTextNode(asideContent.menuArguments[menuArgument]);
    //         mainSummary.appendChild(mainSummaryContent);
    //         mainDetails.appendChild(mainSummary);

    //         //This is about HTML
    //         if (menuArgument === 0) {
    //             for (let i = 0; i < Object.keys(asideContent.html.htmlArgument).length; i++) {
    //                 const secondDetails = document.createElement('details');
    //                 const secondSummary = document.createElement('summary');
    //                 const secondSummaryContent = document.createTextNode(Array.from(
    //                     Object.keys(asideContent.html.htmlArgument
    //                     ))[i]);
    //                 secondSummary.classList.add('nested-list');

    //                 const listContainer = document.createElement('ul');

    //                 // This is about Attributi
    //                 if (i === 0) {
    //                     for (let listItemCounter = 0; listItemCounter < asideContent.html.htmlArgument.Attributi.name.length; listItemCounter++) {
    //                         const listItem = document.createElement('li');
    //                         const linkTag = document.createElement('a');
    //                         const codeTag = document.createElement('code');
    //                         const codeTagContent = document.createTextNode(asideContent.html.htmlArgument.Attributi.name[listItemCounter]);
    //                         linkTag.href = asideContent.html.htmlArgument.Attributi.path[listItemCounter];
    //                         codeTag.appendChild(codeTagContent);
    //                         linkTag.appendChild(codeTag);
    //                         listItem.appendChild(linkTag);
    //                         listContainer.appendChild(listItem);
    //                         console.log(Array.from(asideContent.html.htmlArgument.Attributi.name[listItemCounter]));
    //                     }
    //                 }

    //                 // This is about Attributi globali
    //                 if (i === 1) {
    //                     for (let listItemCounter = 0; listItemCounter < asideContent.html.htmlArgument["Attributi globali"].name.length; listItemCounter++) {
    //                         const listItem = document.createElement('li');
    //                         const linkTag = document.createElement('a');
    //                         const codeTag = document.createElement('code');
    //                         const codeTagContent = document.createTextNode(asideContent.html.htmlArgument["Attributi globali"].name[listItemCounter]);
    //                         linkTag.href = asideContent.html.htmlArgument["Attributi globali"].path[listItemCounter];
    //                         codeTag.appendChild(codeTagContent);
    //                         linkTag.appendChild(codeTag);
    //                         listItem.appendChild(linkTag);
    //                         listContainer.appendChild(listItem);
    //                         console.log(Array.from(asideContent.html.htmlArgument["Attributi globali"].name[listItemCounter]));
    //                     }
    //                 }

    //                 // This is about Elementi
    //                 if (i === 2) {
    //                     for (let listItemCounter = 0; listItemCounter < asideContent.html.htmlArgument.Elementi.name.length; listItemCounter++) {
    //                         const listItem = document.createElement('li');
    //                         const linkTag = document.createElement('a');
    //                         const codeTag = document.createElement('code');
    //                         const codeTagContent = document.createTextNode(asideContent.html.htmlArgument.Elementi.name[listItemCounter]);
    //                         linkTag.href = asideContent.html.htmlArgument.Elementi.path[listItemCounter];
    //                         codeTag.appendChild(codeTagContent);
    //                         linkTag.appendChild(codeTag);
    //                         listItem.appendChild(linkTag);
    //                         listContainer.appendChild(listItem);
    //                     }
    //                 }

    //                 // This is about Elementi input
    //                 if (i === 3) {
    //                     for (let listItemCounter = 0; listItemCounter < asideContent.html.htmlArgument["Elementi input"].name.length; listItemCounter++) {
    //                         const listItem = document.createElement('li');
    //                         const linkTag = document.createElement('a');
    //                         const codeTag = document.createElement('code');
    //                         const codeTagContent = document.createTextNode(asideContent.html.htmlArgument["Elementi input"].name[listItemCounter]);
    //                         linkTag.href = asideContent.html.htmlArgument["Elementi input"].path[listItemCounter];
    //                         codeTag.appendChild(codeTagContent);
    //                         linkTag.appendChild(codeTag);
    //                         listItem.appendChild(linkTag);
    //                         listContainer.appendChild(listItem);
    //                         console.log(Array.from(asideContent.html.htmlArgument["Elementi input"].name[listItemCounter]));
    //                     }
    //                 }

    //                 secondSummary.appendChild(secondSummaryContent);
    //                 secondDetails.appendChild(secondSummary);
    //                 secondDetails.appendChild(listContainer);
    //                 mainDetails.appendChild(secondDetails);
    //             }
    //         }

    //         element.appendChild(mainDetails);
    //     };
    // };


    // // This generates list item for each table of content
    // const listTable = Array.from(document.getElementsByClassName('tableList'));

    // for (const list of listTable) {
    //     const heading = document.getElementsByTagName('h2');
    //     for (let i = 0; i < heading.length; i++) {
    //         const listItem = document.createElement('li');
    //         const listItemLinkTag = document.createElement('a');
    //         const linkItemContent = document.createTextNode(heading[i].innerHTML);
    //         listItemLinkTag.href = `#${heading[i].id}`;

    //         listItemLinkTag.appendChild(linkItemContent);
    //         listItem.appendChild(listItemLinkTag);
    //         list.appendChild(listItem);
    //     }
    // }
});