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

async function GererAttendre(event) {
    const temps = document.querySelector('#Attendre input').value;

    await Attendre(temps);
    console.log("Attente terminée.");
}

async function GererGenererNbPremiers(event) {
    const quantite = document.querySelector('#GenererNbPremiers input').value;

    const premiers = await GenererNbPremiers(quantite);
    console.log(premiers);
}

async function GererTrierAvecTrieABulles(event) {
    const nombreElements = document.querySelector(
        '#TrierAvecTrieABulles input'
    ).value;

    const liste = [];
    liste.length = nombreElements;
    for (let i = nombreElements; i >= 0; --i) {
        liste[i] = i;
    }

    const listeTrie = await TrierAvecTrieABulles(liste);
    console.log(listeTrie);
}
