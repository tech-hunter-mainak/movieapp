-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2024 at 08:12 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movieapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `movie_categories`
--

CREATE TABLE `movie_categories` (
  `mv_ctr_id` int(11) NOT NULL,
  `mv_ctr_name` text NOT NULL,
  `mv_sub_ctr_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movie_categories`
--

INSERT INTO `movie_categories` (`mv_ctr_id`, `mv_ctr_name`, `mv_sub_ctr_name`) VALUES
(1, 'action', 'martial arts,superhero,spy,espionage'),
(2, 'adventure', ''),
(3, 'comedy', 'romantic comedy,dark comedy,slapstick,parody,satire'),
(4, 'drama', 'legal,medical,crime,political,melo'),
(5, 'horror', 'psychological,slasher,supernatural,found footage,zombie,body'),
(6, 'science fiction', 'cyberpunk,space opera,time travel,dystopian,apocalyptic,post-apocalyptic'),
(7, 'fantasy', 'high,urban,dark,fairy tale'),
(8, 'thriller', 'psychological,crime,political,techno,legal'),
(9, 'romance', ''),
(10, 'animation', '2d,3d,stop motion,anime'),
(11, 'documentary', 'biographical,historical,nature,investigative,mockumentary'),
(12, 'musical', 'musical comedy,musical drama'),
(13, 'mystery', 'detective fiction,whodunit,cozy'),
(14, 'western', ''),
(15, 'crime', ''),
(16, 'biography', ''),
(17, 'war', ''),
(18, 'historical', ''),
(19, 'sport', ''),
(20, 'family', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movie_categories`
--
ALTER TABLE `movie_categories`
  ADD PRIMARY KEY (`mv_ctr_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movie_categories`
--
ALTER TABLE `movie_categories`
  MODIFY `mv_ctr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
