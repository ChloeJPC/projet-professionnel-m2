// Script Démo exercice type I (ExotypeI-4-7.html)

// Variables utilisées
var donneesI = [["Je","les","cueille",".",0,"Tu"],["Tu","les","cueilles",".",1,"le"],["Tu","le","cueilles",".",2,"envoies"],["Tu","l'","envoies",".",0,"Elles"],["Elles","l'","envoient",".",1,"les"],["Elles","les","envoient",".",2,"manges"],["Tu","les","manges",".",0,"Nous"],["Nous","les","mangeons",".",1,"la"],["Nous","la","mangeons",".",2,"places"],["Tu","la","places",".",0,"Nous"],["Nous","la","plaçons",".",0,"Je"],["Je","la","place",".",1,"les"],["Je","les","place",".",2,"voyez"],["Vous","les","voyez",".",0,"Je"],["Je","les","vois",".",0,"Elles"],["Elles","les","voient",".",1,"le"],["Elles","le","voient",".",2,"tenons"],["Nous","le","tenons",".",0,"Il"],["Il","le","tient",".",1,"les"],["Il","les","tient",".",0,"Elles"],["Elles","les","tiennent","."]];
var lenDonneesI = donneesI.length;
var numSerie = 0;
var repJusteI0 = "";
var repJusteI1 = "";
var repJusteI2 = "";
var inputFauxI = 0;
var autoriserVerif = true;
var pointsI = 0; // points que l'utilisateur gagnera au cours de l'exercice
var pointAutoriseI = true;
var totalI = lenDonneesI-1; // nbr total de points possibles

// Fonctions utilisées
function afficherSerie() {
    pointAutoriseI = true;
    inputFauxI = 0;
    autoriserVerif = true;
    document.getElementById("repI0").readOnly = false; 
    document.getElementById("repI1").readOnly = false;
    document.getElementById("repI2").readOnly = false;
    if (numSerie==lenDonneesI-1){ // Fin de la démo quand on arrive au dernier elt du tableau
        $("#motI0").html(donneesI[numSerie][0]);
        $("#motI1").html(donneesI[numSerie][1]);
        $("#motI2").html(donneesI[numSerie][2]);
        alert("Votre score est de "+Math.round((pointsI/totalI)*100)+"%\n\nVous avez réussi "+pointsI+" exercices sur "+totalI);
    } else { // Affichage de la série
        $(".motI, .repI").removeClass('spanI'); // on enlève le surlignage du mot en cours précédent
        $(".repI").attr('disabled',false)// on réactive tous les input
        $("#reponseI, #btn_valider").hide(); // cacher la div réponse (inputs) et le bouton valider
        $("#txtExoTypeI").show(); // afficher la div exo
        $("#motI0").html(donneesI[numSerie][0]);
        $("#repI0").val(donneesI[numSerie][0]);
        $("#motI1").html(donneesI[numSerie][1]);
        $("#repI1").val(donneesI[numSerie][1]);
        $("#motI2").html(donneesI[numSerie][2]);
        $("#repI2").val(donneesI[numSerie][2]);
        $("#motI3, #repI3").html(donneesI[numSerie][3]);
        $("#motI"+donneesI[numSerie][4]+", #repI"+donneesI[numSerie][4]).addClass('spanI'); // surligner en violet le mot qui va être remplacer
        $("#repI"+donneesI[numSerie][4]).val(donneesI[numSerie][5]); // remplacer le mot dans l'input
        $("#repI"+donneesI[numSerie][4]).attr('disabled','disabled'); // désactiver l'input du mot remplacé
        $("#motI"+donneesI[numSerie][4]).fadeOut(vitesseFadeI, function() { // remplacer le mot dans la div exo
            $("#motI"+donneesI[numSerie][4]).html(donneesI[numSerie][5]);
            $("#motI"+donneesI[numSerie][4]).fadeIn(vitesseFadeI, function(){
                $("#reponseI, #btn_valider").show(); // afficher la div réponse (inputs) et le bouton valider
                $("#txtExoTypeI").hide(); // cacher la div exo
            });
        });
    };
    // Mots corrects attendus (élément suivant de la liste serie)
    repJusteI0 = donneesI[numSerie+1][0];
    repJusteI1 = donneesI[numSerie+1][1];
    repJusteI2 = donneesI[numSerie+1][2];
};
function verifReponseI(){
    if ($("#repI0").val()==repJusteI0 & $("#repI1").val()==repJusteI1 & $("#repI2").val()==repJusteI2){ // bonne réponse, afficher coche verte
        numSerie++ ; // passage à la série de donnée suivante
        if (pointAutoriseI){
            pointsI++;
        };
        repJuste(afficherSerie()); // fonction dans general.js
    } else { // mauvaise réponse
        repFausse(); // fonction dans general.js
        pointAutoriseI = false;
        inputFauxI++;
        // faire clignoter la/les mauvaise(s) réponse(s)
        if ($("#repI0").val()!=repJusteI0) {
            clignoterReponse("repI0",coulPolice,coulRepFausse); // fonction dans general.js
        };
        if ($("#repI1").val()!=repJusteI1) {
            clignoterReponse("repI1",coulPolice,coulRepFausse);
        };
        if ($("#repI2").val()!=repJusteI2) {
            clignoterReponse("repI2",coulPolice,coulRepFausse);
        };
        if (inputFauxI>=nbrEssaisMax){ // nb d'essais max par l'utilisateur atteint
            autoriserVerif = false;
            document.getElementById("repI0").readOnly = true; // empêcher l'utilisateur de modifier l'input lorsque la bonne réponse s'affiche
            document.getElementById("repI1").readOnly = true;
            document.getElementById("repI2").readOnly = true;
            if ($("#repI0").val()!=repJusteI0) { // faire clignoter le ou les mots faux
                clignI0 = true;
            } else {
                clignI0 = false;
            };
            if ($("#repI1").val()!=repJusteI1) {
                clignI1 = true;
            } else {
                clignI1 = false;
            };
            if ($("#repI2").val()!=repJusteI2) {
                clignI2 = true;
            } else {
                clignI2 = false;
            };
            setTimeout(() => {
                $("#repI0").val(repJusteI0); // afficher les bonnes réponses
                $("#repI1").val(repJusteI1);
                $("#repI2").val(repJusteI2);
                if (clignI0){
                    clignoterReponse("repI0",coulPolice,coulRepJuste);
                };
                if (clignI1){
                    clignoterReponse("repI1",coulPolice,coulRepJuste);
                };
                if (clignI2){
                    clignoterReponse("repI2",coulPolice,coulRepJuste);
                };                
                setTimeout(() => {
                    numSerie++ ; // passage à la série de donnée suivante
                    afficherSerie(); // passage à la phrase suivante
                }, vitesseClignotement*6);
            }, vitesseClignotement*6);
        }
    }
};
// Au chargement de la page
window.onload=function(){
    // Ecrire le chemin de l'audio de la consigne
    $('#consigneI').attr('src',cheminConsignes+cheminConsigneI);
    // Afficher la première série (div texte de l'exercice + inputs réponses)
    afficherSerie();
};
// Bouton valider du menu
$("#btn_valider").on({
    "click" : function(){
        if (autoriserVerif){
            verifReponseI(); 
        }
    }
});
// Valider la réponse avec la touche Entrée
$(document).on("keypress", "input", function(e){
    if(e.which == 13){
        if (autoriserVerif){
            verifReponseI(); 
        }
    }
});