function cadenas3Chiffres(combinaison) {
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            for (let k = 0; k <= 9; k++) {
                let code = `${i}${j}${k}`;
                if (code === combinaison) {
                    console.log(`Combinaison trouvée : ${code}`);
                    return; // Arrêter les boucles
                }
            }
        }
    }
    console.log("Combinaison non trouvée");
}

// Exemple d'utilisation
const combinaison = "986"; // Combinaison à trouver

cadenas3Chiffres(combinaison);
