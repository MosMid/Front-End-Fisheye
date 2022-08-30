function lightbox(){
    const article = document.getElementsByClassName('article');
    const slideBg = document.getElementById("slide");
    const zoom = document.getElementById("zoom");
    const video = document.getElementById("video");
    const title = document.getElementById("title");
    const previous = document.getElementById("previous");
    const next = document.getElementById("next");
    const closeSlide = document.getElementById("closeSlide");
    
    // Lancement de la modale lightbox
    myFunction = function(e) {
        let imgSrc = e.firstChild.src;
        for (let i = 0; i < article.length; i++) {
            if (imgSrc === article[i].firstChild.src){
                let wantedArticle = article[i];
                slideBg.style.display = "block";
                if(wantedArticle.firstChild.nodeName === "IMG"){
                    zoom.setAttribute("src", imgSrc);
                    zoom.style.display = 'block';
                    video.style.display = 'none';
                }
                if(wantedArticle.firstChild.nodeName === "VIDEO"){
                    video.firstChild.setAttribute("src", imgSrc);
                    video.load();
                    zoom.style.display = 'none';
                    video.style.display = 'block';
                }
                title.textContent = wantedArticle.childNodes[1].childNodes[0].textContent;


                const max = article.length - 1;
                if(i <= 0){
                    previous.style.color ='grey';
                    next.style.color ='#901C1C';
                    
                } else if (i >= max){
                    next.style.color ='grey';
                    previous.style.color ='#901C1C';
                } else {
                    previous.style.color ='#901C1C';
                    next.style.color ='#901C1C';
                }

                // element precedent
                previous.onclick = function(){
                    if(i > 0){
                        i = i - 1;
                        if(article[i].firstChild.nodeName === "IMG"){
                            zoom.setAttribute("src", article[i].firstChild.src);
                            zoom.style.display = 'block';
                            video.style.display = 'none';
                        }
                        if(article[i].firstChild.nodeName === "VIDEO"){
                            video.firstChild.setAttribute("src", article[i].firstChild.src);
                            video.load();
                            zoom.style.display = 'none';
                            video.style.display = 'block';
                        }
                        title.textContent = article[i].childNodes[1].childNodes[0].textContent;
                    }
                    if(i == 0){
                        previous.style.color ='grey';
                        next.style.color ='#901C1C';  
                    } else {
                        previous.style.color ='#901C1C';
                        next.style.color ='#901C1C';
                    }
                }

                //element suivant
                next.onclick = function(){
                    if(i < max){
                        i = i + 1;
                        if(article[i].firstChild.nodeName === "IMG"){
                            zoom.setAttribute("src", article[i].firstChild.src);
                            zoom.style.display = 'block';
                            video.style.display = 'none';
                        }
                        if(article[i].firstChild.nodeName === "VIDEO"){
                            video.firstChild.setAttribute("src", article[i].firstChild.src);
                            video.load();
                            zoom.style.display = 'none';
                            video.style.display = 'block';
                        }
                        title.textContent = article[i].childNodes[1].childNodes[0].textContent;
                    }
                    if(i == max){
                        next.style.color ='grey';
                        previous.style.color ='#901C1C';  
                    } else {
                        previous.style.color ='#901C1C';
                        next.style.color ='#901C1C';
                    }
                }
            }
        }
    }

    //fermeture de la modale lightbox
    closeSlide.onclick = function() {
        slideBg.style.display = "none";
    }
    
    document.addEventListener('keydown', (e) => {
        e = e || window.event;
        if (e.keyCode === 37) {
          previous.click();
        } else if (e.keyCode === 39) {
          next.click();
        } else if (e.keyCode === 27) {
            closeSlide.click();
        }
    })
}