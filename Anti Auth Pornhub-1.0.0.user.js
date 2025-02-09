// ==UserScript==
// @name         Anti Auth Pornhub
// @namespace    https://github.com
// @homepage     https://github.com
// @version      1.0.0
// @description  Anti Auth Pornhub
// @icon         https://di.phncdn.com/www-static/favicon.ico
// @author       Munez D
// @match        *://*.pornhub.com/*
// @downloadURL  https://github.com
// @updateURL    https://github.com
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @connect      pornhub.com
// @grant        GM_getResourceURL
// @run-at       document-body
// ==/UserScript==

GM_addStyle('.isOpenMTubes { overflow: visible !important; }');
GM_addStyle('.topSectionGrid{display: block !important; }');

window.onload = function() {
    const ageVerificationWrapperElement6 = document.getElementById("age-verification-wrapper");
    const ageVerificationWrapperElement7 = document.getElementById("age-verification-container");
    const ageVerificationContainerElement = document.getElementById("modalWrapMTubes");
    const ageVerificationWrapperElement1 = document.getElementById("ageDisclaimerOverlay");
    const ageVerificationWrapperElement2 = document.getElementById("ageDisclaimerMainBG");
    const ageVerificationWrapperElement3 = document.getElementById("cookieBannerWrapper");
    const ageVerificationWrapperElement4 = document.getElementById("cookieBanner");
    const ageVerificationWrapperElement5 = document.querySelector('.sideColumn');

    ageVerificationContainerElement.remove();
    ageVerificationWrapperElement1.remove();
    ageVerificationWrapperElement2.remove();
    ageVerificationWrapperElement3.remove();
    ageVerificationWrapperElement4.remove();
    ageVerificationWrapperElement5.remove();
    ageVerificationWrapperElement6.remove();
    ageVerificationWrapperElement7.remove();
}
