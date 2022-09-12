// Script Démo exercice type E (ExotypeE-3-2.html)
 
// Variables utilisées
terminaisonsE = [
    [ // groupe 1
         // groupe 1_1
            ["ue","ues","uent","us","ut"],
            ["ie","ies","ient","is","it","his","hit"],
            ["oue","oues","ouent","ouds","oud","ous","out"],
            ["a","as","ats","at"] 
        , // groupe 1_2
            ["oie","oies","oient","ois","oit"],
            ["eins","eint","ains","aint","ens","ent"],
            ["oins","oint"],
            ["ens","ent","ends","end","ands","and"],
            ["onds","ond","ons","ont","omps","ompt"]
        , // groupe 1_3
            ["ée","ées","éent","ai","ez"],
            ["aie","aies","aient","ais","ait"],
            ["ets","et","es","est","hais","hait"],
            ["os","ôt","aux","aut"],
            ["eux","eut","eus"] 
    ], 
    [ // groupe 2
         // groupe 2_1
            ["me","mes","ment","mme","mmes","mment"],
            ["ne","nes","nent","nne","nnes","nnent"],
            ["re","res","rent","rre","rres","rrent"],
            ["rs","rt","rds","rd"]
        , // groupe 2_2
            ["le","les","lent","lle","lles","llent"],
            ["pe","pes","pent","ppe","ppes","ppent"],
            ["te","tes","tent","tte","ttent"]
        , //groupe 2_3
            ["se","ses","sent","sse","sses","ssent"],
            ["ce","ces","cent"],
            ["ze","zes","zent","se","ses","sent"],
            ["fe","fes","fent","ffe","ffent"]
    ],
    [ // groupe 3
         // groupe 3_1
            ["ille","illes","illent","lle","lles","llent"],
            ["ye","yes","yent"],["ge","ges","gent"],
            ["que","ques","quent"]
        ,//groupe 3_2
            ["che","ches","chent"],
            ["gue","gues","guent"],
            ["be","bes","bent"]
        ,//groupe 3_3
            ["de","des","dent"],
            ["ve","ves","vent"],
            ["gne","gnes","gnent"],
            ["xe","xes","xent"]
        ]
]; 

// Formation des différents groupes de terminaisons 
function ecrireGroupeTermE(indLigne, indMin, indMax){
    groupe = '';
    htmlBuffer = [];
    for (i=indMin; i<indMax+1; i++){
        htmlBuffer.push('<div class='+classTermE+'>');
        for (j=1; j<terminaisonsE[indLigne][i].length+1; j++){
            id_termE = terminaisonsE[indLigne][i][j-1]+String(j);
            if (id_termE=="ée1") { // pas de lettre accentuée dans les id
                id_termE="ee1"
            } else if (id_termE=="ées2"){
                id_termE="ees2"
            } else if (id_termE=="éent3"){
                id_termE="eent3"
            }else if (id_termE=="ôt2"){
                id_termE="ot2"
            };
            htmlBuffer.push('<span id="'+id_termE+'" onclick="clicTermE(\''+id_termE+'\', \''+terminaisonsE[indLigne][i][j-1]+'\', '+j+')">'+terminaisonsE[indLigne][i][j-1]+'</span>');
        };
        htmlBuffer.push('</div>');
    };
    groupe = htmlBuffer.join('\n');
    return groupe;
};
groupeE_1_1 = ecrireGroupeTermE(0, 0, 3);
groupeE_1_2 = ecrireGroupeTermE(0, 4, 8);
groupeE_1_3 = ecrireGroupeTermE(0, 9, 13);
groupeE_2_1 = ecrireGroupeTermE(1, 0, 3);
groupeE_2_2 = ecrireGroupeTermE(1, 4, 6);
groupeE_2_3 = ecrireGroupeTermE(1, 7, 10);
groupeE_3_1 = ecrireGroupeTermE(2, 0, 3);
groupeE_3_2 = ecrireGroupeTermE(2, 4, 6);
groupeE_3_3 = ecrireGroupeTermE(2, 7, 10);

donneesE = [ // proche de la sortie brute de la BD
    ["/L';/organisme;s';habitue;à;l';absence;de;nicotine;.","habitue",1,1,1,"s01d01.mp3"],
    ["/Je;finis;par;être;convaincue;par;ses;arguments;.","finis",1,2,4,"s01d02.mp3"],
    ["/La;/voiture;glisse;sur;le;verglas.","glisse",2,8,4,"s01d03.mp3"],
    ["/Tu;n';oublies;pas;d';éteindre;en;partant;?","oublies",1,2,2,"s01d04.mp3"],
    ["Est;-;ce;que;/l';/acide;dissout;le;calcaire;?","dissout",1,3,7,"s01d05.mp3"],
    ["/Les;/pays;/riches;pillent;les;ressources;naturelles;.","pillent",3,1,6,"s01d06.mp3"],
    ["/On;nettoie;l';écran;à;l';aide;d';un;chiffon;doux.","nettoie",1,5,1,"s01d07.mp3"],
    ["/J';agrafe;l';original;et;le;duplicata;.","agrafe",2,11,1,"s01d08.mp3"],
    ["/Ces;/deux;/collaborateurs;échangent;-;ils;leurs;idées;?","échangent",3,3,3,"s01d09.mp3"],
    ["/Elle;tient;compte;de;mes;remarques;.","tient",1,6,6,"s01d10.mp3"],
    ["/J';apprends;le;chinois;depuis;deux;ans;.","apprends",1,8,3,"s01d11.mp3"],
    ["/Ce;/témoignage;contredit;son;récit;.","contredit",1,2,5,"s01d12.mp3"],
    ["/L';/entreprise;répond;à;un;appel;d';offre.","répond",1,9,2,"s01d13.mp3"],
    ["/Nous;vous;disons;chaleureusement;merci;.","disons",1,9,3,"s01d14.mp3"],
    ["/Vous;lisez;le;mode;d';emploi.","lisez",1,10,5,"s01d15.mp3"],
    ["/Tu;mets;tes;articles;en;ligne;prochainement;?","mets",1,12,1,"s01d16.mp3"],
    ["/Tu;ne;peux;pas;accepter;ça;!","peux",1,14,1,"s01d17.mp3"],
    ["/Tu;serres;trop;fort;les;dents;en;dormant;.","serres",2,3,5,"s01d18.mp3"],
    ["Vont;-;/ils;enfin;se;décider;à;partir;?","Vont",1,9,4,"s01d19.mp3"],
    ["/Je;jette;chaque;matin;un;coup;d'œil;aux;gros;titres;.","jette",2,7,4,"s01d20.mp3"]
]; // 0: phrase; 1: verbe; 2: n° ligne term; 3: n° colonne term; 4: n° term; 5: nom fichier audio
var lenDonneesE = donneesE.length;
var indEnCoursE = 0;
var groupeEnCoursE = "";
var termEnCoursE = "";
var numTermEnCoursE;
var verbeInput = ""; // verbe à saisir par l'utilisateur
var clicsFauxE = 0;
var inputFauxE = 0;
var clicAutoriseE = true; // permettra de bloquetr les clics sur les terminaisons lorsque le nb d'essais max sera atteint
var permValiderE = true;
var pointsE = 0; // points que l'utilisateur gagnera au cours de l'exercice
var totalE = lenDonneesE*2; // nbr total de points possibles
var pointAutoriseE = true;

// nettoyage de donneesE
for (let i=0; i<lenDonneesE; i++){ 
    // Nettoyer la phrase pour pouvoir l'écrire directement dans un <p>
    splitDonneesE = donneesE[i][0].split(";"); //["/Je","jette","chaque","matin" ...]
    eltE = "";
    for(let j=0; j<splitDonneesE.length; j++){
        if(splitDonneesE[j][0]=="/"){ // "/organisme"
            splitDonneesE[j]="<span class=\"bold\">"+splitDonneesE[j].replace("/","")+"</span>"; //"<span class=\"bold\">organisme</span>"
        };
        eltE = eltE+" "+splitDonneesE[j]; // "<span class=\"bold\">L'</span> <span class=\"bold\">organisme</span>"
    };
    donneesE[i][0] = eltE.replaceAll(" .",".").replaceAll(" - ","-").replaceAll("</span> <span class=\"bold\">"," ").replaceAll("' ","'"); // "<span class=\"bold\">L'organisme</span> s'habitue à l'absence de nicotine.""
    donneesE[i][0]=donneesE[i][0];
    // Mettre le chemin complet de l'audio
    donneesE[i][5]=cheminDonneesE+donneesE[i][5];
    // Ajouter la terminaison correspondante dans le tableau
    donneesE[i][6]=terminaisonsE[donneesE[i][2]-1][donneesE[i][3]-1][donneesE[i][4]-1];
};

// Au chargement de la page
window.onload=function(){
    // Ecrire le chemin de l'audio de la consigne
    $('#consigneE').attr('src',cheminConsignes+cheminConsigneE);
    // Mélanger l'ordre des données
    shuffleArray(donneesE);
    // Besoin que l'utilisateur clique une fois sur la page pour pouvoir lancer automatiquement un son
    $('#paragValiderE, #verbeE').hide();
    $('#reponseE').append('<div id="commencerE">Cliquez ici pour commencer</div>');
};

// Ecouteur Commencer (permet d'obtenir un clic de l'utilisateur sur la page afin que la lecture automatique des audios soit autorisée)
$("#reponseE").one({
    "click" : function(){
        $('#paragValiderE, #verbeE').show(); 
        $('#reponseE').hide(); 
        $('#commencerE').text('');     
        phraseEnCoursE(); 
    }
});

// Fonction clic sur une terminaison
function clicTermE(id, term, num_term){
    if (clicAutoriseE){
        if(termEnCoursE==term & numTermEnCoursE==num_term ){ // bonne réponse
            repJuste(); // afficher la coche verte (fonction dans general.js)
            if (pointAutoriseE){
                pointsE++;
            };
            affPhraseInputE();
        } else { // mauvaise réponse
            clicsFauxE++;
            repFausse(); // afficher la croix rouge (fonction dans general.js)
            pointAutoriseE = false;
            $('#'+id).css('color',coulRepFausse);
            setTimeout(() => {
                $('#'+id).css('color',coulPoliceTermE);
                if (clicsFauxE >= nbrEssaisMax){ // afficher la bonne réponse
                    clicAutoriseE = false; // empêche de cliquer sur une terminaison lorsque la juste va s'afficher
                    idJusteE = termEnCoursE+numTermEnCoursE;
                    if (idJusteE=="ée1") { // pas de lettre accentuée dans les id
                        idJusteE="ee1"
                    } else if (idJusteE=="ées2"){
                        idJusteE="ees2"
                    } else if (idJusteE=="éent3"){
                        idJusteE="eent3"
                    }else if (idJusteE=="ôt2"){
                        idJusteE="ot2"
                    };
                    clignoterReponse(idJusteE, coulPoliceTermE, coulRepJuste); 
                    setTimeout(() => {
                        affPhraseInputE();
                    }, vitesseClignotement*5);
                };
            }, vitesseFadeOut);
        }
    }
};

// Fonction afficher la div avec la phrase où l'utilisateur doit saisir le verbe correct
function affPhraseInputE(){
    pointAutoriseE = true;
    clicAutoriseE = false; // empêche de cliquer sur une terminaison lorsque la phrase à compléter est affichée
    verbeInput = donneesE[indEnCoursE][1]; // verbe correct attendu
    splitAvantApres = donneesE[indEnCoursE][0].split(verbeInput); // isoler les mots avant et après le verbe
    if (splitAvantApres[0].length==1){ // si le verbe est en début de phrase on a besoin de conserver la majuscule initiale
        $('#verbeE').attr('onkeyup','');
    } else {
        $('#verbeE').attr('onkeyup',"transformInput('verbeE')");
    };
    $('#avant').html(splitAvantApres[0]);
    $('#apres').html(splitAvantApres[1]);
    $('#reponseE').show();
};

// Fonction valider la réponse
function validerReponseE(){
    if ($("#verbeE").val()==verbeInput){ // bonne réponse
        repJuste();  // afficher la coche verte (fonction dans general.js)
        if (pointAutoriseE){
            pointsE++;
        };
        phraseSuivanteE();
    } else { // mauvaise réponse, afficher croix rouge
        inputFauxE++;
        repFausse(); // afficher la croix rouge (fonction dans general.js)
        pointAutoriseE = false;
        if (inputFauxE>=nbrEssaisMax){
            permValiderE = false; // l'utilisateur ne peut pas valider la bonne réponse qui a été affichée automatiquement
            document.getElementById("verbeE").readOnly = true; // empêcher l'utilisateur de modifier l'input lorsque la bonne réponse s'affiche
            setTimeout(() => {
                $("#verbeE").val(verbeInput); // on affiche le verbe correct
                clignoterReponse('verbeE',coulPolice,coulRepJuste);
                setTimeout(() => {
                    phraseSuivanteE();
                }, vitesseClignotement*5);
            }, vitesseFadeOut);
        }
    };
    $("#verbeE").val(''); // réinitialiser l'input
};

// Valider le verbe saisi avec le bouton
$("#validerE").on({
    "click" : function(){
        if (permValiderE){
            validerReponseE();  
        }; 
    }
});

// Valider le verbe saisi avec la touche Entrée
$(document).on("keypress", "input", function(e){
    if(e.which == 13){
        if (permValiderE){
            validerReponseE();  
        }; 
    }
});

// Fonction passage à la phrase suivante E
function phraseSuivanteE(){
    pointAutoriseE = true;
    $("#reponseE").hide(); // cacher la div
    document.getElementById("verbeE").readOnly = false; // permettre à l'utilisateur d'écrire dans l'input
    indEnCoursE++;
    if (indEnCoursE==lenDonneesE){
        alert("Votre score est de "+Math.round((pointsE/totalE)*100)+"%\n\nVous avez réussi "+pointsE+" exercices sur "+totalE);
    } else { // phrase suivante
        phraseEnCoursE(); 
    };
};

// Fonction Ecrire les terminaisons + lancer l'audio
function phraseEnCoursE(){
    clicsFauxE = 0; // réinitialisation du cpt de clics faux sur les terminaisons
    clicAutoriseE = true; // autoriser le clic sur les terminaisons
    inputFauxE = 0; // réinitialisation du cpt de verbes faux saisis par l'utilisateur
    permValiderE = true;
    $("#verbeE").val(''); // réinitialiser l'input
    $("#audioDonneesE").attr('src',donneesE[indEnCoursE][5]);
    $("#audioDonneesE")[0].play();
    termEnCoursE = donneesE[indEnCoursE][6];
    numTermEnCoursE = donneesE[indEnCoursE][4];
    if (donneesE[indEnCoursE][2]==1){ // groupe 1 de terminaisons (ligne 1 de la version web)
        switch (donneesE[indEnCoursE][3]) { // numéro de la colonne du groupe 1
            case 1:
            case 2:
            case 3:
            case 4:
              groupeEnCoursE = groupeE_1_1;
              break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
              groupeEnCoursE = groupeE_1_2;
              break;
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
              groupeEnCoursE = groupeE_1_3;
              break;
          }
    } else if (donneesE[indEnCoursE][2]==2){ // groupe 2 de terminaisons (ligne 2 de la version web)
        switch (donneesE[indEnCoursE][3]) { // numéro de la colonne du groupe 2
            case 1:
            case 2:
            case 3:
            case 4:
              groupeEnCoursE = groupeE_2_1;
              break;
            case 5:
            case 6:
            case 7:
              groupeEnCoursE = groupeE_2_2;
              break;
            case 8:
            case 9:
            case 10:
            case 11:
              groupeEnCoursE = groupeE_2_3;
              break;
          }
    } else { // groupe 3 de terminaisons (ligne 3 de la version web)
        switch (donneesE[indEnCoursE][3]) { // numéro de la colonne du groupe 3
            case 1:
            case 2:
            case 3:
            case 4:
              groupeEnCoursE = groupeE_3_1;
              break;
            case 5:
            case 6:
            case 7:
              groupeEnCoursE = groupeE_3_2;
              break;
            case 8:
            case 9:
            case 10:
            case 11:
              groupeEnCoursE = groupeE_3_3;
              break;
          }
    };
    $('#flexTerminaisonsE').html(groupeEnCoursE); // Ecrire le groupe avec la bonne terminaison dans la page
    clignoterReecouter(); // fonction dans general.js
};