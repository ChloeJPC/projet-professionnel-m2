-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Ven 18 Février 2022 à 10:03
-- Version du serveur :  10.1.48-MariaDB-0ubuntu0.18.04.1
-- Version de PHP :  7.2.24-0ubuntu0.18.04.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `choquetc`
--

-- --------------------------------------------------------

--
-- Structure de la table `DONNEE`
--

CREATE TABLE `DONNEE` (
  `idDonnee` int(11) NOT NULL,
  `idExercice` int(11) NOT NULL,
  `valeurDonnee` text NOT NULL,
  `categorie` text NOT NULL,
  `nomFichierDonnee` varchar(30) NOT NULL,
  `serie` int(11) NOT NULL,
  `reponse` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `DONNEE`
--

INSERT INTO `DONNEE` (`idDonnee`, `idExercice`, `valeurDonnee`, `categorie`, `nomFichierDonnee`, `serie`, `reponse`) VALUES
(2, 2, 'La;communication;non;verbale;repose;surtout;sur;des;gestes;variés;,;des;attitudes;corporelles;et;des;expressions;du;visage;.;Mais;elle;s\';exprime;aussi;à travers;les;silences;,;la;distance;entre;les;interlocuteurs;et;d\';autres;éléments;significatifs;du;contexte;.\n', '2;1;8;3;7;8;4;2;1;3;0;2;1;3;10;2;1;5;1;0;10;6;6;7;8;4;2;1;0;2;1;4;2;1;10;2;3;1;3;5;1;0\r\n', '', 1, 0),
(3, 3, 'Le;système;solaire;est formé;essentiellement;d\';une;étoile;brillante;,;le;soleil;,;et;de;huit;planètes;tournant;indéfiniment;autour de;lui;.;Il;les;éclaire;et;leur;dispense;sa;chaleur;.', '2;1;3;7;8;4;2;1;3;0;2;1;10;4;2;1;7;8;4;6;0;6;6;7;10;6;7;2;1;0', '', 1, 0),
(4, 4, 'tes;nouvelles;vidéos', '', '', 1, 1),
(5, 4, 'ma;nouvelle;adresses', '', '', 2, 0),
(6, 4, 'des;œuf;frais', '', '', 3, 0),
(7, 4, 'son;nouvel;ordinateur', '', '', 4, 1),
(8, 4, 'une;soupe;froide', '', '', 5, 1),
(9, 4, 'des;gens;très;riches', '', '', 6, 1),
(10, 4, 'des;films;assez;triste', '', '', 7, 0),
(11, 4, 'quelques;menus;très;économiques', '', '', 8, 1),
(12, 4, 'des;appels;trop;brefs', '', '', 9, 1),
(13, 4, 'des;leçons;trop;brève', '', '', 10, 0),
(14, 4, 'une;veste;blanche;et;noir', '', '', 11, 0),
(15, 4, 'une;eau;propre;,;claire;et;froide', '', '', 12, 1),
(16, 4, 'un;café;noir;,;chaud;et;sucrés', '', '', 13, 0),
(17, 4, 'la;population;mondiale;jeune;et;active', '', '', 14, 1),
(18, 4, 'les;cinq;grands;ports;maritime;français', '', '', 15, 0),
(19, 4, 'les;deux;autre;maisons;mitoyennes', '', '', 16, 0),
(20, 4, 'de;petits;exercices;courts;mais;difficiles', '', '', 17, 1),
(21, 4, 'des;gestes;précis;,;habituels;et;machinals', '', '', 18, 0),
(22, 4, 'de;nombreux;villes;chinoises;,;polluées;et;surpeuplées', '', '', 19, 0),
(23, 4, 'des;bruits;insolites;,;secs;et;répétitifs', '', '', 20, 1),
(24, 4, 'des;outils;pratiques;,;car;solides;et;maniables', '', '', 21, 1),
(25, 4, 'des;pinceaux;professionnels;,;plats;,;ronds;ou;fin', '', '', 22, 0),
(26, 8, 'un;vieux;puits;large;,;sombre;et;profond', '', '', 23, 1),
(27, 8, 'des;gaz;toxiques;et;inodore;,;donc;dangereux', '', '', 24, 0),
(28, 8, 'deux;gros;poulets;fermiers;bios', '', '', 25, 1),
(29, 8, 'des;affiches;publicitaires;colorées;et;rigolote', '', '', 26, 0),
(30, 8, 'de;hautes;vagues;,;puissantes;et;dangereuse', '', '', 27, 0),
(31, 8, 'de;superbes;toiles;multicolores;ou;unies', '', '', 28, 1),
(32, 8, 'un;nouveau;système;informatique;encore;cher', '', '', 29, 1),
(33, 8, 'une;tablette;numérique;vraiment;très;cher', '', '', 30, 0),
(34, 8, 'des;enfants;intelligents;et;curieux;,;mais;agités', '', '', 31, 1),
(35, 8, 'une;gamine;intelligente;et;curieuse;,;mais;agité', '', '', 32, 0),
(36, 8, 'de;nombreuses;dépenses;inutiles;et;superflues', '', '', 33, 1),
(37, 8, 'des;erreurs;bancaires;fréquentes;,;importantes;et;difficilement;repérable', '', '', 34, 0),
(38, 8, 'd’anciens;écrans;plats;,;carrés;ou;rectangulaires', '', '', 35, 1),
(39, 8, 'des;locaux;professionnels;lumineux;et;très;modernes', '', '', 36, 1),
(40, 8, 'd\'anciennes;affiches;déchirées;,;carrés;ou;rectangulaires', '', '', 37, 0),
(41, 8, 'de;jeunes;apprentis;nerveux;,;encore;trop;débutants;et;inexpérimentés', '', '', 38, 1),
(42, 8, 'des;notices;gratuites;souvent;illisible;car;souvent;mal;traduites', '', '', 39, 0),
(43, 8, 'des;déchets;radioactifs;très;nocifs;et;trop;encombrant', '', '', 40, 0),
(44, 1, 'Les;enfants;jouent;et;crient;.', '2;1;7;10;7;0', 's01d01.mp3', 1, 0),
(45, 1, 'Le;chercheur;et;ses;doctorants;travaillent;.', '2;1;10;2;1;7;0', 's01d02.mp3', 2, 0),
(46, 1, 'Le;garagiste;ou;son;apprenti;testera;la;nouvelle;voiture;.', '2;1;10;2;1;7;2;3;1;0', 's01d03.mp3', 3, 0),
(47, 1, 'Les;travailleurs;voudraient;un;salaire;décent;ou;une;prime;conséquente;.', '2;1;7;2;1;3;10;2;1;3;0', 's01d04.mp3', 4, 0),
(48, 1, 'Le;taxi;a;déposé;ses;clients;et;leurs;bagages;.', '2;1;7;7;2;1;10;2;1;0', 's01d05.mp3', 5, 0),
(49, 1, 'Mon;mari;verra;le;médecin;ou;l\';infirmière;.', '2;1;7;2;1;10;2;1;0', 's01d06.mp3', 6, 0),
(50, 1, 'Le;maire;et;ses;adjoints;dirigeront;la;cérémonie;.', '2;1;10;2;1;7;2;1;0', 's01d07.mp3', 7, 0),
(51, 1, 'Les;jardiniers;planteront;des;platanes;ou;des;érables;.', '2;1;7;2;1;10;2;1;0', 's01d08.mp3', 8, 0),
(52, 5, 'Les;manifestants;pestent;et;revendiquent;.', '2;1;7;10;7;0', 's02d01.mp3', 1, 0),
(53, 5, 'La;secrétaire;a;patienté;puis;a;protesté;.', '2;1;7;7;10;7;7;0', 's02d02.mp3', 2, 0),
(54, 5, 'Les;hommes;et;les;femmes;sont;des;êtres;sociaux;.', '2;1;10;2;1;7;2;1;3;0', 's02d03.mp3', 3, 0),
(55, 5, 'Les;champignons;peuvent;coloniser;la;peau;ou;les;ongles;.', '2;1;7;7;2;1;10;2;1;0', 's02d04.mp3', 4, 0),
(56, 5, 'Les;serpents;et;les;lézards;sont;des;reptiles;.', '2;1;10;2;1;7;2;1;0', 's02d05.mp3', 5, 0),
(57, 5, 'Les;revendications;sont;considérables;mais;les;réponses;paraissent;sommaires;.', '2;1;7;3;10;2;1;7;3;0', 's02d06.mp3', 6, 0),
(58, 5, 'Des;lycéens;et;des;étudiants;arpentent;le;bitume;.', '2;1;10;2;1;7;2;1;0', 's02d07.mp3', 7, 0),
(59, 5, 'Les;paradis;fiscaux;attirent;les;malfaiteurs;ou;les;étourdis;.', '2;1;3;7;2;1;10;2;1;0', 's02d08.mp3', 8, 0),
(60, 6, 'La;neige;est;tombée;et;la;route;glisse;.', '2;1;7;7;10;2;1;7;0', 's03d01.mp3', 1, 0),
(61, 6, 'La;route;glisse;car;la;neige;est;tombée;.', '2;1;7;10;2;1;7;7;0', 's03d02.mp3', 2, 0),
(62, 6, 'Le;brouillard;cachait;la;route;et;les;arbres;.', '2;1;7;2;1;10;2;1;0', 's03d03.mp3', 3, 0),
(63, 6, 'Le;quartier;abrite;une;pharmacie;et;une;boucherie;.', '2;1;7;2;1;10;2;1;0', 's03d04.mp3', 4, 0),
(64, 6, 'Mon;voisin;prendra;le;bus;ou;son;vélo;.', '2;1;7;2;1;10;2;1;0', 's03d05.mp3', 5, 0),
(65, 6, 'Deux;gros;tilleuls;ombragent;la;cour;et;la;terrasse;.', '2;3;1;7;2;1;10;2;1;0', 's03d06.mp3', 6, 0),
(66, 6, 'Un;vent;violent;soufflait;et;les;feuilles;mortes;volaient;.', '2;1;3;7;10;2;1;3;7;0', 's03d07.mp3', 7, 0),
(67, 6, 'Une;pluie;fine;et;froide;mouille;la;place;centrale;et;les;rues;voisines;.', '2;1;3;10;3;7;2;1;3;10;2;1;3;0', 's03d08.mp3', 8, 0),
(68, 7, 'Les;parents;boivent;mais;les;enfants;trinquent;.', '2;1;7;10;2;1;7;0', 's04d01.mp3', 1, 0),
(69, 7, 'Son;jeune;frère;est;venu;puis;est;reparti;.', '2;3;1;7;7;10;7;7;0', 's04d02.mp3', 2, 0),
(70, 7, 'Tous;les;spectateurs;ont;applaudi;le;chanteur;et;ses;choristes;.', '2;2;1;7;7;2;1;10;2;1;0', 's04d03.mp3', 3, 0),
(71, 7, 'Le;guitariste;et;le;saxophoniste;jouent;un;morceau;connu;.', '2;1;10;2;1;7;2;1;3;0', 's04d04.mp3', 4, 0),
(72, 7, 'Le;nouveau;stagiaire;pratique;la;boxe;et;le;judo;.', '2;3;1;7;2;1;10;2;1;0', 's04d05.mp3', 5, 0),
(73, 7, 'Ces;étudiants;aiment;le;théâtre;et;la;peinture;.', '2;1;7;2;1;10;2;1;0', 's04d06.mp3', 6, 0),
(74, 7, 'Les;masques;dissimulent;les;visages;et;les;expressions;.', '2;1;7;2;1;10;2;1;0', 's04d07.mp3', 7, 0),
(75, 7, 'De;gros;ennuis;sont;arrivés;et;la;tension;est;montée;.', '2;3;1;7;7;10;2;1;7;7;0', 's04d08.mp3', 8, 0);

-- --------------------------------------------------------

--
-- Structure de la table `EXERCICE`
--

CREATE TABLE `EXERCICE` (
  `idExercice` int(11) NOT NULL,
  `idType` int(11) NOT NULL,
  `numExo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `EXERCICE`
--

INSERT INTO `EXERCICE` (`idExercice`, `idType`, `numExo`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 1, 2),
(6, 1, 3),
(7, 1, 4),
(8, 5, 1);

-- --------------------------------------------------------

--
-- Structure de la table `MODULE`
--

CREATE TABLE `MODULE` (
  `idModule` int(11) NOT NULL,
  `nomModule` varchar(50) NOT NULL,
  `numModule` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `MODULE`
--

INSERT INTO `MODULE` (`idModule`, `nomModule`, `numModule`) VALUES
(1, 'Le groupe nominal', 1),
(2, 'La phrase', 2),
(3, 'Verbes au présent de l\'indicatif', 3),
(4, 'Pronominalisation', 4),
(5, 'Verbes conjugués à un temps simple', 5),
(6, 'Accorder les participes passés', 6),
(7, 'Participes passés et adjectifs', 7),
(8, 'Homophones', 8);

-- --------------------------------------------------------

--
-- Structure de la table `SOUS_MODULE`
--

CREATE TABLE `SOUS_MODULE` (
  `idSousModule` int(11) NOT NULL,
  `nomSousModule` varchar(100) NOT NULL,
  `idModule` int(11) NOT NULL,
  `numSousModule` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `SOUS_MODULE`
--

INSERT INTO `SOUS_MODULE` (`idSousModule`, `nomSousModule`, `idModule`, `numSousModule`) VALUES
(1, 'Se tester', 1, 7),
(2, 'Reconnaître un verbe et un coordonnant', 2, 1),
(3, 'Déterminer la nature d\'un mot', 2, 5),
(4, 'Se familiariser avec la terminologie', 2, 6);

-- --------------------------------------------------------

--
-- Structure de la table `TYPE`
--

CREATE TABLE `TYPE` (
  `idType` int(11) NOT NULL,
  `nomCategorie` enum('Classique','Découvrir','Pratiquer','Test A','Test B') NOT NULL,
  `nomTypeExo` varchar(20) NOT NULL,
  `idSousModule` int(11) NOT NULL,
  `nomConsigne` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `TYPE`
--

INSERT INTO `TYPE` (`idType`, `nomCategorie`, `nomTypeExo`, `idSousModule`, `nomConsigne`) VALUES
(1, 'Classique', 'A', 2, 'A1.mp3'),
(2, 'Classique', 'B', 5, 'A5.mp3'),
(3, 'Classique', 'C', 4, 'A6.mp3'),
(4, 'Test A', 'Test A', 1, 'A7-A.mp3'),
(5, 'Test B', 'Test B', 1, 'A7-B.mp3');

-- --------------------------------------------------------

--
-- Structure de la table `UTILISATEUR`
--

CREATE TABLE `UTILISATEUR` (
  `idUser` int(11) NOT NULL,
  `login` varchar(30) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `mdp` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `UTILISATEUR`
--

INSERT INTO `UTILISATEUR` (`idUser`, `login`, `nom`, `prenom`, `mdp`) VALUES
(1, 'Chloé_Choquet', 'Choquet', 'Chloé', 'mdpCC'),
(2, 'Fiorella_Albasini', 'Albasini', 'Fiorella', 'mdpFA');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `DONNEE`
--
ALTER TABLE `DONNEE`
  ADD PRIMARY KEY (`idDonnee`),
  ADD KEY `idType` (`idExercice`);

--
-- Index pour la table `EXERCICE`
--
ALTER TABLE `EXERCICE`
  ADD PRIMARY KEY (`idExercice`),
  ADD KEY `idType` (`idType`);

--
-- Index pour la table `MODULE`
--
ALTER TABLE `MODULE`
  ADD PRIMARY KEY (`idModule`);

--
-- Index pour la table `SOUS_MODULE`
--
ALTER TABLE `SOUS_MODULE`
  ADD PRIMARY KEY (`idSousModule`),
  ADD KEY `idModule` (`idModule`);

--
-- Index pour la table `TYPE`
--
ALTER TABLE `TYPE`
  ADD PRIMARY KEY (`idType`),
  ADD KEY `idSousModule` (`idSousModule`);

--
-- Index pour la table `UTILISATEUR`
--
ALTER TABLE `UTILISATEUR`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `DONNEE`
--
ALTER TABLE `DONNEE`
  MODIFY `idDonnee` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;
--
-- AUTO_INCREMENT pour la table `EXERCICE`
--
ALTER TABLE `EXERCICE`
  MODIFY `idExercice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `MODULE`
--
ALTER TABLE `MODULE`
  MODIFY `idModule` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `SOUS_MODULE`
--
ALTER TABLE `SOUS_MODULE`
  MODIFY `idSousModule` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `UTILISATEUR`
--
ALTER TABLE `UTILISATEUR`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
