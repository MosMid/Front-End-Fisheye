function photographerFactory(data) {
    const { name, portrait, price, tagline, city, country, id } = data;

    const picture = `assets/photographers/${portrait}`;

    //affichage des infos du photographe dans le header
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        const photographerName = document.createElement( 'h2' );
        photographerName.textContent = name;
        const location = document.createElement( 'h3' );
        location.textContent = city +", "+ country;
        const tagLine = document.createElement('p');
        tagLine.setAttribute("class", "tag");
        tagLine.textContent = tagline;
        const tarif = document.createElement('p');
        tarif.setAttribute("class", "prix");
        tarif.textContent = price + " $/jour";
        article.appendChild(img);
        article.appendChild(photographerName);
        article.appendChild(location);
        article.appendChild(tagLine);
        article.appendChild(tarif);
        article.addEventListener("click", function(){
            window.location.href= "./photographer.html?id="+id
        })
        return (article);
    }
    return { getUserCardDOM }
}