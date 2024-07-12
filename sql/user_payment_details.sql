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
-- Table structure for table `user_payment_details`
--

CREATE TABLE `user_payment_details` (
  `pid` int(11) NOT NULL,
  `usrname` varchar(20) NOT NULL,
  `usrpass` varchar(20) NOT NULL,
  `payment_type` text NOT NULL,
  `card_number` text NOT NULL,
  `card_usrname` text NOT NULL,
  `card_cvv` text NOT NULL,
  `cardexp` varchar(10) NOT NULL,
  `trpin` text NOT NULL,
  `bank_acc_name` text NOT NULL,
  `bank_ifsc` varchar(25) NOT NULL,
  `bank_acc_number` text NOT NULL,
  `wallet_id` text NOT NULL,
  `wallet_net` int(11) NOT NULL,
  `total_spend` int(11) NOT NULL,
  `total_add` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_payment_details`
--

INSERT INTO `user_payment_details` (`pid`, `usrname`, `usrpass`, `payment_type`, `card_number`, `card_usrname`, `card_cvv`, `cardexp`, `trpin`, `bank_acc_name`, `bank_ifsc`, `bank_acc_number`, `wallet_id`, `wallet_net`, `total_spend`, `total_add`) VALUES
(1, 'mainak192004', 'mainak192004', 'card', '1920384477566511', 'Mainak Das', '006', '02/28', '192004', '0', '0', '0', '12620245183025484', 0, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_payment_details`
--
ALTER TABLE `user_payment_details`
  ADD PRIMARY KEY (`pid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_payment_details`
--
ALTER TABLE `user_payment_details`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
