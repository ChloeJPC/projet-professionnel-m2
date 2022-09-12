// Script Démo exercice type G (ExotypeG-4-1.html)

// Variables utilisées
var donneesG=[ // proche de la sortie brute de la BD
    ["Certains;mécanismes;bien;connus;déterminent;/les;prix/","s01d01.mp3","les",2,"prix",1],
    ["Son;travail;manque;/de;soin/","s01d02.mp3","de",4,"soin",1],
    ["On;assiste;/à;une;débâcle/","s01d03.mp3","à",4,"une",2,"débâcle",1],
    ["Les;experts;en;conseil;courtisent;/cette;grande;entreprise/","s01d04.mp3","cette",2,"grande",3,"entreprise",1],
    ["Cet;établissement;soigne;/sa;communication/","s01d05.mp3","sa",2,"communication",1],
    ["Cette;petite;société;résiste;/à;la;concurrence/","s01d06.mp3","à",4,"la",2,"concurrence",1],
    ["Il;pense;toujours;/à;sa;carrière/","s01d07.mp3","à",4,"sa",2,"carrière",1],
    ["Son;investissement;récent;a;porté;/ses;fruits/","s01d08.mp3","ses",2,"fruits",1],
    ["La;directrice;présentera;demain;/les;résultats/","s01d09.mp3","les",2,"résultats",1],
    ["Mon;collègue;commercial;a;manqué;/sa;négociation/","s01d10.mp3","sa",2,"négociation",1]
];
var lenDonneesG = donneesG.length;
var indEnCoursG = 0;
var clicsCatAttendus = [];
var lenClics;
var clicsCatEffectues = [];
var cptClics = 0;
var clicsFauxG = 0;
var motsG = "";
var pointsG = 0; // points que l'utilisateur gagnera au cours de l'exercice
var pointAutoriseG = true;
var totalG = 0; //nb de point total : chaque mot à analyser + clic sur rect nom ou prep
for (let i=0; i<lenDonneesG; i++){ // nettoyer donneesG
    buffer = [cheminDonneesG+donneesG[i][1]];
    totalG++; // clic sur rect nom ou prep
    for (let j=2; j<donneesG[i].length; j+=2){
        buffer.push([donneesG[i][j],String(donneesG[i][j+1])]);
        totalG++; // chaque mot à analyser
    };
    donneesG[i] = buffer;
};// 0: chemin son audio, 1: ["mot", "n° de la catégorie associée"], 2: ["mot", "n° de la catégorie associée"], etc.

// Au chargement de la page
window.onload=function(){
    // Ecrire le chemin de l'audio de la consigne
    $('#consigneG').attr('src',cheminConsignes+cheminConsigneG);
    // Mélanger aléatoirement les données
    shuffleArray(donneesG);
};

// Fonction phrase en cours 
function phraseEnCoursG(){
    $("#audioDonneesG").attr('src',donneesG[indEnCoursG][0]);
    $("#audioDonneesG")[0].play();
    clignoterReecouter(); // fonction dans general.js
    clicsCatAttendus = [];
    for (let i=1; i<donneesG[indEnCoursG].length; i++){ // ordre des clics sur cat attendu
        clicsCatAttendus.push(donneesG[indEnCoursG][i][1]);
    };
    lenClics = clicsCatAttendus.length; // nombre de clics sur catégories attendus
    clicsCatEffectues=[];
};

// Ecouteur Commencer (permet d'obtenir un clic de l'utilisateur sur la page afin que la lecture automatique des audios soit autorisée)
$("#reponseG").one({
    "click" : function(){
        $('#reponseG').hide();  
        phraseEnCoursG(); 
    }
});

// Ecouter Clic sur rectangles des catégories
$(".rectCat").on({
    "click" : function(){
        if (cptClics<lenClics){ 
            if ($(this).data('cat')==clicsCatAttendus[cptClics]){ // bonne reponse
                repJuste(); // afficher la coche verte (fonction dans general.js)
                if (pointAutoriseG){
                    pointsG++;
                };
                $(this).html('<span>'+donneesG[indEnCoursG][cptClics+1][0]+'</span>'); // écrire le mot dans le rectangle de sa catégorie
                motsG = motsG+" "+donneesG[indEnCoursG][cptClics+1][0]; // mots à écrire à la fin dans le groupe nom ou prep
                cptClics++; // passage au mot suivant de la même série de données
                pointAutoriseG = true;
                clicsFauxG=0;
            } else { // mauvaise réponse
                repFausse(); // afficher la croix rouge (fonction dans general.js)
                pointAutoriseG = false;
                clicsFauxG++;
                setTimeout(() => {
                    if(clicsFauxG>=nbrEssaisMax){
                        idRectJuste = document.querySelector("[data-cat='"+clicsCatAttendus[cptClics]+"']").id;
                        $("#"+idRectJuste).html("<span id='clignRep'>"+donneesG[indEnCoursG][cptClics+1][0]+"</span>"); // écrire le mot dans le rectangle de sa catégorie
                        clignoterReponse('clignRep',coulPolice, coulRepJuste);
                        setTimeout(() => {
                            $('#clignRep').removeAttr('id');
                        }, vitesseClignotement*6);
                        motsG = motsG+" "+donneesG[indEnCoursG][cptClics+1][0]; // mots à écrire à la fin dans le groupe nom ou prep
                        cptClics++; // passage au mot suivant de la même série de données
                        pointAutoriseG = true;
                        clicsFauxG=0;
                    }
                }, vitesseFadeOut);
            }
        } else { // il faut cliquer sur groupe nom ou prep
            $('.rectGroupeG').addClass('highlightCat');
            setTimeout(() => {
                $('.rectGroupeG').removeClass('highlightCat');
            }, vitesseHighlight);
        }
    }
});

// Ecouteur Groupe nominal ou prépositionnel
$('.rectGroupeG').on({
    "click" : function(){
        if (cptClics==lenClics){ // clics sur les catégories finis
            if (donneesG[indEnCoursG][1][1]=="4"){ // si le 1er mot est une prep
                idRepJuste = "rectGroupePrepG";
                if ($(this).attr('id')==idRepJuste){ // si clic sur groupe prep, réponse juste
                    repJuste();
                    pointsG++;
                } else { // clic sur groupe nom, réponse fausse
                    repFausse();
                }
            } else { // le 1er mot n'est pas une prep
                idRepJuste = "rectGroupeNomG";
                if ($(this).attr('id')==idRepJuste){ // si clic sur groupe nom, réponse juste
                    repJuste();
                    pointsG++;
                } else { // clic sur groupe prep, réponse fausse
                    repFausse();
                } 
            };
            // afficher la réponse 
            $('#'+idRepJuste).html('<p>'+motsG+'</p>')
            // phrase suivante
            setTimeout(() => {
                $('.rectGroupeG, .rectCat').html('');
                motsG = "";
                indEnCoursG++;
                cptClics = 0;
                if (indEnCoursG==lenDonneesG) {
                    alert("Votre score est de "+Math.round((pointsG/totalG)*100)+"%\n\nVous avez réussi "+pointsG+" exercices sur "+totalG);
                } else {
                    phraseEnCoursG();
                };
            }, vitesseFadeOut*4);  
        } else { // il faut cliquer sur les catégories
            $('.rectCat').addClass('highlightCat');
            setTimeout(() => {
                $('.rectCat').removeClass('highlightCat');
            }, vitesseHighlight);
        }
    }
});
