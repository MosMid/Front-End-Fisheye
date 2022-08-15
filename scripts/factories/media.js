function mediaFactory(data) {
    const { title, image, likes, video, photographerId } = data;
    obj = data;
    let picture = "";
    //Photo height
    let hauteur = (window.screen.width * 0.26);

    //affichage des elements d'une photo/video
    function getUserMediaDOM() {

        const container = document.createElement('div');
        container.setAttribute("class", "container");

        const article = document.createElement( 'article' );
        article.setAttribute("class", "article");
        article.setAttribute("onclick", "myFunction(this)");
        const img = document.createElement( 'img' );
        const clip = document.createElement( 'video' );
        if ("image" in obj){
            picture = `assets/Sample Photos/${photographerId}/${image}`;
            img.setAttribute("src", picture);
            img.setAttribute("alt", title);
            img.style.height = hauteur + "px";
            article.appendChild(img);
        } else {
            picture = `assets/Sample Photos/${photographerId}/${video}`;
            clip.setAttribute("src", picture);
            clip.setAttribute("alt", title);
            clip.style.height = hauteur + "px";
            article.appendChild(clip);
        }    
        const div = document.createElement('div');
        div.setAttribute("class", "text");
        const titre = document.createElement( 'h1' );
        titre.textContent = title;
        const like = document.createElement('p');
        like.setAttribute("class", "tag");
        const coeur = document.createElement('i');
        coeur.setAttribute("class", "fa-solid fa-heart");
        var intLikes = parseInt(likes,10);

        let clicked = false;
        coeur.onclick = function(){
            if (clicked == false){
                like.parentNode.removeChild(like);
                intLikes = intLikes + 1;
                like.textContent = intLikes;
                div.appendChild(like);
                coeur.style.color = '#db8876';
                like.style.color = '#db8876';
                clicked = true;
            }
        }

        like.textContent = intLikes;
        container.appendChild(article);
        article.appendChild(div);
        div.appendChild(titre);
        div.appendChild(like);
        container.appendChild(coeur);
        /*article.addEventListener("click", function(){
            window.location.href= "./photographer.html?id="+id
        })*/
        return container;
    }
    return { getUserMediaDOM }
}