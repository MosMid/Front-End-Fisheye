    import {keyboard} from './keyboard.js';
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
        const items = document.getElementsByClassName('items');

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
        // attendre que les elements de la page se chargent
        while (items.length < photographers.length){};
        keyboard(items);
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    