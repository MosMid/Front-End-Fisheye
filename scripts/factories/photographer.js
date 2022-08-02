function photographerFactory(data) {
    const { name, portrait, price, tagline, city, country, id } = data;

    const picture = `assets/photographers/${portrait}`;

    //affichage des infos du photographe dans le header
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = city +", "+ country;
        const p1 = document.createElement('p');
        p1.setAttribute("class", "tag");
        p1.textContent = tagline;
        const p2 = document.createElement('p');
        p2.setAttribute("class", "prix");
        p2.textContent = price + " $/jour";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.addEventListener("click", function(){
            window.location.href= "./photographer.html?id="+id
        })
        return (article);
    }
    return { getUserCardDOM }
}