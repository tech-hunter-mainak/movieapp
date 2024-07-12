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
-- Table structure for table `movie_suggestions`
--

CREATE TABLE `movie_suggestions` (
  `msid` int(11) NOT NULL,
  `mv_lang` text NOT NULL,
  `mv_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movie_suggestions`
--

INSERT INTO `movie_suggestions` (`msid`, `mv_lang`, `mv_name`) VALUES
(1, 'English', 'Die Hard,Terminator 2: Judgment Day,The Dark Knight,Mad Max: Fury Road,John Wick,Gladiator,Inception,The Matrix,Lethal Weapon,Aliens,Mission: Impossible - Fallout,Speed,The Bourne Identity,Predator,Rambo: First Blood Part II,Avatar,The Raid: Redemption,The Rock,Braveheart,Kill Bill: Vol. 1,Taken,The Terminator,Heat,Casino Royale,Guardians of the Galaxy,Black Hawk Down,300,True Lies,The Fugitive,The Magnificent Seven,Indiana Jones and the Raiders of the Lost Ark,The Lord of the Rings: The Fellowship of the Ring,Jurassic Park,Pirates of the Caribbean: The Curse of the Black Pearl,The Princess Bride,Avatar,The Jungle Book (2016),The Revenant,The Chronicles of Narnia: The Lion, the Witch and the Wardrobe,Guardians of the Galaxy,Star Wars: Episode IV - A New Hope,Harry Potter and the Sorcerer\'s Stone,The Goonies,Jumanji (1995),The Hobbit: An Unexpected Journey,The Adventures of Tintin,Life of Pi,The Mummy (1999),King Kong (2005),Big Fish,Hook (1991),The Secret Life of Walter Mitty,The Swiss Family Robinson (1960),Stardust,The NeverEnding Story,The Bridge on the River Kwai (1957),The African Queen (1951),Around the World in 80 Days (1956),The Treasure of the Sierra Madre (1948),The Adventures of Robin Hood (1938)'),
(2, 'Hindi', 'Sholay,Don (1978),Gangs of Wasseypur,Dabangg,Baahubali: The Beginning,Rang De Basanti,Lagaan,Andhadhun,Uri: The Surgical Strike,Dhoom 2,Ek Tha Tiger,Agneepath (2012),Ghajini (2008),Gunday,Singham (2011),Rowdy Rathore,Baaghi,Dilwale (1994),Singham Returns,War (2019),Kick (2014),Bang Bang (2014),Dhoom 3,Raees (2017),Holiday: A Soldier Is Never Off Duty,Simmba,Shootout at Lokhandwala,Heropanti,Race (2008),Baadshaho,Bajirao Mastani,Lagaan,PK,3 Idiots,Taare Zameen Par,Swades,Andhadhun,Chak De! India,Dil Chahta Hai,Zindagi Na Milegi Dobara,Queen (2013),Dilwale Dulhania Le Jayenge,Jab We Met,Barfi!,Rockstar,Rang De Basanti,Delhi-6,The Lunchbox,Piku,English Vinglish,Stanley Ka Dabba,Mary Kom,Dangal,Neerja,Bhaag Milkha Bhaag,Paan Singh Tomar,Manjhi: The Mountain Man,Chhichhore,Drishyam (2015),Tumbbad,Kahaani,Andaz Apna Apna'),
(3, 'Bengali', 'Goopy Gyne Bagha Byne,Chander Pahar,Bombaiyer Bombete,The Royal Bengal Tiger (2014),Shatru (2011),Dui Prithibi (2010),Yoddha (2014),Awara (2012),Khoka 420 (2013),Poran Jay Jolia Re (2009),Challenge (2009),Zulfiqar (2016),Bolo Dugga Maiki (2017),Boss (2013),Rajkahini (2015),Chander Bari (2007),Chirodini Tumi Je Amar (2008),Jatiswar (2014),Nabarun (2013),Amazon Obhijaan (2017),Chotushkone (2014),Autograph (2010),Kidnap (2019),Baishe Srabon (2011),Moner Manush (2010),Mishawr Rawhoshyo (2013),Kakababu Here Gelen? (2021),Har Har Byomkesh (2015),Aparajito (1956),Antaheen (2009),Goopy Gyne Bagha Byne,Chander Pahar,Bombaiyer Bombete,Amazon Obhijaan (2017),Moner Manush (2010),Mishawr Rawhoshyo (2013),Kakababu Here Gelen? (2021),Har Har Byomkesh (2015),Antarleen (2016),Aranyer Din Ratri (1970),Meghe Dhaka Tara (2013),Hirak Rajar Deshe (1980),Pather Panchali (1955),Sonar Kella (1974),Feluda: Tintorettor Jishu (2008),Byomkesh O Chiriakhana (2016),Kony (1984),Chitrangada: The Crowning Wish (2012),Ghare Baire (1984),Teen Kanya (1961),Aami (2018),Dwando (2009),Bela Seshe (2015),Shankhachil (2016),Bibaho Obhijaan (2019),Shankar Mudi (2019),Bidaay Byomkesh (2018),Drishtikone (2018),Asur (2020),Chotushkone (2014)');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movie_suggestions`
--
ALTER TABLE `movie_suggestions`
  ADD PRIMARY KEY (`msid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movie_suggestions`
--
ALTER TABLE `movie_suggestions`
  MODIFY `msid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
