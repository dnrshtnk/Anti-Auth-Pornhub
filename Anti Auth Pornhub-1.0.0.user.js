// ==UserScript==
// @name         Anti Auth Pornhub New
// @namespace    https://github.com
// @homepage     https://github.com
// @version      1.0.2
// @description  Anti Auth Pornhub New
// @icon         https://di.phncdn.com/www-static/favicon.ico
// @author       Munez D
// @match        *://*.pornhub.com/*
// @downloadURL  https://github.com/dnrshtnk/Anti-Auth-Pornhub/blob/main/Anti%20Auth%20Pornhub-1.0.0.user.js
// @updateURL    https://github.com/dnrshtnk/Anti-Auth-Pornhub/blob/main/Anti%20Auth%20Pornhub-1.0.0.user.js
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @connect      pornhub.com
// @grant        GM_getResourceURL
// @run-at       document-body
// ==/UserScript==

GM_addStyle('.isOpenMTubes { overflow: visible !important; }');
GM_addStyle('.topSectionGrid{display: block !important; }');

window.onload = function() {
    const modalWrapMTubes = document.getElementById("modalWrapMTubes");
    const ageVerificationWrapperElement1 = document.getElementById("ageDisclaimerOverlay");
    const ageVerificationWrapperElement2 = document.getElementById("ageDisclaimerMainBG");
    const ageVerificationWrapperElement3 = document.getElementById("cookieBannerWrapper");
    const ageVerificationWrapperElement4 = document.getElementById("cookieBanner");
    const ageVerificationWrapperElement5 = document.querySelector('.sideColumn');
    const guidedTour_watchPagePC = document.getElementById("guidedTour_watchPagePC");
    modalWrapMTubes.remove();
    ageVerificationWrapperElement1.remove();
    ageVerificationWrapperElement2.remove();
    ageVerificationWrapperElement3.remove();
    ageVerificationWrapperElement4.remove();
    ageVerificationWrapperElement5.remove();
    guidedTour_watchPagePC.remove();
}
