-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2024 at 08:13 PM
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
-- Table structure for table `userregdetails`
--

CREATE TABLE `userregdetails` (
  `uid` int(11) NOT NULL,
  `u_fname` text NOT NULL,
  `u_lname` text NOT NULL,
  `usrname` text NOT NULL,
  `u_mail` varchar(90) NOT NULL,
  `u_pass` varchar(16) NOT NULL,
  `u_regdtime` datetime NOT NULL DEFAULT current_timestamp(),
  `wallet_id` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userregdetails`
--

INSERT INTO `userregdetails` (`uid`, `u_fname`, `u_lname`, `usrname`, `u_mail`, `u_pass`, `u_regdtime`, `wallet_id`) VALUES
(1, 'Mainak', 'Das', 'mainak192004', 'mainak_ug_23@cse.nits.ac.in', 'mainak192004', '2024-07-12 18:30:25', '12620245183025484');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `userregdetails`
--
ALTER TABLE `userregdetails`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `usrname` (`usrname`) USING HASH;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `userregdetails`
--
ALTER TABLE `userregdetails`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
