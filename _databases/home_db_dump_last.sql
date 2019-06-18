-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: videodb
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `grades`
--

DROP TABLE IF EXISTS `grades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `grades` (
  `fk_user_id` int(11) NOT NULL,
  `fk_video_id` int(11) NOT NULL,
  `grade` float DEFAULT NULL,
  PRIMARY KEY (`fk_user_id`,`fk_video_id`),
  KEY `fk_Grades_VideoItems1_idx` (`fk_video_id`),
  CONSTRAINT `fk_users` FOREIGN KEY (`fk_user_id`) REFERENCES `users` (`Id`),
  CONSTRAINT `fk_videos` FOREIGN KEY (`fk_video_id`) REFERENCES `videoitems` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grades`
--

LOCK TABLES `grades` WRITE;
/*!40000 ALTER TABLE `grades` DISABLE KEYS */;
/*!40000 ALTER TABLE `grades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `FirstName` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `LastName` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PasswordHash` blob,
  `PasswordSalt` blob,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'test',NULL,NULL,_binary '\ƒ9B5\È\÷Z•w\‘·ßä\„k]∂\Ì\⁄ë0>p4*Mnw+ì\Âë\Ë}Ü6ßı=Ò\⁄2À§uó¸|8øf\—˝',_binary '$â(_}rY∑\È\„A\'	¨Æ¿?\Á\ƒ\r˘™~ï§á˝*HQ∫Çt]üoYÅMß)\Ô`3Ãä\\£Pfß\r\€ˆ7à\÷5tû&-®x∫]q.1vâ\·\n/\ ’¢íHJUZ^21PI¶ú#.ˆk\—\€\ËI[t¿IZLÇ3!$ª\Ã#_¡myK)\—');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videoitems`
--

DROP TABLE IF EXISTS `videoitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `videoitems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `posted_date` date DEFAULT NULL,
  `grade` float DEFAULT NULL,
  `thumbnail` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videoitems`
--

LOCK TABLES `videoitems` WRITE;
/*!40000 ALTER TABLE `videoitems` DISABLE KEYS */;
INSERT INTO `videoitems` VALUES (3,'60DtX68gm78','–ò–≥—Ä–∞ –ø—Ä–µ—Å—Ç–æ–ª–æ–≤ —Å –ö–ª–∏–º–æ–º –ñ—É–∫–∞—Ä–∏–µ–Ω–æ–º (—Å–µ–∑–æ–Ω 8, —Å–µ—Ä–∏—è 4) | –°–∏–Ω–∏–π –§–∏–ª 290','2019-06-11',NULL,'https://i.ytimg.com/vi/60DtX68gm78/hqdefault.jpg'),(5,'5_yahNCtr7s','–ú–û–ô –ü–ï–†–í–´–ô –ú–ò–õ–õ–ò–û–ù –í –°–®–ê - –°–ê–ú–´–ô –¢–†–£–î–ù–´–ô - $1.000.000','2019-06-17',NULL,'https://i.ytimg.com/vi/5_yahNCtr7s/hqdefault.jpg');
/*!40000 ALTER TABLE `videoitems` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-18  3:02:02
