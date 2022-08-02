async function getMedia() {
    //recuperer l'id du photographe à partir de l'url de la page
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');
    //convertir l'id en nombre entier
    var intId = parseInt(id, 10);
    //recuperer le fichier json
    let response = await fetch('https://mosmid.github.io/Front-End-Fisheye/data/photographers.json', {method: 'GET'});
    let donnees = await response.json();
    //filtrer que les objets du photographe concerné
    let media = donnees.media.filter(media => media.photographerId == intId);
    let photographer = donnees.photographers.filter(photographers => photographers.id == intId);
    lightbox(media);
    return {media, photographer};
};

// header du photographe
async function displayHeader(photographer) {
    const { name, price, tagline, city, country } = photographer[0];
    let header = document.querySelector(".photograph-header");
    const photo = `assets/photographers/${photographer[0].portrait}`;
    let profile = document.createElement('img');
    profile.setAttribute("src", photo);
    const h1 = document.createElement( 'h1' );
    h1.textContent = name;
    h1.setAttribute("id", "contactName");
    const h2 = document.createElement( 'h2' );
    h2.textContent = city +", "+ country;
    const p1 = document.createElement('p');
    p1.setAttribute("class", "tag");
    p1.textContent = tagline;
    header.appendChild(h1);
    header.appendChild(h2);
    header.appendChild(p1);
    header.appendChild(profile);

    // tarif du photographe
    let prix = document.querySelector(".price");
    let p2 = document.createElement('p');
    p2.textContent = price + "€/jour";
    prix.appendChild(p2);
}

// le tri des elements du photographe
async function sortMedia(media) {
    let tableau = Array.from( document.getElementsByClassName('tri'));
    let order = document.getElementById("order");
    let msec = document.getElementById("msec");
    tableau.forEach(box => {
        box.onclick = async function sort() {
            let val = box.id;
            order.textContent = box.textContent;
            if (val == "likes") {
                media.sort((a, b) => {
                    return b.likes - a.likes;
                });
            }
            if (val == "date") {
                media.sort((a, b) => {
                    let da = new Date(a.date),
                        db = new Date(b.date);
                    return db - da;
                });
            }
            if (val == "titre") {
                media.sort((a, b) => {
                    let fa = a.title.toLowerCase(),
                        fb = b.title.toLowerCase();
                
                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                });
            }
            msec.innerHTML='';
            displayData(media);
        } 
        
    });
}

// affichage des elements du photographe
async function displayData(media) {
    const mediaSection = document.querySelector(".media_section");
    // total des likes du photographe
    var i = 0;
    var j = 0;
    media.forEach((medias) => {
        i = i + media[j].likes;
        j = j + 1;
        const mediaModel = mediaFactory(medias);
        const userMediaDOM = mediaModel.getUserMediaDOM();
        mediaSection.appendChild(userMediaDOM);
    });
    let totalLikes = document.querySelector('#totalLikes');
    totalLikes.textContent = i;
};

async function init() {
    // Récupère les datas des photographes
    const { photographer } = await getMedia();
    displayHeader(photographer);
    const { media } = await getMedia();
    sortMedia(media);
    displayData(media);
};

init();