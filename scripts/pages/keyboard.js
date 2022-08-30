export function keyboard(data){
    const items = data;
    const codes = {38:-3,40:3,39:1,37:-1};
    let reset = 0;

    for(var i=0; i<items.length; i++){
        items[i].count = i;
    };
    reset = items[0].firstElementChild;

    // navigation entre les elements de la page
    let stop = false;
    let focused = false;
    var i = 0;
    function handleKeys(e) {
        if(stop == true){
            return;
        }
        var keyCode = e.keyCode;
        if(codes[keyCode]){
            focused = true;
            reset.style.transform = 'none';
            reset.style.boxShadow = 'none';
            var t = items[i];
            if(t.count >= 0 && t.count < items.length){
                if(items[t.count + codes[keyCode]]){
                    items[t.count + codes[keyCode]].firstElementChild.style.transform = 'scale(1.1)';
                    items[t.count + codes[keyCode]].firstElementChild.style.boxShadow =  '0px 16px 32px 0px rgba(0,0,0,0.5)';
                    i = i + codes[keyCode];
                    reset = items[t.count + codes[keyCode]].firstElementChild;
                }
                items[t.count + codes[keyCode]].setAttribute('tabindex', '-1');
                items[t.count + codes[keyCode]].focus();
                items[t.count + codes[keyCode]].removeAttribute('tabindex');
            }
        }
    }

    // selection de l'element souhaité
    addEventListener('keydown', handleKeys);
    document.addEventListener("keypress", function(event) {
        if (focused == true){
            if (event.key === "Enter") {
            event.preventDefault();
            items[i].click();
            focused = false;
            stop = true;
            }
        }
    });

    const list = document.querySelector('.dropdown-content');
    list.addEventListener("click", function sort(e){
        stop = true;
    });

    document.addEventListener('keydown', (e) => {
        e = e || window.event;
        if (e.keyCode === 27) {
            stop = false;
        }
    })
};