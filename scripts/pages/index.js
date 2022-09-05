//import {keyboard} from './keyboard.js';
async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    let response = await fetch('data/photographers.json', {method: 'GET'});
    let donnees = await response.json();
    let photographers = donnees.photographers;
    return ({photographers});
}
    
//affichage des photographes sur la page d'acceuil
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    //let i = 0;
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
        /*var items = document.querySelectorAll(".items");
        items[i].setAttribute("tabindex", i+1);
        i = i + 1;*/
    });
    //keyboard(items);
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
}
    
init();    