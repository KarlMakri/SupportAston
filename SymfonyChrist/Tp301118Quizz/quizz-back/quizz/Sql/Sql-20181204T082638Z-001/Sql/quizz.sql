-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 03 déc. 2018 à 19:50
-- Version du serveur :  5.7.21
-- Version de PHP :  7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `quizz`
--

-- --------------------------------------------------------

--
-- Structure de la table `answer`
--

DROP TABLE IF EXISTS `answer`;
CREATE TABLE IF NOT EXISTS `answer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correct` tinyint(1) NOT NULL,
  `question_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_DADD4A251E27F6BF` (`question_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `answer`
--

INSERT INTO `answer` (`id`, `label`, `correct`, `question_id`) VALUES
(1, 'Oui', 1, 2),
(2, 'Fragilisé les relations humaines', 1, 1),
(3, 'Non', 1, 3),
(4, 'Oui, il serait temps de s\'y mettre.', 1, 4),
(5, 'Complémentarité', 1, 5),
(6, 'Oui, il est recommandé de s\'en écarter', 1, 6),
(7, 'Oui, il contribue à l\'équilibre de l\'être humain', 1, 7),
(8, 'Oui, avec le temps, son trafic.', 1, 8),
(9, 'Oui, c\'est un prétexte pour partir, mais on expose à des risques , des erreurs de jeunesse.', 1, 9),
(10, 'Le mensonge, que le mensonge rien d\'autre. La vérité ne fait pas de chiffre', 1, 10),
(11, 'On ne choisit pas son corps', 0, 11),
(12, 'BioMan', 1, 12);

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Marketing et business'),
(2, 'Economie'),
(3, 'Sciences dures'),
(4, 'Technologie et informatique'),
(5, 'Environnement et géographie'),
(6, 'Santé'),
(7, 'Art et culture'),
(8, 'Droit'),
(9, 'Education et pédagogie'),
(10, 'Langues, presse et communication'),
(11, 'Histoire'),
(12, 'Pour le bac');

-- --------------------------------------------------------

--
-- Structure de la table `migration_versions`
--

DROP TABLE IF EXISTS `migration_versions`;
CREATE TABLE IF NOT EXISTS `migration_versions` (
  `version` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `migration_versions`
--

INSERT INTO `migration_versions` (`version`) VALUES
('20181203091515'),
('20181203100842'),
('20181203101235'),
('20181203104715');

-- --------------------------------------------------------

--
-- Structure de la table `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE IF NOT EXISTS `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) DEFAULT NULL,
  `label` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `difficulty` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_B6F7494E12469DE2` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `question`
--

INSERT INTO `question` (`id`, `category_id`, `label`, `difficulty`) VALUES
(1, 1, 'Quel est l’impact de la communication événementielle sur le comportement des clients et la performance commerciale ?', 2),
(2, 2, 'L’Etat dépense-t-il trop ?', 1),
(3, 3, 'Le corps, un objet problématique ?', 2),
(4, 4, 'Les réseaux sociaux, stratégie marketing en plein boom ?', 2),
(5, 5, 'Ville et campagne, complémentarité ou rivalité ?', 2),
(6, 6, 'L’intolérance au gluten, une vraie maladie ?', 2),
(7, 7, 'L’art est-il soumis à des règles ?', 3),
(8, 8, 'Le nom d’un domaine importe-t-il plus que la marque ?', 3),
(9, 9, 'Les voyages scolaires, quels impacts sur l’apprentissage des langues ?', 2),
(10, 10, 'Quel business model pour la presse ?', 3),
(11, 11, 'En quoi la vie des poilus a-t-elle été si difficile dans les tranchées ?', 2),
(12, 12, 'Comment définir un héros ?', 2);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `answer`
--
ALTER TABLE `answer`
  ADD CONSTRAINT `FK_DADD4A251E27F6BF` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`);

--
-- Contraintes pour la table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `FK_B6F7494E12469DE2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
