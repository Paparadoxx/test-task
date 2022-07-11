-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: testdb
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `todos`
--

DROP TABLE IF EXISTS `todos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `todos` (
  `todoId` varchar(45) NOT NULL,
  `title` varchar(45) NOT NULL,
  `description` varchar(250) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `userId` int NOT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`todoId`),
  UNIQUE KEY `todoId_UNIQUE` (`todoId`),
  KEY `userId_idx` (`userId`),
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `todos`
--

LOCK TABLES `todos` WRITE;
/*!40000 ALTER TABLE `todos` DISABLE KEYS */;
INSERT INTO `todos` VALUES ('56734f8a-138f-44a6-bdbd-bfc92c1260e5','Создать компонент авторизации','Поля: 1. Email 2. пароль','2022-07-08 12:24:00',1,'2022-07-08 13:02:46'),('5d60282e-e282-47d5-b287-056addca490e','Подготовить отчет','Отчет за 2 квартал по выполненной работе','2022-07-08 12:30:20',2,'2022-07-08 12:30:36'),('b7c46c19-d615-431a-9b36-2c0bc09684b2','Форма добавления новой задачи','поля: название (обязательно к заполнению), описание. Дата добавления задачи должна проставляться автоматом','2022-07-08 12:29:03',2,'2022-07-08 12:29:03'),('ddb35411-6666-4143-957e-155942e0411c','Интерфейс списка задач','реализовать отображение списка задач авторизованного пользователя','2022-07-08 12:27:53',2,'2022-07-08 12:27:53'),('e6bb13f9-449f-4d0d-8709-4d7757d1bc3e','Реализовать интерфейс задачи','Поля которые, пользователь имеет право редактировать: название (обязательно к заполнению) и описание','2022-07-08 12:31:56',3,'2022-07-08 12:43:35'),('f46c257f-8054-432f-b3f8-8cc7c2d6c81e','Поднятие базы данных','','2022-07-08 12:26:38',1,'2022-07-08 12:26:38');
/*!40000 ALTER TABLE `todos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-11 13:20:50
