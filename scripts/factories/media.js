function mediaFactory(data) {
    const { title, image, likes, video, photographerId } = data;
    obj = data;
    let picture = "";
    //Photo height
    let hauteur = (window.screen.width * 0.26);

    //affichage des elements d'une photo/video
    function getUserMediaDOM() {
        const article = document.createElement( 'article' );
        article.setAttribute("class", "article");
        article.setAttribute("onclick", "myFunction(this)");
        const img = document.createElement( 'img' );
        const clip = document.createElement( 'video' );
        if ("image" in obj){
            picture = `assets/Sample Photos/${photographerId}/${image}`;
            img.setAttribute("src", picture);
            img.style.height = hauteur + "px";
            article.appendChild(img);
        } else {
            picture = `assets/Sample Photos/${photographerId}/${video}`;
            clip.setAttribute("src", picture);
            clip.style.height = hauteur + "px";
            article.appendChild(clip);
        }    
        const div = document.createElement('div');
        div.setAttribute("class", "text");
        const h1 = document.createElement( 'h1' );
        h1.textContent = title;
        const p1 = document.createElement('p');
        p1.setAttribute("class", "tag");
        const i = document.createElement('i');
        i.setAttribute("class", "fa-solid fa-heart");
        p1.textContent = likes;
        article.appendChild(div);
        div.appendChild(h1);
        div.appendChild(p1);
        div.appendChild(i);
        /*article.addEventListener("click", function(){
            window.location.href= "./photographer.html?id="+id
        })*/
        return article;
    }
    return { getUserMediaDOM }
}