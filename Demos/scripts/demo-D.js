// Script Démo exercice type D (ExotypeD-3-1.html)

// Variables utilisées
var terminaisonsD = [
    ["ue","ues","uent","us","ut"],
    ["oue","oues","ouent","ouds","oud","ous","out"]
];
var donneesD = [ // proche de la sortie brute de la BD
    ["je;joue","6;oue","Je;ne;joue;pas;à;ce;jeu-là;."],
    ["j';avoue","6;oue","J';avoue;mon;ignorance;à;ce;sujet;!"],
    ["on;distribue","1;ue","On;distribue;un;million;de;tracts;par;an;."],
    ["tu;conclus","4;us","Qu'est-ce;que;tu;en;conclus;?"],
    ["elle;exclut","5;ut","Elle;n'exclut;aucune;piste;."],
    ["tu;dénoues","7;oues","Tu;dénoues;tes;tensions;par;une;respiration;profonde;."],
    ["ils;incluent","3;uent","Ils;incluent;les;frais;de;transport;dans;leurs;prix;."],
    ["tu;éternues","2;ues","Tu;éternues;souvent;,;tu;as;froid;?"],
    ["ils;continuent","3;uent","Ils;continuent;d';avancer;malgré;les;difficultés;."],
    ["il;recoud","10;oud","Le;travail;de;l';association;recoud;le;lien;familial;et;social;."],
    ["tu;mues","2;ues","Vu;les;variations;actuelles;de;ta;voix;,;je;pense;que;tu;mues;."],
    ["je;résous","11;ous","Je;résous;facilement;les;problèmes;informatiques;."],
    ["elles;polluent","3;uent","Certaines;usines;polluent;l'atmosphère;."],
    ["tu;salues","2;ues","Pourquoi;ne;salues;-;tu;pas;cette;décision;?"],
    ["elle;remue","1;ue","Elle;remue;ciel;et;terre;pour;retrouver;son;frère;."],
    ["ils;renouent","8;ouent","Ils;renouent;des;liens;d'amitié;."],
    ["elle;contribue","1;ue","La;médiation;contribue;à;améliorer;la;communication;."],
    ["elles;clouent","8;ouent","Les;intempéries;clouent;les;avions;au;sol;."],
    ["je;secoue","6;oue","Je;secoue;la;tête;en;signe;de;désapprobation;."],
    ["elle;dissout","12;out","Elle;dissout;son;chagrin;dans;l';alcool;."],
    ["tu;mouds","9;ouds","Tu;mouds;un;échantillon;de;café;pour;le;déguster;."]
];
var lenDonneesD = donneesD.length;

for (let i=0; i<lenDonneesD; i++){ // nettoyage de donneesD
    buffer=[];
    pronVerbeD = donneesD[i][0].split(';');
    pronD = pronVerbeD[0]
    if (pronD[pronD.length-1]!="'") { // si le pronom ne finit avec une apostrophe on veut espace avec le verbe
        pronD = pronVerbeD[0]+" ";
    };
    verbeD = pronVerbeD[1]; // on récupère le verbe
    termD = donneesD[i][1].split(';')[1]; // On récupère la terminaison : "6;oue" -> "oue"
    avantApresD = donneesD[i][2].split(verbeD); // Partie de la phrase avant et après le verbe
    avantD = avantApresD[0].replaceAll(";"," ").replaceAll(" ,",",").replaceAll(" .",".").replaceAll(" - ","-").replaceAll("' ","'"); // On enlève les espaces en trop autour de la ponctuation
    if (avantD[avantD.length-1]!="'"){ // si la partie avant le verbe ne finit pas par une apostrophe on ajoute un espace à la fin
        avantD = avantD+" ";
    };
    apresD = avantApresD[1].replaceAll(";"," ").replaceAll(" ,",",").replaceAll(" .",".").replaceAll(" - ","-").replaceAll("' ","'"); // On enlève les espaces en trop autour de la ponctuation
    buffer.push(pronD,verbeD,termD,avantD,apresD); // 0: pronom; 1: verbe, 2: terminaison, 3: avant le verbe, 4: après le verbe
    donneesD[i] = buffer;
}

var ordreTerm = []; // ordre des terminaisons à selectionner
for (let i =0; i<lenDonneesD; i++){ // ajout des terminaisons dans le tableau
    ordreTerm.push(donneesD[i][2]);
};
var termEnCours = 0;
var verbeInput = ""; // verbe à saisir par l'utilisateur
var clicsFauxD = 0;
var inputFauxD = 0;
var permClicD = true;
var permValiderD = true; // permetttra de bloquer la validation de la réponse lorsque la réponse s'affiche automatiquement lorsque l'utilisateur a atteint son nbr max d'essais
var pointsD = 0; // points que l'utilisateur gagnera au cours de l'exercice
var pointAutoriseD = true;
var totalD = lenDonneesD*2; // nbr total de points possible (*2 car pour chaque donnée clic + saisie du verbe)

// Au chargement de la page
window.onload=function(){
    // Ecrire le chemin de l'audio de la consigne
    $('#consigneD').attr('src',cheminConsignes+cheminConsigneD);
    // Ecrire les terminaisons
    for (let i=0; i<terminaisonsD[0].length; i++){ // terminaisons 1
        $('#term1').append('<p class="termD" id="'+terminaisonsD[0][i]+'">'+terminaisonsD[0][i]+'</p>');
    };
    for (let i=0; i<terminaisonsD[1].length; i++){ // terminaisons 2
        $('#term2').append('<p class="termD" id="'+terminaisonsD[1][i]+'">'+terminaisonsD[1][i]+'</p>');
    };
    // Mélanger aléatoirement l'ordre de surlignage des terminaisons et l'ordre d'affichage des réponses
    shuffleArray(ordreTerm); // (fonction dans general.js)
    shuffleArray(donneesD); // (fonction dans general.js)
    // Ecrire les réponses dans la div
    $('#txtExoTypeD').html('<span class="textD onclick '+donneesD[0][2]+'" id="D0" data-avant="'+donneesD[0][3]+'" data-verbe="'+donneesD[0][1]+'" data-apres="'+donneesD[0][4]+'" onClick="clicVerbeD(\'D0\')">'+donneesD[0][0]+' '+donneesD[0][1]+'</span>'); // 1er elt <span> pour éviter un décalage d'affichage des colonnes
    for (let i=1; i<lenDonneesD; i++){ 
        $('#txtExoTypeD').append('<p class="textD onclick '+donneesD[i][2]+'" id="D'+i+'" data-avant="'+donneesD[i][3]+'" data-verbe="'+donneesD[i][1]+'" data-apres="'+donneesD[i][4]+'" onClick="clicVerbeD(\'D'+i+'\')">'+donneesD[i][0]+donneesD[i][1]+'</p>');
    };
    // 1ere terminaison à surligner 
    $("#"+ordreTerm[termEnCours]).css('background',surlignD); //(general.js)
    clignoterBackground(ordreTerm[termEnCours],surlignD,coulBg);
    // Réinitialiser l'input verbe
    $("#verbeD").val(''); 
};

// fonction clic sur le verbe
function clicVerbeD(id) {
    if (permClicD){
        if($("#"+id).hasClass(ordreTerm[termEnCours])){ //bonne réponse
            repJuste();// afficher la coche verte (fonction dans general.js)
            if (pointAutoriseD){
                pointsD++;
            };
            termJusteD(id);
        } else { // mauvaise réponse, afficher croix rouge
            repFausse(); // afficher la croix rouge (fonction dans general.js)
            pointAutoriseD = false;
            clicsFauxD++;
            $('#'+id).css('color',coulRepFausse);
            setTimeout(() => {
                $('#'+id).css('color',coulPolice);
                if (clicsFauxD>=nbrEssaisMax){ // au bout de 3 mauvaises réponse on affiche quand même la phrase avec l'input
                    // recup le 1er vb pas déja cliqué qui correspond à la term et obtenir l'id d'une réponse juste :
                    idJuste = document.getElementsByClassName('textD onclick '+ordreTerm[termEnCours])[0].id;
                    termJusteD(idJuste);
                };
            }, vitesseFadeOut);
        };
    };
};

// Fonction valider la réponse
function validerReponseD(){
    if ($("#verbeD").val()==verbeInput){
        // bonne réponse
        repJuste();  // afficher la coche verte (fonction dans general.js)
        if (pointAutoriseD){
            pointsD++;
        };
        motSuivantD();
    } else { // mauvaise réponse, afficher croix rouge
        inputFauxD++;
        repFausse(); // afficher la croix rouge (fonction dans general.js)
        pointAutoriseD = false;
        if (inputFauxD>=nbrEssaisMax){ // au bout de 3 essais de saisie du verbe, afficher le verbe correct
            permValiderD = false; // l'utilisateur ne peut pas valider la bonne réponse qui a été affichée automatiquement
            document.getElementById("verbeD").readOnly = true; // empêcher l'utilisateur de modifier l'input lorsque la bonne réponse s'affiche
            setTimeout(() => {
                $("#verbeD").val(verbeInput); // on affiche le verbe correct
                clignoterReponse('verbeD',coulPolice,coulRepJuste);
                setTimeout(() => {
                    motSuivantD(); // passage au mot suivant
                }, vitesseClignotement*5);
            }, vitesseFadeOut);
        };
    };
    $("#verbeD").val(''); // réinitialiser l'input
};

// Valider le verbe saisi avec le bouton
$("#validerD").on({
    "click" : function(){
        if (permValiderD){
            validerReponseD();  
        };      
    }
});

// Valider le verbe saisi avec la touche Entrée
$(document).on("keypress", "input", function(e){
    if(e.which == 13){
        if (permValiderD){
            validerReponseD();  
        }; 
    };
});

// Fonction terminaison cliquée juste, afficher la phrase avec l'input
function termJusteD(id) {
    permClicD = false;
    pointAutoriseD = true;
    clicsFauxD = 0; // réinitialisation du cpt de clics faux sur les pronoms/verbes
    $("#avant").text($("#"+id).data('avant')); // écrire la phrase dans la div réponse
    $("#apres").text($("#"+id).data('apres'));
    $("#pronVerbe").text($("#"+id).text());
    verbeInput=$("#"+id).data('verbe'); // récupération du verbe que l'utilisateur devra saisir
    $("#reponseD").show();//afficher la div où il faut saisir le verbe
    $("#"+id).css('color', repDejaCliquee); // mettre en gris la réponse juste (general.js)
    document.getElementById(id).removeAttribute("onclick"); // désactiver le clic sur la réponse juste et enlever la classe onclick
    document.getElementById(id).classList.remove("onclick"); // enlever la classe "onclick" pour que la réponse ne soit pas choisit quand l'utilisateur se trompe 3 fois
};

// Fonction pour cacher la div avec l'input et passer au mot suivant
function motSuivantD(){
    permClicD = true;
    pointAutoriseD = true;
    permValiderD = true;
    inputFauxD = 0; // réinitialisation du cpt de saisies fausses du verbes par l'utilisateur
    document.getElementById("verbeD").readOnly = false; // permettre à l'utilisateur d'écrire dans l'input
    $("#verbeD").val(''); // réinitialiser l'input
    $("#reponseD").hide(); // cacher la div
    $("#"+ordreTerm[termEnCours]).css('background',coulBg); //enlever le surlignage orange de la terminaison et remettre l'arrière plan (general.js)
    termEnCours ++; // passage à la terminaison suivante
    setTimeout(() => {
        if (termEnCours==ordreTerm.length){
            alert("Votre score est de "+Math.round((pointsD/totalD)*100)+"%\n\nVous avez réussi "+pointsD+" exercices sur "+totalD);
        } else {
            $("#"+ordreTerm[termEnCours]).css('background',surlignD); // surligner la terminaison suivante
            clignoterBackground(ordreTerm[termEnCours],surlignD,coulBg);
        };
    }, timeoutMotSuivant);
};