// Script Démo exercice type C (ExotypeC-2-6.html)

// Variables utilisées
var donneesC = [["Le","detC"],["système","nomC"],["solaire","adjC"],["est formé","verbC"],["essentiellement","advC"],["d'","prepC"],["une","detC"],["étoile","nomC"],["brillante","adjC",","],["le","detC"],["soleil","nomC",","],["et","conjCoordC"],["de","prepC"],["huit","detC"],["planètes","nomC"],["tournant","verbC"],["indéfiniment","advC"],["autour de","prepC"],["lui","pronC",["."]],["Il","pronC"],["les","pronC"],["éclaire","verbC"],["et","conjCoordC"],["leur","pronC"],["dispense","verbC"],["sa","detC"],["chaleur","nomC","."]]; // 0: mot; 1: catégorie (classe); (2: ponctuation)
var lenDonneesC = donneesC.length; // taille du tableau donnesC
var ordreC= []; // ordre des id des mots à surligner
var clicsFauxC = 0; // passage au mot suivant au bout de 3 mauvaises réponses
for (let i=0; i<donneesC.length; i++){ // ajout des id dans le tableau
    ordreC.push("C"+i);
};
var numC = 0; // indice du mot en cours à analyser dans le tableau précédent 
var pointsC = 0; // points que l'utilisateur gagnera au cours de l'exercice
var pointAutoriseC = true;
var totalC = lenDonneesC; // nbr total de points possible

// Au chargement de la page
window.onload=function(){
    // Ecrire le chemin de l'audio de la consigne
    $('#consigneC').attr('src',cheminConsignes+cheminConsigneC);
    // Ecrire le texte de l'exercice
    for (let i=0; i<lenDonneesC; i++){ 
        $('#txtExoTypeC').append(' <span id="C'+i+'" class="'+donneesC[i][1]+'">'+donneesC[i][0]+'</span>');
        if (donneesC[i].length==3){
            $('#txtExoTypeC').append(donneesC[i][2]); // ponctuation (hors span)
        };
    };
    shuffleArray(ordreC); // mélanger aléatoirement l'ordre des mots à analyser (fonction dans general.js)
    motEnCoursC();
};

// clic sur un des rectangles (catégories)
$(".categoriesBC").on({
    "click" : function(){
        classMotEnCoursC = $("#"+ordreC[numC]).prop('class'); // class du mot en cours = sa catégorie
        if($(this).prop('id')==classMotEnCoursC){ // BONNE REPONSE (si la cat cliquée correspond à celle du mot en cours)
            repJuste(); // afficher la coche verte (fonction dans general.js)
            if (pointAutoriseC){
                pointsC++;
            };
            encadrerMotC();
            motSuivantC();
        } else { // MAUVAISE REPONSE
            repFausse(); // afficher la croix rouge (fonction dans general.js)
            pointAutoriseC = false;
            clicsFauxC++;
            if (clicsFauxC>=nbrEssaisMax){ // Au bout de 3 clics faux (ou plus si l'utilisateur clique trop vite) passage au mot suivant
                encadrerMotC(); // encadrer le mot de la couleur de sa catégorie
                motSuivantC(); // passer au mot suivant à analyser
            };
        };
    },
});

// Fonction pour encadrer le mot de la couleur de sa catégorie 
function encadrerMotC(){
    clicsFauxC = 0;
    $("#"+ordreC[numC]).css("background-color",coulBg); //arrière-plan du mot en cours (general.js)
    $("#"+ordreC[numC]).css("color", coulPolice); // couleur du mot en cours (general.js)
    switch(classMotEnCoursC){ // couleur de la bordure en fonction de la catégorie du mot
        case 'nomC' :
            coulBordC = couleurNom;
            break;
        case 'detC' :
        case 'detPrepC' :
            coulBordC = couleurDet;
            break;
        case 'adjC' :
            coulBordC = couleurAdj;
            break;
        case 'prepC' :
            coulBordC = couleurPrep;
            break;
        case 'pronC' :
            coulBordC = couleurPron;
            break;
        case 'verbC' :
            coulBordC = couleurVerb;
            break;
        case 'advC' :
            coulBordC = couleurAdv;
            break;
        default:
            coulBordC = couleurConjCoord;
    };
    $("#"+ordreC[numC]).css("border", epaissBordMotBC+" solid "+coulBordC); // bordure du mot de la couleur de sa catégorie
    $("#"+ordreC[numC]).css("box-shadow",ombreBC); // ombre des bordures (general.js)
    if (classMotEnCoursC=="detPrepC"){ // si c'est un det/prep on modifie la couleur de la bordure droite et bas
        $("#"+ordreC[numC]).css("border-right-color",couleurPrep);
        $("#"+ordreC[numC]).css("border-bottom-color",couleurPrep);
    };
};

// Fonction mot à analyser C
function motEnCoursC(){
    $("#"+ordreC[numC]).css("background-color", surlignBC); // surligner le 1er mot à analyser en gris (general.js)
    clignoterReponse(ordreC[numC],coulMotEnCoursBC,coulPolice); // fonction dans general.js
    setTimeout(() => { // Si l'utilisateur clique trop vite les mots précédents ne seront pas de la bonne couleur
        for (let i=0; i<numC; i++){
            $("#"+ordreC[i]).css("color",coulPolice);
        }
    }, vitesseClignotement);
};

// Fonction pour passer au mot suivant
function motSuivantC(){
    pointAutoriseC = true;
    numC++; // on passe au mot suivant
    setTimeout(() => { // timeout pour attendre que la croix/flèche ait disparue avant de mettre en avant le mot suivant
        if (numC==lenDonneesC) { // fin de la démo
            alert("Votre score est de "+Math.round((pointsC/totalC)*100)+"%\n\nVous avez réussi "+pointsC+" exercices sur "+totalC);
        } else {
            motEnCoursC();
        };
    }, timeoutMotSuivant);
};