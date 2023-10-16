export function Attendre(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function GenererNbPremiers(quantite) {
    function EstPremier(n) {
        for (let c = 2; c <= Math.sqrt(n); ++c) {
            if (n % c === 0) {
                return false;
            }
        }
        return true;
    }

    const nbPremiers = [];
    const maximum = 1000000;
    const tempsMax = 100;

    let tempsPause = Date.now() + tempsMax;
    while (nbPremiers.length < quantite) {
        const candidat = Math.floor(Math.random() * (maximum + 1));
        if (EstPremier(candidat)) {
            nbPremiers.push(candidat);
            if (Date.now() > tempsPause) {
                await Attendre(0);
                tempsPause = Date.now() + tempsMax
            }
        }
    }

    return nbPremiers;
}

export async function TrierAvecTrieABulles(liste) {
    const tempsMax = 100;

    let tempsPause = Date.now() + tempsMax;
    
    for (var i = 0; i < liste.length; i++) {
        for (var j = 0; j < liste.length - i - 1; j++) {
            if (liste[j] > liste[j + 1]) {
                var temp = liste[j];
                liste[j] = liste[j + 1];
                liste[j + 1] = temp;
            }
        }
        if (Date.now() > tempsPause) {
            await Attendre(0);
            tempsPause = Date.now() + tempsMax
        }
    }

    return liste;
}
