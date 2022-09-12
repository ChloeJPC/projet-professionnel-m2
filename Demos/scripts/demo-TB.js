// Script Démo exercice type Se tester B (ExotypeTB-1-7.html)

// Variables utilisées
donneesTB = [["des;puces;électronique",0],["de;nouveaux;pneus",1],["le;dernière;étage",0],["deux;boites;vides",1],["des;rêves;étrange",0],["des;alcools;très;forts",1],["des;métaux;assez;dur",0],["deux;petits;lit;bas;superposés",0],["plusieurs;véhicules;utilitaires",1],["des;tiges;métalliques;souples;et;résistantes",1],["une;boisson;gazeuses;sucrées",0],["des;crèmes;hydratante;souvent;trop;grasse",0],["des;fromages;corses;secs;,;cendrés;et;aigres",1],["une;maladie;contagieuses;mais;bénignes",0],["une;fumée;noire;désagréable;,;mais;inodore",1],["un;immense;jardin;très;fleuri;et;bien;aménagée",0],["des;travaux;fatigants;,;chers;et;inutile",0],["des;murs;mitoyens;,;hauts;et;épais",1],["des;fruits;trop;petits,;verts;et;véreux",1],["des;moteurs;électriques,;puissant;et;économique",0],["des;rues;piétonnes,;étroites;et;animés",0],["de;nombreux;rendez-vous;manqués;ou;annulés",1],["un;régime;végétarien;sévère;mais;équilibrée",0],["une;randonnée;pédestre;courte;mais;épuisante",1],["des;thés;amers,;légers;et;délicats",1],["les;premier;beaux;jours",0],["un;vieux;tapis;poussiéreux;et;troué",1],["de;multiples;insectes;diurnes;ou;nocturnes",1],["des;courses;cyclistes;traditionnelles;et;locales",1],["des;animaux;sauvages;blessés;et;agressif",0],["des;toilettes;sèches;écologiques",1],["des;états;solides,;liquides;ou;gazeux",1],["un;courant;électrique,;alternatif;ou;continus",0],["des;mains;toujours;sale,;poisseuse;et;collante",0],["des;cris;stridents;difficilement;supportable",0],["des;murmures;continus;et;presque;inaudibles",1],["une;ordonnance;médicale;non;valide;car;illisible",1],["des;oliviers;centenaires,;certes;vieux;mais;encore;robuste",0],["des;recettes;culinaires;toujours;faciles;et;délicieux",0],["une;vraie;salade;niçoise;et;une;omelette;baveuse;savoureuse",1]]; // sortie brute de la BD
var lenDonneesTB=donneesTB.length;
for (let i=0; i<lenDonneesTB; i++){ // nettoyage de donneesTB
    donneesTB[i][0]=donneesTB[i][0].replaceAll(";"," ").replaceAll(" ,",",");
    if (donneesTB[i][1]==0){ // 0 = incorrect
        donneesTB[i][1]="incorrect"; 
    } else { // 1 = correct
        donneesTB[i][1]="correct";
    };
};
var cptTB = 0; // Pour parcourir les éléments du Tableau
var repEnCoursTB = "";
var scoreTB = 0;

// Fonction écrire la phrase T
function ecrirePhraseTB(){
    if (cptTB==lenDonneesTB){
        $("#scoreTB").html("Votre score est de "+Math.round((scoreTB/lenDonneesTB)*100)+"%<br/>Vous avez réussi "+scoreTB+" exercices sur "+lenDonneesTB);
        $(".repT").hide();
        $("#scoreTB").show();
    } else {
        $(".txtExoTypeT").text(donneesTB[cptTB][0]);
        timeoutTB = setTimeout(() => { // la réponse disparait au bout de quelques secondes
            $(".txtExoTypeT").text('');
        }, dureeAffRepTB);
        repEnCoursTB = donneesTB[cptTB][1]; // correct/incorrect
        cptTB++;
    }
};
// Au chargement de la page
window.onload=function(){
    // Ecrire le chemin de l'audio de la consigne
    $('#consigneTB').attr('src',cheminConsignes+cheminConsigneTB);
    // Ecrire la première phrase
    ecrirePhraseTB();
};

// Evenement clic sur correct/incorrect
$('#correctTB, #incorrectTB').on({
    "click" : function(){
        clearTimeout(timeoutTB);
        if($(this).attr('id')==repEnCoursTB+"TB"){ // bonne réponse
            repJuste(); // afficher la coche verte (fonction dans general.js)
            scoreTB++;
            setTimeout(() => {
                ecrirePhraseTB();
            }, timeoutMotSuivant);
        } else { // mauvaise réponse, afficher croix rouge
            repFausse(); // afficher la croix rouge (fonction dans general.js)
            setTimeout(() => {
                ecrirePhraseTB();
            }, timeoutMotSuivant);
        }        
    }
});