// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()


//Stocker l'heure , minute , seconde  dans des varaiables



// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


// Déplacer les aiguilles 

setInterval(demarrerLaMontre, 1000);

function demarrerLaMontre() {
    const now = new Date(); //creation de la constante "now" nous permettant de stocker la date au format (Thu Mar 04 2021 10:48:26 GMT+0100 (heure normale d’Europe centrale)) 
    
    const seconds = now.getSeconds(); // creation de la constante "seconds" récupérant les secondes de notre constante "now"
    const minutes = now.getMinutes();
    const heures = now.getHours();
    
    let time = seconds + (minutes*60) + (heures*3600); // conversion des minutes et des heures en secondes
    
    const secondDeg = (time*6); // creation de la constante "secondDeg" permettant de prendre en compte le degré d'inclinaisaon de l'horloge
    AIGUILLESEC.style.transform = `rotate(${secondDeg}deg)`; // mise en place de la rotation de la form de l'aiguille seconde
    
    const minuteDeg = (time*6)/60;//
    AIGUILLEMIN.style.transform = `rotate(${minuteDeg}deg)`;
    
    const heureDeg = (time*30)/3600;//
    AIGUILLEHR.style.transform = `rotate(${heureDeg}deg)`;
    

    //AIGUILLESEC.setAttribute("transform","rotate(" + secondDeg + ")");


}

// Exercuter la fonction chaque second
//setInterval(demarrerLaMontre, 1000);

/* //Extraire l'heure actuel à l'aide de l'objet Date()

//Stocker l'heure , minute , seconde  dans des varaiables

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
*/

/* setInterval(demarrerLaMontre, 1000);

// Déplacer les aiguilles 
function demarrerLaMontre() {
    // actualisation des variables
    let date = new Date();
    let secondes = date.getSeconds();
    let minutes = date.getMinutes();
    let heures = date.getHours();
    let degSecondes = 6 * secondes;
    let degMinutes = 6 * minutes + 6 * (secondes/60);
    let degHeures = 30 * heures + 30 * (minutes/60) + 30 * (secondes/3600);
    
    //affichage
    AIGUILLESEC.setAttribute("transform","rotate(" + degSecondes + ")");
    AIGUILLEMIN.setAttribute("transform","rotate(" + degMinutes + ")");
    AIGUILLEHR.setAttribute("transform","rotate(" + degHeures + ")");
} */
// Exercuter la fonction chaque second
//var interval = setInterval(demarrerLaMontre, 1000);
//setInterval(demarrerLaMontre, 1000);