import {
    Attendre,
    GenererNbPremiers,
    TrierAvecTrieABulles,
} from './fonctionsLentesAsync';

window.addEventListener('load', Initialiser);

function Initialiser() {
    document
        .querySelector('#Attendre button')
        .addEventListener('click', GererAttendre);
    document
        .querySelector('#GenererNbPremiers button')
        .addEventListener('click', GererGenererNbPremiers);
    document
        .querySelector('#TrierAvecTrieABulles button')
        .addEventListener('click', GererTrierAvecTrieABulles);
}

function GererAttendre(event) {
    const temps = document.querySelector('#Attendre input').value;

    Attendre(temps);
    console.log("Attente terminée.");
}

function GererGenererNbPremiers(event) {
    const quantite = document.querySelector('#GenererNbPremiers input').value;

    const premiers = GenererNbPremiers(quantite);
    console.log(premiers);
}

function GererTrierAvecTrieABulles(event) {
    const nombreElements = document.querySelector(
        '#TrierAvecTrieABulles input'
    ).value;

    const liste = [];
    liste.length = nombreElements;
    for (let i = nombreElements; i >= 0; --i) {
        liste[i] = i;
    }

    const listeTrie = TrierAvecTrieABulles(liste);
    console.log(listeTrie);
}
