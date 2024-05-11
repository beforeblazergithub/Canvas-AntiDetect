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
