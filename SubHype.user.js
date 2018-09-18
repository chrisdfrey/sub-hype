// ==UserScript==
// @name         Sub Hype
// @version      0.1
// @description  Adds a button to a Twitch channel to enter sub hype for you
// @author       chrisdfrey
// @match        https://www.twitch.tv/(channel)
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

// change match URL above

var hypeText = 'sub hype!'; // change this to whatever you want your sub hype to be

function onClick() {
    $('.chat-input textarea')[0].value = hypeText;
}

function addButton(container) {

    var textSpan = document.createElement('span');
    textSpan.className = 'tw-button__text';
    textSpan.innerHTML = 'Hype';

    var hypeButton = document.createElement('button');
    hypeButton.className = 'tw-button';
    hypeButton.style.marginRight = '1em';
    hypeButton.onclick = onClick;

    hypeButton.appendChild(textSpan);

    var flexRow = document.createElement('div');
    flexRow.className = 'tw-flex tw-flex-row';

    flexRow.appendChild(hypeButton);

    var sendButton = $("[data-test-selector='chat-send-button']")[0];
    flexRow.appendChild(sendButton);

    container[0].appendChild(flexRow);
}

waitForKeyElements('.chat-input__buttons-container', addButton, bWaitOnce=true);
