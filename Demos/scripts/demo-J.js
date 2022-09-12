// Script Démo exercice type J (ExotypeJ-5-2-D1.html)

// Variables utilisées 
verbesJ = ["Il faut","Il dit"];
donneesJ = [["Il faut","que je finisse mon travail."],["Il dit","que je finis toujours par gagner."],["Il faut","que tu écrives un résumé."],["Il dit","que tu écris bien."],["Il faut","qu'elle devienne plus responsable."],["Il dit","qu'elle devient sage."],["Il faut","que nous mettions le couvert."],["Il dit","que nous mettons trop de temps."],["Il faut","qu'elles sachent leur leçon."],["Il faut","que nous le sachions avant midi"]]; // 0: début de la phrase; 1: fin de la phrase
var lenDonneesJ= donneesJ.length; 
var vbEncoursJ = "";
var finPhraseEnCoursJ = "";
var boolClicVb = true;
var boolClicRep = false;
var coulEnCoursJ = "#00C2CB";
var dureeDelayJ = 2000;
var vitesseFadeOutJ = 200;
var cptRepJ = 0;
var pointsJ = 0;  // points que l'utilisateur gagnera au cours de l'exercice
var totalJ = lenDonneesJ; // nbr total de points possibles

// Au chargement de la page
window.onload=function(){
    // Ecrire le chemin de l'audio de la consigne
    $('#consigneJ').attr('src',cheminConsignes+cheminConsigneJ);
    // Mélanger l'ordre des phrases
    shuffleArray(donneesJ);
    // Ecrire les données de l'exercice
    $('#vbJ1').text(verbesJ[0]);
    $('#vbJ2').text(verbesJ[1]);
    for (let i=0; i<lenDonneesJ; i++){ 
        $('#txtExoTypeJ').append('<p id="J'+i+'" class="'+donneesJ[i][0]+'" onClick="clicFinPhraseJ(\'J'+i+'\')">'+donneesJ[i][1]+'</p>');
    };
};

// Evenement clic verbes à gauche
$('.vbJ').on({
    "click" : function(){
        if (boolClicVb) {
            vbEncoursJ=$(this).text();
            $('.vbJ').css('color',coulPolice);
            $(this).css('color',coulEnCoursJ);
            boolClicRep = true;
        }
    }
});

// Clic sur les fins de phrase
function clicFinPhraseJ(id){
    if (boolClicRep){
        boolClicVb = false;
        boolClicRep = false; // empêche de cliquer sur une autre réponse penadant les animations 
        if (vbEncoursJ==$('#'+id).attr('class')){
            // reponse juste
            repJuste(); // afficher la coche verte (fonction dans general.js)
            pointsJ++;
            $('#'+id).css('color',coulEnCoursJ);
            // Ecrire et afficher la phrase entière
            $('#phraseCorrecteJ').text("\""+vbEncoursJ+" "+$('#'+id).text()+"\"");
            $('#phraseCorrecteJ').show(); 
            $('#phraseCorrecteJ').delay(dureeDelayJ-vitesseFadeOutJ).fadeOut(vitesseFadeOutJ); // cacher la phrase après un délai    
        } else { // mauvaise réponse de fin de phrase, mettre en rouge la reponse
            repFausse(); // afficher la croix rouge (fonction dans general.js)
            $('#'+id).css('color',coulRepFausse);
            // Ecrire et afficher la phrase entière
            $('#phraseCorrecteJ').text("\""+$('#'+id).attr('class')+" "+$('#'+id).text()+"\"");
            $('#phraseCorrecteJ').show(); 
            $('#phraseCorrecteJ').delay(dureeDelayJ-vitesseFadeOutJ).fadeOut(vitesseFadeOutJ); // cacher la phrase après un délai
        };
        setTimeout( function(){
            $('#'+id).hide(); // cacher la réponse cliquée
            $('.vbJ').css('color',coulPolice); // enlever la couleur du vb cliqué avant
            boolClicVb = true; // permet de cliquer à nouveau sur un verbe
        },dureeDelayJ);
        cptRepJ++; // permettra de savoir quand l'exercice est fini
        if (cptRepJ==lenDonneesJ){
            alert("Votre score est de "+Math.round((pointsJ/totalJ)*100)+"%\n\nVous avez réussi "+pointsJ+" exercices sur "+totalJ);
        };
    } else {
        $('.vbJ').addClass('highlightCat');
        setTimeout(() => {
            $('.vbJ').removeClass('highlightCat');
        }, vitesseHighlight);
    }
}
// Fixer à gauche les deux verbes 
$(window).scroll(function() {
    if(!$('verbesJ').hasClass("fixedJ") && ($(window).scrollTop() > $('verbesJ').offset().top)) {
        $('verbesJ').addClass("fixedJ").data("top", $('verbesJ').offset().top);
    } else if ($('verbesJ').hasClass("fixedJ") && ($(window).scrollTop() < $('verbesJ').data("top"))) {
        $('verbesJ').removeClass("fixedJ");
    }
});
    