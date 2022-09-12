// Script Démo exercice type B (ExotypeB-2-5.html)

// variables utilisées
var donneesB = [["La","detB"],["communication","nomB"],["non","advB"],["verbale","adjB"],["repose","verbB"],["surtout","advB"],["sur","prepB"],["des","detB"],["gestes","nomB"],["variés","adjB",","],["des","detB"],["attitudes","nomB"],["corporelles","adjB"],["et","conjCoordB"],["des","detB"],["expressions","nomB"],["du","detPrepB"],["visage","nomB","."],["Mais","conjCoordB"],["elle","pronB"],["s'","pronB"],["exprime","verbB"],["aussi","advB"],["à travers","prepB"],["les","detB"],["silences","nomB",","],["la","detB"],["distance","nomB"],["entre","prepB"],["les","detB"],["interlocuteurs","nomB",","],["d'","detB"],["autres","adjB"],["éléments","nomB"],["significatifs","adjB"],["du","detPrepB"],["contexte","nomB","."]]; // 0: mot; 1: catégorie (classe); (2: ponctuation)
var lenDonneesB = donneesB.length; // taille du tableau donneesB
var ordreB= []; // ordre des id des mots à surligner
var clicsFauxB = 0; // passage au mot suivant au bout de 3 mauvaises réponses
for (let i=0; i<donneesB.length; i++){ // ajout des id dans le tableau
    ordreB.push("B"+i);
};
var numB = 0; // indice du mot en cours à analyser dans le tableau précédent 
var pointsB = 0; // points que l'utilisateur gagnera au cours de l'exercice
var pointAutoriseB = true;
var totalB = lenDonneesB; // nbr total de points possible

// Au chargement de la page
window.onload=function(){
    // Ecrire le chemin de l'audio de la consigne
    $('#consigneB').attr('src',cheminConsignes+cheminConsigneB);
    // Ecrire le texte de l'exercice
    for (let i=0; i<lenDonneesB; i++){ 
        $('#txtExoTypeB').append(' <span id="B'+i+'" class="'+donneesB[i][1]+'">'+donneesB[i][0]+'</span>');
        if (donneesB[i].length==3){
            $('#txtExoTypeB').append(donneesB[i][2]); // ponctuation (hors span)
        };
    };
    shuffleArray(ordreB); // mélanger aléatoirement l'ordre des mots à analyser (fonction dans general.js)
    motEnCoursB();
};

// clic sur un des rectangles (catégories)
$(".categoriesBC").on({
    "click" : function(){
        classMotEnCoursB = $("#"+ordreB[numB]).prop('class'); // class du mot en cours = sa catégorie
        if($(this).prop('id')==classMotEnCoursB){ // BONNE REPONSE (si la cat cliquée correspond à celle du mot en cours)
            repJuste(); // afficher la coche verte (fonction dans general.js)
            if (pointAutoriseB){
                pointsB++;
            };
            encadrerMotB(); // encadrer le mot de la couleur de sa catégorie
            motSuivantB(); // passer au mot suivant à analyser
        } else { // MAUVAISE REPONSE
            repFausse(); // afficher la croix rouge (fonction dans general.js)
            pointAutoriseB = false;
            clicsFauxB++;
            if (clicsFauxB>=nbrEssaisMax){ // Au bout de 3 clics faux (ou plus si l'utilisateur clique trop vite) passage au mot suivant
                encadrerMotB(); // encadrer le mot de la couleur de sa catégorie
                motSuivantB(); // passer au mot suivant à analyser
            };
        };
    },
});

// Fonction pour encadrer le mot de la couleur de sa catégorie 
function encadrerMotB(){
    clicsFauxB = 0;
    $("#"+ordreB[numB]).css("background-color", coulBg); //arrière-plan du mot en cours (general.js)
    $("#"+ordreB[numB]).css("color", coulPolice); // couleur du mot en cours (general.js)
    switch(classMotEnCoursB){ // couleur de la bordure en fonction de la catégorie du mot
        case 'nomB' :
            coulBordB = couleurNom;
            break;
        case 'detB' :
        case 'detPrepB' :
            coulBordB = couleurDet;
            break;
        case 'adjB' :
            coulBordB = couleurAdj;
            break;
        case 'prepB' :
            coulBordB = couleurPrep;
            break;
        case 'pronB' :
            coulBordB = couleurPron;
            break;
        case 'verbB' :
            coulBordB = couleurVerb;
            break;
        case 'advB' :
            coulBordB = couleurAdv;
            break;
        default:
            coulBordB = couleurConjCoord;
    };
    $("#"+ordreB[numB]).css("border", epaissBordMotBC+" solid "+coulBordB); // bordure du mot de la couleur de sa catégorie (general.js)
    $("#"+ordreB[numB]).css("box-shadow",ombreBC); // ombre des bordures (general.js)
    if (classMotEnCoursB=="detPrepB"){ // si c'est un det/prep on modifie la couleur de la bordure droite et bas 
        $("#"+ordreB[numB]).css("border-right-color",couleurPrep);
        $("#"+ordreB[numB]).css("border-bottom-color",couleurPrep);
    };
};

// Fonction mot à analyser B
function motEnCoursB(){
    $("#"+ordreB[numB]).css("background-color", surlignBC); // surligner le 1er mot à analyser en gris (general.js)
    clignoterReponse(ordreB[numB],coulMotEnCoursBC,coulPolice); // fonction dans general.js
    setTimeout(() => { // Si l'utilisateur clique trop vite les mots précédents ne seront pas de la bonne couleur
        for (let i=0; i<numB; i++){
            $("#"+ordreB[i]).css("color",coulPolice);
        }
    }, vitesseClignotement);
};

// Fonction pour passer au mot suivant 
function motSuivantB(){
    pointAutoriseB = true;
    numB++; // on passe au mot suivant
    setTimeout(() => { // timeout pour attendre que la croix/flèche ait disparue avant de mettre en avant le mot suivant
        if (numB==lenDonneesB) { // fin de la démo
            alert("Votre score est de "+Math.round((pointsB/totalB)*100)+"%\n\nVous avez réussi "+pointsB+" exercices sur "+totalB);
        } else {
            motEnCoursB();
        };
    }, timeoutMotSuivant);
};