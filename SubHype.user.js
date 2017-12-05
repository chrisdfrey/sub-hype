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
    var input = $('.chat-input textarea')[0];
    input.value = hypeText;
}

function addButton(container) {
    var button = document.createElement('button');
    button.innerHTML = 'Hype';
    button.className = 'button';
    button.onclick = onClick;

    container[0].appendChild(button);
}

waitForKeyElements('.chat-buttons-container', addButton, bWaitOnce=true);
