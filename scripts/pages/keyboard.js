(function(){
    const media = document.getElementById('msec');
    const items = media.getElementsByClassName('items');
    const codes = {38:-3,40:3,39:1,37:-1};
    let reset =0;

    setTimeout(function(){
        for(var i=0; i<items.length; i++){
            items[i].count = i;
        }
        reset = items[0].firstElementChild;
    },5000);

    var i = 0;
    function handleKeys(e) {
        var keyCode = e.keyCode;
        if(codes[keyCode]){
            reset.style.transform = 'none';
            reset.style.boxShadow = 'none';
            var t = items[i];
            if(t.count >= 0 && t.count < items.length){
                console.log(t.count);
                if(items[t.count + codes[keyCode]]){
                    items[t.count + codes[keyCode]].firstElementChild.style.transform = 'scale(1.1)';
                    items[t.count + codes[keyCode]].firstElementChild.style.boxShadow =  '0px 16px 32px 0px rgba(0,0,0,0.5)';
                    i = i + codes[keyCode];
                    reset = items[t.count + codes[keyCode]].firstElementChild;
                }
            }
        }
    }
    addEventListener('keydown', handleKeys);
    document.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          items[i].click();
        }
      });
})();