// Script Démo exercice type H (ExotypeH-4-6.html)

// Variables utilisées
var phrasesH = ["Il les accueille.","Nous le regrettons.","Elle le rassure.","Ils les privilégient.","Il le réclame."];
var reponsesH = [
    // "Il les accueille" reponsesH[0]
    [["Yann accueille sa mère.","faux"],["Antoine accueille les premiers clients.","juste"],["Sabine accueille le personnel de l'agence.","faux"],["Fabrice accueille les retardataires.","juste"],["Cette responsable de l'agence accueille les nouvelles idées.","faux"]],
    // "Nous le regrettons" reponsesH[1]
    [["Mon mari et moi regrettons cet emprunt.","juste"],["Mon amie et moi regrettons notre attitude maladroite.","faux"],["Son frère et moi regrettons ce banquier compréhensif.","juste"],["Mes confrères et moi-même regrettons l'usage de la force de la police.","juste"],["Mes collègues et moi regrettons cette situation délicate.","faux"]],
    // "Elle le rassure." reponsesH[2]
    [["La conseillère rassure ce client inquiet.","juste"],["Le vigile rassure les employés effrayés.","faux"],["La patronne rassure l'investisseur dubitatif.","juste"],["Le vote du budget rassure la commerciale.","faux"],["Le personnel rassure ce stagiaire débutant.","faux"]],
    // "Ils les privilégient." reponsesH[3]
    [["Certains fabricants privilégient les emballages recyclés.","juste"],["Ce faible taux privilégie les jeunes primo-acquéreurs.","faux"],["Ces initiatives locales privilégient les besoins des personnes âgées.","faux"],["Les laboratoires privilégient les produits sans ordonnance.","juste"],["Les entreprises privilégient la mobilité interne.","faux"]],
    // "Il le réclame." reponsesH[4]
    [["Le personnel réclame la réouverture de l'agence.","faux"],["Le plaignant réclame son dû.","juste"],["L'état réclame les justificatifs des comptes douteux.","faux"],["Le parlement réclame un nouveau sursis.","juste"],["Le nouveau directeur réclame le silence complet.","juste"]]
]; // 0: réponse; 1: classe (juste ou faux)
var nbPhrasesH = phrasesH.length;
var cptPhraseH = 0; // indice de la phrase en cours dans phraseH
var nbRepEnCours; // nb de réponses pour la phrase en cours
var cptClicH = 0; // permet de finir une série et de passer à la suivante 
var cptFctH = 0; // permet de savoir quand l'exercice est fini
var pointsH = 0; // cpt de bonnes réponse de l'utilisateur
var totalH = 0; // total de points possible
for (let i=0; i<reponsesH.length; i++){
    for (let j=0; j<reponsesH[i].length; j++){
        totalH++;
    }
}

// Fonction écrire un texte de l'exercice
function ecrireTextesH(){
    cptFctH++;
    if (cptFctH>nbPhrasesH){
        alert("Votre score est de "+Math.round((pointsH/totalH)*100)+"%\n\nVous avez réussi "+pointsH+" exercices sur "+totalH);
    } else {
        $("#phraseH").text(phrasesH[cptPhraseH]);
        $("#txtExoTypeH, #symbJusteFauxH").text(''); // on vide les zones de texte avant d'écrire les suivants
        nbRepEnCours=reponsesH[cptPhraseH].length; // nb de réponses pour la phrase en cours
        for (let i=0; i<nbRepEnCours; i++){ // Ecrire les réponses
            $("#txtExoTypeH").append('<p id="H'+i+'" data-rep="'+reponsesH[cptPhraseH][i][1]+'"><span class="spanTxtH">'+reponsesH[cptPhraseH][i][0]+'</span><span id="cocheH'+i+'" class="cocheH" data-id_cpt="'+i+'" data-symb="juste" onclick="clicH(\'cocheH'+i+'\')"> ✓ </span><span id="croixH'+i+'" class="croixH" data-id_cpt="'+i+'" data-symb="faux" onclick="clicH(\'croixH'+i+'\')"> X </span></p>');
        };
    }; 
    cptPhraseH++;
};

// Au chargement de la page
window.onload=function(){
    // Ecrire le chemin de l'audio de la consigne
    $('#consigneH').attr('src',cheminConsignes+cheminConsigneH);
    // Mélanger les réponses pour chaque phrase
    for (let i=0; i<nbPhrasesH; i++){
        shuffleArray(reponsesH[i]);
    };
    // Ecrire les 1ers textes de l'exo
    ecrireTextesH();
};

// Fonction clic sur croix ou coche
function clicH(id){
    cptClicH++;
    cpt_repH = $('#'+id).data('id_cpt')
    if ($('#'+id).data('symb')==$('#H'+cpt_repH).data('rep')) {
        //bonne réponse
        repJuste(); // afficher la coche verte (fonction dans general.js)
        pointsH++;
        $('#H'+cpt_repH).css('color',repDejaCliquee); // réponse en gris
    } else {
        //mauvaise réponse
        repFausse();  // afficher la croix rouge (fonction dans general.js)
        $('#H'+cpt_repH).css('color',coulRepFausse); // réponse en rouge
    };
    $('#cocheH'+cpt_repH+', #croixH'+cpt_repH).css('color',repDejaCliquee); // coche et croix en gris
    document.getElementById("cocheH"+cpt_repH).removeAttribute("onclick"); // désactiver le clic sur la réponse
    document.getElementById("croixH"+cpt_repH).removeAttribute("onclick"); // désactiver le clic sur la réponse
    // Fin de la première phrase, passage à la suivante
    if(cptClicH==nbRepEnCours) { // si on a cliqué sur toutes les réponses
        setTimeout(() => {
            ecrireTextesH();
            cptClicH = 0;
        }, timeoutH);  
    };
};