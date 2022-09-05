function mediaFactory(data) {
    const { title, image, likes, video, photographerId } = data;
    let obj = data;
    let picture = "";
    //Photo height
    let hauteur = (window.screen.width * 0.26);

    //affichage des elements d'une photo/video
    function getUserMediaDOM() {
        const container = document.createElement('div');
        container.setAttribute("class", "container");
        const article = document.createElement( 'article' );
        article.setAttribute("class", "article");
        article.setAttribute("aria-label", title);
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

        //Incrementation des likes
        let clicked = false;
        coeur.onclick = function(){
            var totalLikes = parseInt(document.querySelector('#totalLikes').textContent);
            like.parentNode.removeChild(like);
            if (clicked == false){
                intLikes = intLikes + 1;
                coeur.style.color = '#db8876';
                like.style.color = '#db8876';
                totalLikes = totalLikes + 1;
                clicked = true;
            } else {
                intLikes = intLikes - 1;
                coeur.style.color = '#901C1C';
                like.style.color = '#901C1C';
                totalLikes = totalLikes - 1;
                clicked = false;
            }
            like.textContent = intLikes;
            div.appendChild(like);
            document.querySelector('#totalLikes').textContent = totalLikes;
        }

        like.textContent = intLikes;
        container.appendChild(article);
        article.appendChild(div);
        div.appendChild(titre);
        div.appendChild(like);
        container.appendChild(coeur);
        return container;
    }
    return { getUserMediaDOM }
}