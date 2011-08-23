/*!
* NuGetButton JavaScript Library v0.1
* http://github.com/prabirshrestha/nuget-button
*
* Copyright 2011, Prabir Shrestha
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/
(function (window, undefined) {
    var 
        document = window.document,

        nugetButtonCssUrl = 'http://s.prabir.me/nuget-button/0.1/nuget-button.css',

        installPackageText = 'Install-Package',

        getElementsByClass = function (searchClass, node, tag) {
            var classElements = new Array();
            if (node == null)
                node = document;
            if (tag == null)
                tag = '*';
            var els = node.getElementsByTagName(tag);
            var elsLen = els.length;
            var pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
            var i, j;
            for (i = 0, j = 0; i < elsLen; i++) {
                if (pattern.test(els[i].className)) {
                    classElements[j] = els[i];
                    j++;
                }
            }
            return classElements;
        },

        text = function (node, textContent) {
            var textNode = document.createTextNode(textContent);
            node.appendChild(textNode);
        },

        loadCss = function (cssUrl) {
            if (document.createStyleSheet) {
                document.createStyleSheet(cssUrl);
            }
            else {
                var styleSheet = document.createElement("link");
                styleSheet.setAttribute("rel", "stylesheet");
                styleSheet.setAttribute("type", "text/css");
                styleSheet.setAttribute("href", cssUrl);
                document.getElementsByTagName("head")[0].appendChild(styleSheet);
            }
        },

        init = function () {
            var buttons = getElementsByClass('nuget-button', null, 'pre');
            var totalButtons = buttons.length;
            if (totalButtons.length == 0) {
                return;
            }
            
            loadCss(nugetButtonCssUrl);
            for (var i = 0; i < totalButtons; ++i) {
                var pre = buttons[i],
                    str = pre.innerHTML.split(' ');
                if (str.length !== 2 || str[0] !== installPackageText) {
                    continue;
                }
                var packageName = str[1];

                var 
                    commandWrapper = document.createElement('div'),
                    commandPrompt = document.createElement('div'),
                    command = document.createElement('p');

                commandWrapper.className = 'nuget-button-commandWrapper';

                commandPrompt.className = 'nuget-button-commandPrompt';
                commandWrapper.appendChild(commandPrompt);

                text(command, "PM> " + installPackageText + ' ' + packageName);
                command.className = 'nuget-button-command';
                commandPrompt.appendChild(command);

                pre.parentNode.replaceChild(commandWrapper, pre);
            }

        };

    init();

})(window);
