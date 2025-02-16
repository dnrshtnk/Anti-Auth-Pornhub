// ==UserScript==
// @name         Anti Auth Pornhub 2025
// @namespace    https://github.com/dnrshtnk/Anti-Auth-Pornhub
// @homepage     https://github.com/dnrshtnk/Anti-Auth-Pornhub
// @version      1.0.4
// @description  Anti Auth Pornhub
// @icon         https://di.phncdn.com/www-static/favicon.ico
// @author       Munez D
// @match        *://*.pornhub.com/*
// @downloadURL  https://raw.githubusercontent.com/dnrshtnk/Anti-Auth-Pornhub/refs/heads/main/Anti_Auth_Pornhub.js
// @updateURL    https://raw.githubusercontent.com/dnrshtnk/Anti-Auth-Pornhub/refs/heads/main/Anti_Auth_Pornhub.js
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @connect      pornhub.com
// @grant        GM_getResourceURL
// @run-at       document-body
// ==/UserScript==

(function() {
    'use strict';

GM_addStyle('.isOpenMTubes { overflow: visible !important; position: relative !important;}');
GM_addStyle('.topSectionGrid{display: block !important; }');
GM_addStyle('#ageDisclaimerOverlay,#ageVerificationOverlay{backdrop-filter: blur(0px) !important; -webkit-backdrop-filter: blur(0px) !important; };');
GM_addStyle('.is-blurred #mobileContainer #videoContainer [class^=mhp1138_videoPoster]{filter: blur(0px) !important;}');
GM_addStyle('.is-blurred #mobileContainer .main_content img,.is-blurred #mobileContainer [class^=mhp1138_thumb]{filter: blur(0px) !important;}');
GM_addStyle('.is-blurred #mobileContainer iframe{filter: blur(0px) !important;}');
GM_addStyle('.is-blurred #mobileContainer img{filter: blur(0px) !important;}');
GM_addStyle('.is-blurred #mobileContainer video{filter: blur(0px) !important;}');
GM_addStyle('body.blurredAVModal{filter: blur(0px) !important; opacity: 1 !important;}');
window.onload = function() {
    const modalWrapMTubes = document.getElementById("modalWrapMTubes");
    modalWrapMTubes.remove();
    const ageVerificationWrapperElement1 = document.getElementById("ageDisclaimerOverlay");
    ageVerificationWrapperElement1.remove();
    const ageVerificationWrapperElement2 = document.getElementById("ageDisclaimerMainBG");
    ageVerificationWrapperElement2.remove();
    const ageVerificationWrapperElement3 = document.getElementById("cookieBannerWrapper");
    ageVerificationWrapperElement3.remove();
    const ageVerificationWrapperElement4 = document.getElementById("cookieBanner");
    ageVerificationWrapperElement4.remove();
    const ageVerificationWrapperElement5 = document.querySelector('.sideColumn');
    ageVerificationWrapperElement5.remove();
    const guidedTour_watchPagePC = document.getElementById("guidedTour_watchPagePC");
    guidedTour_watchPagePC.remove();
}
})();
