// Script Démo exercice type Se tester A (ExotypeTA-1-7.html)

// Variables utilisées
donneesTA = [["tes;nouvelles;vidéos",1],["ma;nouvelle;adresses",0],["des;œuf;frais",0],["son;nouvel;ordinateur",1],["une;soupe;froide",1],["des;gens;très;riches",1],["des;films;assez;triste",0],["quelques;menus;très;économiques",1],["des;appels;trop;brefs",1],["des;leçons;trop;brève",0],["une;veste;blanche;et;noir",0],["une;eau;propre;,;claire;et;froide",1],["un;café;noir;,;chaud;et;sucrés",0],["la;population;mondiale;jeune;et;active",1],["les;cinq;grands;ports;maritime;français",0],["les;deux;autre;maisons;mitoyennes",0],["de;petits;exercices;courts;mais;difficiles",1],["des;gestes;précis;,;habituels;et;machinals",0],["de;nombreux;villes;chinoises;,;polluées;et;surpeuplées",0],["des;bruits;insolites;,;secs;et;répétitifs",1],["des;outils;pratiques;,;car;solides;et;maniables",1],["des;pinceaux;professionnels;,;plats;,;ronds;ou;fin",0],["un;vieux;puits;large;,;sombre;et;profond",1],["des;gaz;toxiques;et;inodore;,;donc;dangereux",0],["deux;gros;poulets;fermiers;bios",1],["des;affiches;publicitaires;colorées;et;rigolote",0],["de;hautes;vagues;,;puissantes;et;dangereuse",0],["de;superbes;toiles;multicolores;ou;unies",1],["un;nouveau;système;informatique;encore;cher",1],["une;tablette;numérique;vraiment;très;cher",0],["des;enfants;intelligents;et;curieux;,;mais;agités",1],["une;gamine;intelligente;et;curieuse;,;mais;agité",0],["de;nombreuses;dépenses;inutiles;et;superflues",1],["des;erreurs;bancaires;fréquentes;,;importantes;et;difficilement;repérable",0],["d’anciens;écrans;plats;,;carrés;ou;rectangulaires",1],["des;locaux;professionnels;lumineux;et;très;modernes",1],["d'anciennes;affiches;déchirées;,;carrés;ou;rectangulaires",0],["de;jeunes;apprentis;nerveux;,;encore;trop;débutants;et;inexpérimentés",1],["des;notices;gratuites;souvent;illisible;car;souvent;mal;traduites",0],["des;déchets;radioactifs;très;nocifs;et;trop;encombrant",0]];// Sortie brute de la BD
var lenDonneesTA=donneesTA.length;
for (let i=0; i<lenDonneesTA; i++){ // nettoyage de donneesTA
    donneesTA[i][0]=donneesTA[i][0].replaceAll(";"," ").replaceAll(" ,",",");
    if (donneesTA[i][1]==0){ // 0 = incorrect
        donneesTA[i][1]="incorrect"; 
    } else { // 1 = correct
        donneesTA[i][1]="correct";
    };
};
var cptTA = 0; // Pour parcourir les éléments du tableau
var repEnCoursTA = "";
var scoreTA = 0;

// Fonction écrire la phrase T
function ecrirePhraseTA(){
    if (cptTA==lenDonneesTA){
        $("#scoreTA").html("Votre score est de "+Math.round((scoreTA/lenDonneesTA)*100)+"%<br/>Vous avez réussi "+scoreTA+" exercices sur "+lenDonneesTA);
        $(".repT").hide();
        $("#scoreTA").show();
    } else {
        $(".txtExoTypeT").text(donneesTA[cptTA][0]);
        repEnCoursTA = donneesTA[cptTA][1]; // correct/incorrect
        cptTA++;
    }
};
// Au chargement de la page
window.onload=function(){
    // Ecrire le chemin de l'audio de la consigne
    $('#consigneTA').attr('src',cheminConsignes+cheminConsigneTA);
    // Ecrire la première phrase
    ecrirePhraseTA();
};

// Evenement clic sur correct/incorrect
$('#correctTA, #incorrectTA').on({
    "click" : function(){
        if($(this).attr('id')==repEnCoursTA+"TA"){
            repJuste();
            scoreTA++;
            setTimeout(() => {
                ecrirePhraseTA();
            }, timeoutMotSuivant);
        } else {
            repFausse();
            setTimeout(() => {
                ecrirePhraseTA();
            }, timeoutMotSuivant);
        }        
    }
});