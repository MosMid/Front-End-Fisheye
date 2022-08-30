import {keyboard} from './keyboard.js';
async function getMedia() {
    //recuperer l'id du photographe à partir de l'url de la page
    const params = (new URL(document.location)).searchParams;
    //convertir l'id en nombre entier
    const id = parseInt(params.get('id'),10);
    //recuperer le fichier json
    const response = await fetch('data/photographers.json', {method: 'GET'});
    const donnees = await response.json();
    //filtrer que les objets du photographe concerné
    const media = donnees.media.filter(media => media.photographerId == id);
    const photographer = donnees.photographers.filter(photographers => photographers.id == id);
    return {media, photographer};
};

// header du photographe
async function displayHeader(photographer) {
    const { name, price, tagline, city, country } = photographer[0];
    const header = document.querySelector(".photograph-header");
    const photo = `assets/photographers/${photographer[0].portrait}`;
    const avatar = document.createElement('img');
    avatar.setAttribute("src", photo);
    avatar.setAttribute("alt", name);
    const photographerName = document.createElement( 'h1' );
    photographerName.textContent = name;
    photographerName.setAttribute("id", "contactName");
    const photographerInfo = document.createElement( 'h2' );
    photographerInfo.textContent = city +", "+ country;
    const photographerTag = document.createElement('p');
    photographerTag.setAttribute("class", "tag");
    photographerTag.textContent = tagline;
    header.appendChild(photographerName);
    header.appendChild(photographerInfo);
    header.appendChild(photographerTag);
    header.appendChild(avatar);

    // tarif du photographe
    const prix = document.querySelector(".price");
    const photographerRate = document.createElement('p');
    photographerRate.textContent = price + "€/jour";
    prix.appendChild(photographerRate);
}

// le tri des elements du photographe
async function sortMedia(media) {
    const list = document.querySelector('.dropdown-content');
    const order = document.getElementById("order");
    const msec = document.getElementById("msec");
        list.addEventListener("click", function sort(e){ 
            let val = e.target.id;
            order.textContent = e.target.textContent;
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
        });
}

// affichage des elements du photographe
async function displayData(media) {
    const mediaSection = document.querySelector(".media_section");
    mediaSection.replaceChildren();
    var i = 0;
    var j = 0;
    media.forEach((medias) => {
        i = i + media[j].likes;
        j = j + 1;
        const mediaModel = mediaFactory(medias);
        const userMediaDOM = mediaModel.getUserMediaDOM();
        mediaSection.appendChild(userMediaDOM);
    });
    // total des likes du photographe
    let totalLikes = document.querySelector('#totalLikes');
    totalLikes.textContent = i;
    const items = document.getElementsByClassName('article');
    // attendre que les elements de la page se chargent
    while (items.length < media.length){};
    keyboard(items); 
};

async function init() {
    // Récupère les datas des photographes
    const {media} = await getMedia();
    displayData(media);
    const {photographer} = await getMedia();
    displayHeader(photographer);
    lightbox(media);
    sortMedia(media);
};

init();