// ==UserScript==
// @name         Canvas
// @namespace    https://github.com/TheLazySquid/canvas-noleave
// @version      0.5.2
// @downloadURL  https://github.com/TheLazySquid/canvas-noleave/raw/master/ad.user.js
// @updateURL    https://github.com/beforeblazergithub/canvas-noleave/raw/master/ad.user.js
// @description  Prevents canvas from detecing page joins and leaves!
// @author       blazer
// @match        https://y115.instructure.com*
// @grant        none
// @run-at       document-start
// ==/UserScript==

Object.defineProperty(document, 'visibilityState', {value: 'visible', writable: true});
Object.defineProperty(document, 'hidden', {value: false, writable: true});
Object.defineProperty(document, 'webkitVisibilityState', {value: 'visible', writable: true});
Object.defineProperty(document, 'webkitHidden', {value: false, writable: true});

let realEventListener = Window.prototype.addEventListener
Window.prototype.addEventListener = (a,b,c) =>
{
    if(a == 'focus' || a == 'blur' || a == 'visibilitychange') {
        console.log(`[AD] '${a}' event subscription prevented. Blazer saved u`)
    } else {
        realEventListener(a,b,c);
    }
}
