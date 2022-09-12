// Script général pour les démos des exercices

// Nb d'essais max avant de passer à la suite
var nbrEssaisMax = 3;
// Vitesses
var vitesseFadeOut = 500; // Vitesse du fade out des images de bonne ou mauvaise réponse
var timeoutMotSuivant = vitesseFadeOut+100; // timeout entre l'affichage de la coche/croix et le mot suivant
var vitesseClignotement = 250; // vitesse de clignotement des réponses
var vitesseClignReecouter = 900;
var vitesseHighlight = 500;
// Couleurs
var coulBgJour = "#F6EDED";
var coulBgNuit = "#1F1347";
var coulPoliceJour = "#1F1347";
var coulPoliceNuit = "#F6EDED";
var couleurNom = "#99E660";
var couleurDet = "#F4E073";
var couleurAdj = "#CB6CE6";
var couleurPrep = "#FF5757";
var couleurPron = "#b38d1c";
var couleurVerb = "#FF914D";
var couleurAdv = "#4F0FD8";
var couleurConjCoord = "#000000";
var coulBg = coulBgJour; // par défaut thème jour
var coulPolice = coulPoliceJour;
var repDejaCliquee = "grey";
var coulRepFausse = "crimson"; 
var coulRepJuste = "#62C54B"; // vert
// Images
var dossierImages = "images/";
var imgConsigne = dossierImages+"consigne.png";
var imgReecouter = dossierImages+"reecouter.png";
var imgRetour = dossierImages+"retour.png";
var imgSon = dossierImages+"son.png";
var imgValider = dossierImages+"valider.png";
var imgBonneRep = dossierImages+"coche_verte.png";
var imgMauvaiseRep = dossierImages+"croix_rouge.png";
// Audios des consignes
var cheminConsignes = "audios/consignes/";
var cheminConsigneA = "sons_consigne_M2B/A1.mp3";
var cheminConsigneB = "sons_consigne_M2B/A5.mp3";
var cheminConsigneC = "sons_consigne_M2B/A6.mp3";
var cheminConsigneD = "sons_consigne_M3B/A11.mp3";
var cheminConsigneE = "sons_consigne_M3B/A21.mp3";
var cheminConsigneF = "sons_consigne_M1B/A2.mp3";
var cheminConsigneG = "sons_consigne_M4B/A1.mp3";
var cheminConsigneH = "sons_consigne_M4B/A6.mp3";
var cheminConsigneI = "sons_consigne_M4B/A7.mp3";
var cheminConsigneJ = "sons_consigne_M5B/A21.mp3";
var cheminConsigneK = "sons_consigne_M5B/A12.mp3";
var cheminConsigneTA = "sons_consigne_M1B/A7-A.mp3";
var cheminConsigneTB = "sons_consigne_M1B/A7-B.mp3";
// Audio des donnees
var cheminDonnees = "audios/donnees/";
var cheminDonneesA = cheminDonnees+"demo_A/";
var cheminDonneesE = cheminDonnees+"demo_E/";
var cheminDonneesG = cheminDonnees+"demo_G/";
var cheminDonneesK = cheminDonnees+"demo_K/";
// Demos B et C
var epaissBordMotBC = "2px"; // epaisseur de la bordure des mots à analyser de l'exo C
var surlignBC = "#C0C0C0"; // gris clair
var coulMotEnCoursBC = "blue";
var ombreBC = "0 0 0.1em "+coulBgNuit+", inset 0 0 0.1em "+coulBgNuit;
// Demo D
var surlignD = "orange";
// Demo E
var coulPoliceTermE = "#422992";
var classTermE = "terminaisonsE";
// Demo F
var coulSgEnCours = "blue";
//Demo H
var timeoutH = 1200 ; 
// Demo I
var vitesseFadeI = 1500; // Vitesse du fade in et fade out du mot à analyser dans l'exercice I
// Se tester B
var dureeAffRepTB = 2500; // durée de l'affichage de la réponse

// Appliquer le thème nuit aux démos  (Utilisé en lien avec la page index.html qui regroupe les démos)
function twRequeteVariable(sVariable) { // http://www.trucsweb.com/tutoriels/javascript/tw303/
    // Éliminer le "?"
    var sReq = window.location.search.substring(1);
    // Matrice de la requête
    var aReq = sReq.split("&");
    // Boucle les variables
    for (var i=0;i<aReq.length;i++) {
        // Matrice de la variables / valeur
        var aVar = aReq[i].split("=");
        // Retourne la valeur si la variable demandée = la variable de la boucle
        if(aVar[0] == sVariable){return aVar[1];}
    }
    // Aucune variable de trouvée.
    return(false);
};
if (twRequeteVariable("theme")=="nuit") {
    $("body").addClass('themeNuit');
};

// Thème nuit
if ($('body').hasClass('themeNuit')){ 
    imgConsigne = dossierImages+"consigneNuit.png";
    imgReecouter = dossierImages+"reecouterNuit.png";
    imgRetour = dossierImages+"retourNuit.png";
    imgSon = dossierImages+"sonNuit.png";
    imgValider = dossierImages+"validerNuit.png";
    coulBg = coulBgNuit;
    coulPolice = coulPoliceNuit;
    // Exo A, G et K
    $("#rectDetPrep").addClass('rectDetPrep_Nuit');
    $("#rectPronAdv").addClass('rectPronAdv_Nuit');
    $("#rectConjCoord, #rectConjSub").addClass('rectConj_Nuit');
    //Exo B et C
    $(".categoriesBC").addClass('categoriesBC_Nuit');
    surlignBC = "#727070"; // gris foncé
    coulMotEnCoursBC = "cyan";
    ombreBC = "0 0 0.1em "+coulBgJour+", inset 0 0 0.1em "+coulBgJour;
    //Exo D
    surlignD = "#C23B25"; // marron
    $("#reponseD").addClass('reponseD_Nuit');
    $("#verbeD").addClass('verbeD_Nuit');
    $(".terminaisonsD").addClass('terminaisonsD_Nuit');
    //Exo E
    coulPoliceTermE = "#FFAD8F";
    classTermE = "terminaisonsE_Nuit"
    $("#reponseE").addClass('reponseE_Nuit');
    $("#verbeE").addClass('verbeE_Nuit');
    //Exo F
    $("#reponseF").addClass('reponseF_Nuit');
    $("#nomF").addClass('nomF_Nuit');
    coulSgEnCours ="cyan";
    //Exo H
    $("#phraseH").addClass('phraseH_Nuit');
    //Exo I
    $(".repI").addClass('repI_Nuit');
    //Exo J
    $("#phraseCorrecteJ").addClass('phraseCorrecteJ_Nuit');
    //Exo K
    $("#reponseK").addClass('reponseK_Nuit');
    $("#verbeK").addClass('verbeK_Nuit');
    $(".pRectK").addClass('pRectK_Nuit');
    //Se tester (TA et TB)
    $(".repT").addClass('repT_Nuit');
    $(".txtExoTypeT").addClass('txtExoTypeT_Nuit');
};

// Ecrire les boutons, coche verte et croix rouge dans les pages html
$("#btn_consigne").attr('src',imgConsigne); // image du bouton consigne
$("#btn_consigne").attr('alt','bouton consigne');
$("#btn_reecouter").attr('src',imgReecouter); // image du bouton réecouter
$("#btn_reecouter").attr('alt','bouton réécouter');
$("#btn_retour").attr('src',imgRetour); // image du bouton retour
$("#btn_retour").attr('alt','bouton retour');
$("#btn_valider, .validerDEFK").attr('src',imgValider); // image du bouton valider
$("#btn_valider, .validerDEFK").attr('alt','bouton valider');
$("#imgCocheVerte").attr('src',imgBonneRep); // image de la coche verte
$("#imgCocheVerte").attr('alt','coche verte');
$("#imgCroixRouge").attr('src',imgMauvaiseRep); // image de la croix rouge
$("#imgCroixRouge").attr('alt','croix rouge');
    
// Boutons Consigne, Réécouter et Retour du menu
$("#btn_consigne").on({
    "click" : function(){
        // afficher l'icône son pendant la lecture de la consigne
        dureeSon = $(".playerConsignes")[0].duration;
        vitesseFadeConsigne = parseInt((dureeSon*1000)/4);
        $(".playerConsignes")[0].play();
        $("#btn_consigne").attr('src',imgSon);
        $("#btn_consigne").fadeOut(vitesseFadeConsigne, function(){
            $("#btn_consigne").fadeIn(vitesseFadeConsigne, function(){
                $("#btn_consigne").fadeOut(vitesseFadeConsigne, function(){
                    $("#btn_consigne").fadeIn(vitesseFadeConsigne, function(){
                        $("#btn_consigne").attr('src',imgConsigne);
                    });
                });
            });
        });
    },
});
$("#btn_reecouter").on({
    "click" : function(){
        // afficher l'icône son pendant la lecture de la phrase
        dureeSon = $(".audioDonnees")[0].duration;
        vitesseFadeConsigne = parseInt((dureeSon*1000)/4);
        $(".audioDonnees")[0].play();
        $("#btn_reecouter").attr('src',imgSon);
        $("#btn_reecouter").fadeOut(vitesseFadeConsigne, function(){
            $("#btn_reecouter").fadeIn(vitesseFadeConsigne, function(){
                $("#btn_reecouter").fadeOut(vitesseFadeConsigne, function(){
                    $("#btn_reecouter").fadeIn(vitesseFadeConsigne, function(){
                        $("#btn_reecouter").attr('src',imgReecouter);
                    });
                });
            });
        });
    },
});
$("#btn_retour").on({
    "click" : function(){
        window.location = "index.html";
    }
});

//Fonction bonne réponse (afficher coche verte + fonction optionnelle selon les exercices)
function repJuste(fonction) {
    $("#cocheVerte").show();
    $('#cocheVerte').fadeIn("fast", function(){        
        $("#cocheVerte").fadeOut(vitesseFadeOut, function(){
            if (typeof(fonction) != 'undefined' ) {
                fonction;
            }
        });
    });
};

// Fonction mauvaise réponse (afficher coche rouge)
function repFausse() {
    $("#croixRouge").show();
        $('#croixRouge').fadeIn("fast", function(){        
            $("#croixRouge").fadeOut(vitesseFadeOut);
        });
};

// Faire clignoter une réponse
function clignoterReponse(id,coulOriginale,coulClign){
    document.getElementById(id).style.setProperty('color', coulClign, 'important');
    setTimeout(() => {
        document.getElementById(id).style.setProperty('color', coulOriginale, 'important');
        setTimeout(() => {
            document.getElementById(id).style.setProperty('color', coulClign, 'important');
            setTimeout(() => {
                document.getElementById(id).style.setProperty('color', coulOriginale, 'important');
                setTimeout(() => {
                    document.getElementById(id).style.setProperty('color', coulClign, 'important');
                    setTimeout(() => {
                        document.getElementById(id).style.setProperty('color', coulOriginale, 'important');
                    }, vitesseClignotement);
                }, vitesseClignotement);
            }, vitesseClignotement);
        }, vitesseClignotement);
    }, vitesseClignotement);   
};

// Faire clignoter l'arrière-plan
function clignoterBackground(id,coulSurlign,coulBackgr){
    document.getElementById(id).style.setProperty('background-color', coulBackgr, 'important');
    setTimeout(() => {
        document.getElementById(id).style.setProperty('background-color', coulSurlign, 'important');
        setTimeout(() => {
            document.getElementById(id).style.setProperty('background-color', coulBackgr, 'important');
            setTimeout(() => {
                document.getElementById(id).style.setProperty('background-color', coulSurlign, 'important');
                setTimeout(() => {
                    document.getElementById(id).style.setProperty('background-color', coulBackgr, 'important');
                    setTimeout(() => {
                        document.getElementById(id).style.setProperty('background-color', coulSurlign, 'important');
                    }, vitesseFadeOut);
                }, vitesseFadeOut);
            }, vitesseFadeOut);
        }, vitesseFadeOut);
    }, vitesseFadeOut);
};

// Faire clignoter le bouton réécouter lorsque la donnée audio est lue
function clignoterReecouter(){
    $("#btn_reecouter").attr('src',imgSon);
    $("#btn_reecouter").fadeOut(vitesseClignReecouter, function(){
        $("#btn_reecouter").fadeIn(vitesseClignReecouter, function(){
            $("#btn_reecouter").fadeOut(vitesseClignReecouter, function(){
                $("#btn_reecouter").fadeIn(vitesseClignReecouter, function(){
                    $("#btn_reecouter").attr('src',imgReecouter);
                });
            });
        });
    });
};

// Mélanger aléatoirement l'odre des éléments d'un tableau
function shuffleArray(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

// Obtenir un entier aléatoire (pour afficher en input de manière aléatoire le singulier ou le pluriel d'un lemme)
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Forcer la minuscule dans les inputs + remplacer "oe" par "œ" 
function transformInput(id) {
    elt = document.getElementById(id);
    elt.value=elt.value.toLowerCase();
    elt.value=elt.value.replace("oe","œ");
    elt.value=elt.value.replace("’","'");
    elt.value=elt.value.replace("‘","'"); 
};