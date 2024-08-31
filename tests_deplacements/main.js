let compteur = 0;
let total = 10;
let position_y = 0;
let position_x = 0;
let score = 0

while (compteur < 10) {
    let wPrompt = window.prompt('Donne la bonne direction s\'te plait batard !');
    if(wPrompt === "Haut") {
        ++compteur;
        ++position_y;
        alert('Y = ' + position_y + ', X = ' + position_x + ', Score = ' + score + ", c'est bien ma poule ! " + compteur + "/" + total);
    } else if(wPrompt === "Bas") {
        ++compteur;
        --position_y;
        alert('Y = ' + position_y + ', X = ' + position_x + ', Score = ' + score + ", lâche pas enculer ! " + compteur + "/" + total);
    } else if(wPrompt === "Droite") {
        ++compteur;
        ++position_x;
        alert('Y = ' + position_y + ', X = ' + position_x + ', Score = ' + score + ", c'est bien ma poule ! " + compteur + "/" + total);
    } else if(wPrompt === "Gauche") {
        ++compteur;
        --position_x;
        alert('Y = ' + position_y + ', X = ' + position_x + ', Score = ' + score + ", FAIT UN EFFORT BORDEL, C'EST PAS COMPLIQUÉ ! " + compteur + "/" + total);
    } else {
        alert('J\'vais t\'enculer cousin...');
    }
}

let app = document.querySelector('#app');


score = (position_y + position_x) / 2;

app.innerHTML = `
    <p class="score">Score = ${score}</p>
    <p>Position Y = ${position_y}</p>
    <p>Position X = ${position_x}</p>
`