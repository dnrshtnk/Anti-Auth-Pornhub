// ==UserScript==
// @name         Anti Auth Pornhub Old
// @namespace    https://github.com/dnrshtnk/Anti-Auth-Pornhub
// @homepage     https://github.com/dnrshtnk/Anti-Auth-Pornhub
// @version      1.0.0
// @description  Anti Auth Pornhub Old
// @icon         https://di.phncdn.com/www-static/favicon.ico
// @author       Munez D
// @match        *://*.pornhub.com/*
// @downloadURL  https://github.com/dnrshtnk/Anti-Auth-Pornhub/raw/refs/heads/main/Anti_Auth_Pornhub_Old.js
// @updateURL    https://github.com/dnrshtnk/Anti-Auth-Pornhub/raw/refs/heads/main/Anti_Auth_Pornhub_Old.js
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @connect      pornhub.com
// @grant        GM_getResourceURL
// @run-at       document-body
// ==/UserScript==

(function() {
    'use strict';

window.onload = function() {
    const ageVerificationOverlay = document.getElementById("ageVerificationOverlay");
    const ageverificationwrapper = document.getElementById("age-verification-wrapper");
    const ageverificationcontainer = document.getElementById("age-verification-container");

    ageVerificationOverlay.remove();
    ageverificationwrapper.remove();
    ageverificationcontainer.remove();

}
})();
