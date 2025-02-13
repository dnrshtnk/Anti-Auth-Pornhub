// ==UserScript==
// @name         Anti Auth Pornhub New
// @namespace    https://github.com/dnrshtnk/
// @homepage     https://github.com/dnrshtnk/
// @version      1.0.2
// @description  Anti Auth Pornhub New
// @icon         https://di.phncdn.com/www-static/favicon.ico
// @author       Munez D
// @match        *://*.pornhub.com/*
// @downloadURL  https://github.com/dnrshtnk/Anti-Auth-Pornhub/blob/main/Anti_Auth_Pornhub.js
// @updateURL    https://github.com/dnrshtnk/Anti-Auth-Pornhub/blob/main/Anti_Auth_Pornhub.js
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @connect      pornhub.com
// @grant        GM_getResourceURL
// @run-at       document-body
// ==/UserScript==

(function() {
    'use strict';

GM_addStyle('.isOpenMTubes { overflow: visible !important; }');
GM_addStyle('.topSectionGrid{display: block !important; }');

window.onload = function() {
    const ageVerificationOverlay = document.getElementById("ageVerificationOverlay");
    const ageverificationwrapper = document.getElementById("age-verification-wrapper");
    const ageverificationcontainer = document.getElementById("age-verification-container");
    const modalWrapMTubes = document.getElementById("modalWrapMTubes");
    const ageVerificationWrapperElement1 = document.getElementById("ageDisclaimerOverlay");
    const ageVerificationWrapperElement2 = document.getElementById("ageDisclaimerMainBG");
    const ageVerificationWrapperElement3 = document.getElementById("cookieBannerWrapper");
    const ageVerificationWrapperElement4 = document.getElementById("cookieBanner");
    const ageVerificationWrapperElement5 = document.querySelector('.sideColumn');
    const guidedTour_watchPagePC = document.getElementById("guidedTour_watchPagePC");
    ageVerificationOverlay.remove();
    ageverificationwrapper.remove();
    ageverificationcontainer.remove();
    modalWrapMTubes.remove();
    ageVerificationWrapperElement1.remove();
    ageVerificationWrapperElement2.remove();
    ageVerificationWrapperElement3.remove();
    ageVerificationWrapperElement4.remove();
    ageVerificationWrapperElement5.remove();
    guidedTour_watchPagePC.remove();
}
})();
