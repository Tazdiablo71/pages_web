var valeur = 0;
console.log("ok");
let pet = new Audio('FART.wav');
let son1 = new Audio('bip1.wav');
let son2 = new Audio('bip2.wav');


plus = document.getElementById('bouton1');
moins = document.getElementById('bouton2');
raz = document.getElementById('bouton3');
comptage = document.getElementById('bouton4');
resultat = document.getElementById('resultat');

function ajouter() {
    valeur = valeur + 1;
    son1.play();
    resultat.innerHTML = valeur;
}

function retrancher() {
    valeur = valeur - 1;
    son2.play();
    resultat.innerHTML = valeur;
}

function ras() {
    valeur = 0;
    pet.play();
    resultat.innerHTML = valeur;
}

function compte() {
    for (let i = 0; i < valeur; i++)
    {
       pet.play();
       resultat.innerHTML = i;
    }
}

raz.addEventListener('click', function(){ras()});
moins.addEventListener('click', function(){retrancher()});
plus.addEventListener('click', function(){ajouter()});
comptage.addEventListener('click', function(){compte()});
