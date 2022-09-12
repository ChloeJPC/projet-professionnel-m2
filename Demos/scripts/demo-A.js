// Script Démo exercice type A (ExotypeA-2-1.html)

// Variables utilisées
var donneesA = [ // proche de la sortie brute de la BD
    ["Les;enfants;jouent;et;crient;.","s01d01.mp3",2,1,7,10,7,0],
    ["Le;chercheur;et;ses;doctorants;travaillent;.","s01d02.mp3",2,1,10,2,1,7,0],
    ["Le;garagiste;ou;son;apprenti;testera;la;nouvelle;voiture;.","s01d03.mp3",2,1,10,2,1,7,2,3,1,0],
    ["Les;travailleurs;voudraient;un;salaire;décent;ou;une;prime;conséquente;.","s01d04.mp3",2,1,7,2,1,3,10,2,1,3,0],
    ["Le;taxi;a;déposé;ses;clients;et;leurs;bagages;.","s01d05.mp3",2,1,7,7,2,1,10,2,1,0],
    ["Mon;mari;verra;le;médecin;ou;l';infirmière;.","s01d06.mp3",2,1,7,2,1,10,2,1,0],
    ["Le;maire;et;ses;adjoints;dirigeront;la;cérémonie;.","s01d07.mp3",2,1,10,2,1,7,2,1,0],
    ["Les;jardiniers;planteront;des;platanes;ou;des;érables;.","s01d08.mp3",2,1,7,2,1,10,2,1,0]
];
var lenDonneesA = donneesA.length;
var indEnCoursA = 0;
var clicsCatAttendus = [];
var lenClics; // nb de clics attendus, permet de savoir quand il faudra cliquer sur rect nom ou rect prep
var clicsCatEffectues = [];
var cptClics = 0;
var clicsFauxA = 0;
var pointsA = 0; // points que l'utilisateur gagnera au cours de l'exercice
var pointAutoriseA = true;
var totalA = 0; // nbr de points total possible
for (let i=0; i<lenDonneesA; i++){ // nettoyer donneesA
    buffer = [cheminDonneesA+donneesA[i][1]]; // nom du fichier audio
    donneeA_phrase = donneesA[i][0].split(";")
    for (let j=0; j<donneeA_phrase.length; j++){
        buffer.push([donneeA_phrase[j],String(donneesA[i][2+j])]);
    };
    donneesA[i] = buffer;
}; // 0: chemin son audio, 1: ["mot", "n° de la catégorie associée"], 1: ["mot", "n° de la catégorie associée"], etc.

// Au chargement de la page
window.onload=function(){
    // Ecrire le chemin de l'audio de la consigne
    $('#consigneA').attr('src',cheminConsignes+cheminConsigneA);
    // Mélanger aléatoirement les données
    shuffleArray(donneesA);
};

// Fonction phrase en cours 
function phraseEnCoursA(){
    $("#audioDonneesA").attr('src',donneesA[indEnCoursA][0]);
    $("#audioDonneesA")[0].play();
    clignoterReecouter(); // fonction dans general.js
    clicsCatAttendus = [];
    for (let i=1; i<donneesA[indEnCoursA].length-1; i++){ // ordre des clics sur cat attendu
        clicsCatAttendus.push(donneesA[indEnCoursA][i][1]);
    };
    lenClics = clicsCatAttendus.length; // nombre de clics sur catégories attendus
    totalA = totalA + lenClics;
    clicsCatEffectues=[];
};

// Ecouteur Commencer (permet d'obtenir un clic de l'utilisateur sur la page afin que la lecture automatique des audios soit autorisée)
$("#reponseA").one({
    "click" : function(){
        $('#reponseA').hide();  
        phraseEnCoursA(); 
    }
});

// Ecouter Clic sur rectangles des catégories
$(".rectCat").on({
    "click" : function(){
        if (cptClics<lenClics){ 
            if ($(this).data('cat')==clicsCatAttendus[cptClics]){ // bonne reponse
                repJuste(); // afficher la coche verte (fonction dans general.js)
                if (pointAutoriseA){
                    pointsA++;
                };
                if($(this).attr('id')=="rectNom" | $(this).attr('id')=="rectAdj" | $(this).attr('id')=="rectVerb" ){
                    baliseDebut = "<p>";
                    baliseFin = "</p>";
                } else {
                    baliseDebut = "<span>";
                    baliseFin = "</span>";
                };
                $(this).append(baliseDebut+donneesA[indEnCoursA][cptClics+1][0]+baliseFin); // écrire le mot dans le rectangle de sa catégorie
                motSuivantA();
                
            } else { // mauvaise réponse
                repFausse(); // afficher la croix rouge (fonction dans general.js)
                pointAutoriseA = false;
                clicsFauxA++;
                setTimeout(() => {
                    if(clicsFauxA>=nbrEssaisMax){ // Au bout de 3 clics faux (ou plus si l'utilisateur clique trop vite) passage au mot suivant
                        idRectJuste = document.querySelector("[data-cat='"+clicsCatAttendus[cptClics]+"']").id;
                        if($("#"+idRectJuste).attr('id')=="rectNom" | $("#"+idRectJuste).attr('id')=="rectAdj" | $("#"+idRectJuste).attr('id')=="rectVerb" ){
                            baliseDebut = "<p id='clignRep'>";
                            baliseFin = "</p>";
                        } else {
                            baliseDebut = "<span id='clignRep'>";
                            baliseFin = "</span>";
                        };
                        $("#"+idRectJuste).append(baliseDebut+donneesA[indEnCoursA][cptClics+1][0]+baliseFin); // écrire le mot dans le rectangle de sa catégorie
                        clignoterReponse('clignRep',coulPolice, coulRepJuste);
                        setTimeout(() => {
                            $('#clignRep').removeAttr('id');
                        }, vitesseClignotement*6);
                        motSuivantA();
                    }
                }, vitesseFadeOut);
            }
        }
    }
});

function motSuivantA(){
    pointAutoriseA = true;
    clicsFauxA = 0; // réinitialisation du nombre de clics faux
    cptClics++; // passage au mot suivant de la même série de données
    if (cptClics==lenClics){
        setTimeout(() => {
                $('.rectCat').html('');
                cptClics = 0;
                indEnCoursA++;
                if (indEnCoursA==lenDonneesA) {
                    alert("Votre score est de "+Math.round((pointsA/totalA)*100)+"%\n\nVous avez réussi "+pointsA+" exercices sur "+totalA);
                } else {
                    phraseEnCoursA();
                };
        }, vitesseFadeOut*2); 
    };
};