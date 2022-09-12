// Script Démo exercice type F (ExotypeF-1-2.html)

// Variables utilisées
var donneesF = [["une","liberté","sg","liberté"],["des","libertés","plur","liberté"],["un","portail","sg","portail"],["des","portails","plur","portail"],["un","bal","sg","bal"],["des","bals","plur","bal"],["un","écrou","sg","écrou"],["des","écrous","plur","écrou"],["un","rail","sg","rail"],["des","rails","plur","rail"],["un","enfant","sg","enfant"],["des","enfants","plur","enfant"],["une","rue","sg","rue"],["des","rues","plur","rue"],["une","chemise","sg","chemise"],["des","chemises","plur","chemise"],["une","sœur","sg","sœur"],["des","sœurs","plur","sœur"],["un","cousin","sg","cousin"],["des","cousins","plur","cousin"],["une","pensée","sg","pensée"],["des","pensées","plur","pensée"],["un","sou","sg","sou"],["des","sous","plur","sou"]]; // 0 : det; 1 : nom; 2 : nombre; 3 : lemme
var lemmeEnCours = "";
var idSgEnCours = "";
var detSg = "";
var nomSg = "";
var detPlur = "";
var nomPlur = "";
var nomCorrect = ""; // Valeur attendue lorsque l'utilisateur saisira un nom
var singClique = false;
var clicAutoriseF = true;
var nbCouplesSgPlur = (donneesF.length)/2; // Pour savoir quand fini l'exercice
var cptBonnesRep = 0;
var clicsFauxF = 0;
var inputFauxF = 0;
var permValiderF = true;
var pointsF = 0; // points que l'utilisateur gagnera au cours de l'exercice
var totalF = donneesF.length; // nbr total de points possibles
var pointAutoriseF = true;

// Au chargement de la page
window.onload=function(){
    // Ecrire le chemin de l'audio de la consigne
    $('#consigneF').attr('src',cheminConsignes+cheminConsigneF);
    // Mélanger aléatoirement l'odre des données de l'exercice
    shuffleArray(donneesF); // (fonction dans general.js)
    // Ecrire les données dans la page
    idString="F0";
    $("#txtExoTypeF").html('<span id="F0" class="txtF '+donneesF[0][2]+'" data-lemme="'+donneesF[0][3]+'" data-det_'+donneesF[0][2]+'="'+donneesF[0][0]+'" data-nom_'+donneesF[0][2]+'="'+donneesF[0][1]+'" onClick="'+donneesF[0][2]+'ClicF(\'F0\')">'+donneesF[0][0]+' '+donneesF[0][1]+'</span>'); // 1ere ligne avec <span> pour éviter un affichage décalé
    for (let i = 1; i < donneesF.length; i++){
        $("#txtExoTypeF").append('<p id="F'+i+'" class="txtF '+donneesF[i][2]+'" data-lemme="'+donneesF[i][3]+'" data-det_'+donneesF[i][2]+'="'+donneesF[i][0]+'" data-nom_'+donneesF[i][2]+'="'+donneesF[i][1]+'" onClick="'+donneesF[i][2]+'ClicF(\'F'+String(i)+'\')">'+donneesF[i][0]+' '+donneesF[i][1]+'</p>');
    };
}

// écouteur mot au singulier
function sgClicF(id){
    if (clicAutoriseF){
        if (!singClique){
            lemmeEnCours = $("#"+id).data('lemme');
            idSgEnCours = id;
            singClique = true;
            detSg = $("#"+id).data('det_sg'); // on récupère le det sing
            nomSg = $("#"+id).data('nom_sg'); // on récupère le nom sing
            $("#"+id).css('color', coulSgEnCours); // mettre en bleu le sing cliqué en cours (general.js)
            document.getElementById(id).removeAttribute("onclick"); // désactiver le clic sur la réponse
        } else {
            repFausse(); // afficher la croix rouge (fonction dans general.js)
            pointAutoriseF = false;
            clicFauxSgOuPlurF();
        }
    }
};

// écouteur mot au pluriel
function plurClicF(id){
    if (clicAutoriseF){
        if (singClique){
            if($("#"+id).data('lemme')==lemmeEnCours){ //bonne réponse
                repJuste(); // afficher la coche verte (fonction dans general.js)
                if (pointAutoriseF){
                    pointsF++;
                };
                affPhraseInputF(id);
            } else {
                repFausse(); // afficher la croix rouge (fonction dans general.js)
                pointAutoriseF = false;
                clicFauxSgOuPlurF();
            }
        } else {
            repFausse(); // afficher la croix rouge (fonction dans general.js)
        }
    }
};

// Fonction clic faux (sur un sg ou plur) après avoir cliqué sur un mot au sg
function clicFauxSgOuPlurF(){
    clicsFauxF++;
    setTimeout(() => {
        if (clicsFauxF >= nbrEssaisMax){
            // récupération de l'id du pluriel associé au sg en cours
            sgEtPlur = document.querySelectorAll("[data-lemme='"+lemmeEnCours+"']");
            if (sgEtPlur[0].classList.contains("plur")){ 
                idPlurJuste = sgEtPlur[0].id;
            } else {
                idPlurJuste = sgEtPlur[1].id;
            };
            affPhraseInputF(idPlurJuste);
        }
    }, vitesseFadeOut);
};

// Fonction afficher la phrase avec l'input où l'utilisteur doiit saisir le singulier ou le pluriel du nom
function affPhraseInputF(id){
    pointAutoriseF = true;
    detPlur = $("#"+id).data('det_plur'); // on récupère le det plur
    nomPlur = $("#"+id).data('nom_plur'); // on récupère le nom plur
    $("#"+id+", #"+idSgEnCours).css('color', repDejaCliquee); // mettre en gris les réponses cliquées (general.js)
    singClique = false;
    document.getElementById(id).removeAttribute("onclick"); // désactiver le clic sur la réponse            
    // afficher la div où l'utilisateur doit saisir le sg ou le plur du nom
    sgOuPlur = randomInt(0,1); // choisir aléatoirement le sg ou le plur
    if (sgOuPlur==0){ // Saisir le nom au singulier
        $('#avant').text(detSg+" ");
        $('#apres').text(" - "+detPlur+" "+nomPlur);
        nomCorrect = nomSg;
    } else { // Saisir le nom au pluriel
        $('#avant').text(detSg+" "+nomSg+" - "+detPlur+" ");
        $('#apres').text("");
        nomCorrect = nomPlur;
    };
    $('#nomF').val(''); // réinitialisation de l'input
    setTimeout(() => {
        $("#reponseF").show();
    }, vitesseFadeOut);
    clicAutoriseF = false; // empecher de cliquer sur les mots quand la div de réponse apparait
};

// Fonction valider la réponse 
function validerReponseF () {
    clicsFauxF = 0; // réinitialisation du cpt de clics faux
    if ($("#nomF").val()==nomCorrect){
        repJuste();  // afficher la coche verte (fonction dans general.js)
        if (pointAutoriseF){
            pointsF++;
        };
        $("#reponseF").hide(); // cacher la div
        clicAutoriseF = true; // autoriser clic sur les mots
        inputFauxF = 0;
        cptBonnesRep++;
    } else { // mauvaise réponse, afficher croix rouge
        repFausse(); // afficher la croix rouge (fonction dans general.js)
        pointAutoriseF = false;
        inputFauxF++;
        $('#nomF').val(''); // réinitialisation de l'input
        if (inputFauxF>=nbrEssaisMax){
            permValiderF = false; // l'utilisateur ne peut pas valider la bonne réponse qui a été affichée automatiquement
            inputFauxF = 0;
            cptBonnesRep++;
            document.getElementById("nomF").readOnly = true; // empêcher l'utilisateur de modifier l'input lorsque la bonne réponse s'affiche
            $("#nomF").val(nomCorrect); // on affiche le verbe correct
            setTimeout(() => {
                clignoterReponse('nomF',coulPolice,coulRepJuste);
                setTimeout(() => {
                    $("#reponseF").hide(); // cacher la div
                    pointAutoriseF = true;
                    clicAutoriseF = true; // autoriser clic sur les mots
                    permValiderF = true;
                    document.getElementById("nomF").readOnly = false;
                }, vitesseClignotement*5);
            }, vitesseFadeOut);
        };
    }
    if (cptBonnesRep >= nbCouplesSgPlur) {
        alert("Votre score est de "+Math.round((pointsF/totalF)*100)+"%\n\nVous avez réussi "+pointsF+" exercices sur "+totalF);
    }
    
};

// valider le nom saisi
$("#validerF").on({
    "click" : function(){
        if (permValiderF){
            validerReponseF();  
        }; 
    }
});

// Valider la réponse avec la touche Entrée
$(document).on("keypress", "input", function(e){
    if(e.which == 13){
        if (permValiderF){
            validerReponseF();  
        }; 
    }
});