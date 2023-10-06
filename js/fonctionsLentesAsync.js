export function Attendre(millisecondes) {
    const debut = Date.now();
    while (Date.now() - debut < millisecondes) {
        // On attend pendant un certain nombre de millisecondes (simule une opération longue)
    }
}

export function GenererNbPremiers(quantite) {
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

    while (nbPremiers.length < quantite) {
        const candidat = Math.floor(Math.random() * (maximum + 1));
        if (EstPremier(candidat)) {
            nbPremiers.push(candidat);
        }
    }

    return nbPremiers;
}

export function TrierAvecTrieABulles(liste) {
    for (var i = 0; i < liste.length; i++) {
        for (var j = 0; j < liste.length - i - 1; j++) {
            if (liste[j] > liste[j + 1]) {
                var temp = liste[j];
                liste[j] = liste[j + 1];
                liste[j + 1] = temp;
            }
        }
    }

    return liste;
}
