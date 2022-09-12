-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Mer 16 Février 2022 à 16:45
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

-- --------------------------------------------------------

--
-- Structure de la table `EXERCICE`
--

CREATE TABLE `EXERCICE` (
  `idExercice` int(11) NOT NULL,
  `idType` int(11) NOT NULL,
  `numExo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `MODULE`
--

CREATE TABLE `MODULE` (
  `idModule` int(11) NOT NULL,
  `nomModule` varchar(50) NOT NULL,
  `numModule` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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

-- --------------------------------------------------------

--
-- Structure de la table `UTILISATEUR`
--

CREATE TABLE `UTILISATEUR` (
  `idUser` int(11) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `mdp` varchar(30) NOT NULL,
  `mail` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  ADD PRIMARY KEY (`idUser`),
  ADD KEY `mail_2` (`mail`);

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
