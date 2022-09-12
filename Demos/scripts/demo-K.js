// Script Démo exercice type K (ExotypeK-5-1-P1.html)

// Variables utilisées
donneesK = [ // proche de la sortie brute de la BD
    ["Je ne /gagne/ jamais à ce jeu-là.",1,1,"s01p2d01.mp3"],
    ["Je ne /gagnerai/ sans doute pas.",10,1,"s01p2d02.mp3"],
    ["Je /gagnais/ bien ma vie.",0,1,"s01p2d03.mp3"],
    ["Tu /conseilles/ bien les clients.",1,2,"s01p2d04.mp3"],
    ["Quel modèle lui /conseilleras/-tu ?",10,2,"s01p2d05.mp3"],
    ["Tu /conseillais/ toujours la prudence.",0,2,"s01p2d06.mp3"],
    ["Sa réussite /témoigne/ de son audace.",1,3,"s01p2d07.mp3"],
    ["Le suspect /témoignait/ devant les juges.",0,3,"s01p2d08.mp3"],
    ["Elle /témoignera/ de ton application.",10,3,"s01p2d09.mp3"],
    ["Nous /collons/ des affiches matin et soir.",1,4,"s01p2d10.mp3"],
    ["Nous /collions/ des images dans le temps.",0,4,"s01p2d11.mp3"],
    ["Nous /collerons/ les affiches dès leur arrivée.",10,4,"s01p2d12.mp3"],
    ["Vous /nagez/ très bien.",1,5,"s01p2d13.mp3"],
    ["Vous /nagerez/ la brasse pendant trente minutes.",10,5,"s01p2d14.mp3"],
    ["Vous /nagiez/ tous les jours.",0,5,"s01p2d15.mp3"],
    ["Les agents de sécurité /fouillent/ systématiquement les sacs des visiteurs.",1,6,"s01p2d16.mp3"],
    ["Les gendarmes /fouilleront/ la forêt.",10,6,"s01p2d17.mp3"],
    ["Les curieux /fouillaient/ partout.",0,6,"s01p2d18.mp3"]
]
var lenDonneesK = donneesK.length;
var indEnCoursK = 0;
var verbeAttendu = "";
var clicsFauxK = 0;
var inputFauxK = 0;
var permValiderK = true;
var clicAutoriseK = true;
var pointsK = 0; // points que l'utilisateur gagnera au cours de l'exercice
var pointAutoriseK = true;
var totalK = lenDonneesK*2; // nbr total de points possibles
for (let i=0; i<lenDonneesK; i++){ // nettoyer donneesK
    donneesK[i][1] = String(donneesK[i][1]); // info colonne de la bonne terminaison en str pour être au même format que data-col dans la pge html
    donneesK[i][2] = String(donneesK[i][2]); // info ligne de la bonne terminaison en str pour être au même format que data-ligne dans la pge html
    donneesK[i][3] = cheminDonneesK+donneesK[i][3]; // chemin complet de l'audio
};

// Au chargement de la page
window.onload=function(){
    // Ecrire le chemin de l'audio de la consigne
    $('#consigneK').attr('src',cheminConsignes+cheminConsigneK);
    // Mélanger aléatoirement les données
    shuffleArray(donneesK);
    // Besoin que l'utilisateur clique une fois sur la page pour pouvoir lancer automatiquement un son
    $('#paragValiderK, #verbeK').hide();
    $('#reponseK').append('<div id="commencerK">Cliquez ici pour commencer</div>');
};

// Ecouteur Commencer (permet d'obtenir un clic de l'utilisateur sur la page afin que la lecture automatique des audios soit autorisée)
$("#reponseK").one({
    "click" : function(){
        $('#paragValiderK, #verbeK').show(); 
        $('#reponseK').hide(); 
        $('#commencerK').text(''); 
        setTimeout(() => {
            $('.rectCat').fadeOut(vitesseFadeOut);
            $('#rectVerb').fadeIn(vitesseFadeOut);
            $('#rectVerb').animate({
                width: "80vw"
            }, {
            queue: false,
            duration: vitesseFadeOut*3
            })
            .animate({ top: "1vh"
            }, {
            queue: false,
            duration: vitesseFadeOut*3
            })
            .animate({ left: "2vh" 
            }, {
            queue: false,
            duration: vitesseFadeOut*3
            })
            .animate({ height: "75vh" 
            }, {
            queue: false,
            duration: vitesseFadeOut*3
            })
            setTimeout(() => {
                $('#rectVerbZoomK').show();
                $('#rectVerb').hide();
            }, vitesseFadeOut*3);
            setTimeout(() => {
                phraseEnCoursK(); 
            }, vitesseFadeOut*4);
        }, vitesseFadeOut*1.5);
    }
});

// Fonction lancer la phrase suivante
function phraseEnCoursK(){
    permValiderK = true;
    inputFauxK = 0;
    document.getElementById("verbeK").readOnly = false; 
    $("#audioDonneesK").attr('src',donneesK[indEnCoursK][3]);
    $("#audioDonneesK")[0].play();
    clignoterReecouter(); // fonction dans general.js
    // Ecrire la phrase dans la div avec le verbe à saisir comme input
    splitPhraseK = donneesK[indEnCoursK][0].split('/'); // 0: avant, 1: verbe; 2: apres
    $("#avant").html(splitPhraseK[0]);
    verbeAttendu = splitPhraseK[1];
    $("#apres").html(splitPhraseK[2]);
};

// Ecouteur clic sur les terminaisons
$('.pRectK').on({
    "click" : function(){
        if (clicAutoriseK){
            if ($(this).data('col')== donneesK[indEnCoursK][1] & $(this).data('ligne')== donneesK[indEnCoursK][2]) { // si la terminaison cliquée est à la bonne ligne et colonne, bonne réponse
                repJuste(); // afficher la coche verte (fonction dans general.js)
                if (pointAutoriseK){
                    pointsK++;
                };
                $('#reponseK').show();
                pointAutoriseK = true;
                clicsFauxK = 0;
            } else { // mauvaise réponse
                repFausse(); // afficher la croix rouge (fonction dans general.js)
                pointAutoriseK = false;
                clicsFauxK++;
                clignoterReponse($(this).attr('id'),coulPolice,coulRepFausse);
                if (clicsFauxK>=nbrEssaisMax){
                    clicAutoriseK = false;
                    clicsFauxK = 0;
                    /////// recup data col, puis boucle pour data ligne
                    colJuste = document.querySelectorAll("[data-col='"+donneesK[indEnCoursK][1]+"']");
                    for (let i=0; i<colJuste.length; i++){
                        if (colJuste[i].dataset.ligne == donneesK[indEnCoursK][2]) {
                            idJuste = colJuste[i].id;
                        };
                    };
                    setTimeout(() => {
                        clignoterReponse(idJuste,coulPolice,coulRepJuste);
                        setTimeout(() => {
                            $('#reponseK').show();
                            pointAutoriseK = true;
                        }, vitesseClignotement*6);
                    }, vitesseClignotement*6);
                    
                }
            } 
        }
    }
});

// Fonction valider la réponse
function validerReponseK(){
    if ($("#verbeK").val()==verbeAttendu){
        // bonne réponse
        repJuste();  // afficher la coche verte (fonction dans general.js)
        if (pointAutoriseK){
            pointsK++;
        };
        $("#reponseK").hide(); // cacher la div
        clicAutoriseK = true;
        $("#verbeK").val(''); // réinitialiser l'input
        pointAutoriseK = true;
        indEnCoursK ++; // passage à la phrase suivante
        setTimeout(() => {
            if (indEnCoursK==lenDonneesK){
                alert("Votre score est de "+Math.round((pointsK/totalK)*100)+"%\n\nVous avez réussi "+pointsK+" exercices sur "+totalK);
            } else {
                phraseEnCoursK();
            };
        }, timeoutMotSuivant);
    } else { // mauvaise réponse, afficher croix rouge
        repFausse(); // afficher la croix rouge (fonction dans general.js)
        pointAutoriseK = false;
        inputFauxK++;
        $("#verbeK").val(''); // réinitialiser l'input
        if (inputFauxK>=nbrEssaisMax){
            permValiderK = false; // l'utilisateur ne peut pas valider la bonne réponse qui a été affichée automatiquement
            document.getElementById("verbeK").readOnly = true; // empêcher l'utilisateur de modifier l'input lorsque la bonne réponse s'affiche
            $("#verbeK").val(verbeAttendu);
            clignoterReponse('verbeK',coulPolice,coulRepJuste);
            pointAutoriseK = true;
            indEnCoursK ++; // passage à la phrase suivante
            setTimeout(() => {
                $("#reponseK").hide(); // cacher la div
                clicAutoriseK = true;
                $("#verbeK").val(''); // réinitialiser l'input
                if (indEnCoursK==lenDonneesK){
                    alert("Votre score est de "+Math.round((pointsK/totalK)*100)+"%\n\nVous avez réussi "+pointsK+" exercices sur "+totalK);
                } else {
                    phraseEnCoursK();
                };
            }, vitesseClignotement*6);
        }
    };
};

// Valider le verbe saisi avec le bouton
$("#validerK").on({
    "click" : function(){
        if (permValiderK){
            validerReponseK();
        }        
    }
});

// Valider le verbe saisi avec la touche Entrée
$(document).on("keypress", "input", function(e){
    if(e.which == 13){
        if (permValiderK){
            validerReponseK();
        }
    }
});