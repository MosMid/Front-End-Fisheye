function photographerFactory(data) {
    const { name, portrait, price, tagline, city, country, id } = data;

    const picture = `assets/photographers/${portrait}`;

    //affichage des infos du photographe dans le header
    function getUserCardDOM() {
        const link = document.createElement('a');
        link.setAttribute("href", "./photographer.html?id="+id);
        const article = document.createElement('article');
        article.setAttribute("class", "items");
        article.setAttribute("aria-label", name);
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        const photographerName = document.createElement('h2');
        photographerName.textContent = name;
        const location = document.createElement('h3');
        location.textContent = city +", "+ country;
        const tagLine = document.createElement('p');
        tagLine.setAttribute("class", "tag");
        tagLine.textContent = tagline;
        const tarif = document.createElement('p');
        tarif.setAttribute("class", "prix");
        tarif.textContent = price + " $/jour";
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(photographerName);
        link.appendChild(location);
        link.appendChild(tagLine);
        link.appendChild(tarif);
        /*article.addEventListener("click", function(){
            window.location.href= "./photographer.html?id="+id
        })*/
        return (article);
    }
    return { getUserCardDOM }
}