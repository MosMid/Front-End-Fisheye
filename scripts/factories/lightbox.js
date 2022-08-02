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
                    console.log(video);
                    video.firstChild.setAttribute("src", imgSrc);
                    video.load();
                    zoom.style.display = 'none';
                    video.style.display = 'block';
                }
                title.textContent = wantedArticle.childNodes[1].childNodes[0].textContent;

                // element precedent
                previous.onclick = function(){
                    if(i > 0){
                        i = i - 1;
                        if(article[i].firstChild.nodeName === "IMG"){
                            console.log(article[i].firstChild.nodeName);
                            zoom.setAttribute("src", article[i].firstChild.src);
                            zoom.style.display = 'block';
                            video.style.display = 'none';
                        }
                        if(article[i].firstChild.nodeName === "VIDEO"){
                            console.log(article[i].firstChild.nodeName);
                            video.firstChild.setAttribute("src", article[i].firstChild.src);
                            video.load();
                            zoom.style.display = 'none';
                            video.style.display = 'block';
                        }
                        title.textContent = article[i].childNodes[1].childNodes[0].textContent;
                    }
                }


                //element suivant
                next.onclick = function(){
                    if(i < article.length){
                        i = i + 1;
                        if(article[i].firstChild.nodeName === "IMG"){
                            console.log(article[i].firstChild.nodeName);
                            zoom.setAttribute("src", article[i].firstChild.src);
                            zoom.style.display = 'block';
                            video.style.display = 'none';
                        }
                        if(article[i].firstChild.nodeName === "VIDEO"){
                            console.log(article[i].firstChild.nodeName);
                            video.firstChild.setAttribute("src", article[i].firstChild.src);
                            video.load();
                            zoom.style.display = 'none';
                            video.style.display = 'block';
                        }
                        title.textContent = article[i].childNodes[1].childNodes[0].textContent;
                    }
                }

                break;
            }
        }
    }

    //fermeture de la modale lightbox
    closeSlide.onclick = function() {
        slideBg.style.display = "none";
    }
}