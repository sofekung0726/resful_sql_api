-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2023 at 06:02 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurant`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `tpye` varchar(255) NOT NULL,
  `imageurl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `name`, `tpye`, `imageurl`) VALUES
(1, 'McDonald\'s (แมคโดนัลด์) - ราชดำเนิน', 'Burgers, Fried Chicken, Fast Food', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/AWh64KYIZXYdMpch2Zem/hero/f193b34375f84a0fb1b2b58e4320be3f_1688317413588921068.webp'),
(2, 'Domino\'s Pizza (โดมิโน่ส์ พิซซ่า) - บางลำภู', 'Pizza, Fried Chicken, Fast Food', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C23KWBMXVA61C2/hero/8ef258d70c7e4e8eb4b140ce133b0093_1688317398064378299.webp'),
(3, 'Oppa Daek ไก่ทอดเกาหลี - Grabkitchen พาต้า', 'Fried Chicken', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C2EVG2JHAKBCFE/hero/7086e4bfa8df46cd8ed166381d02e6b7_1654438010984239278.webp'),
(4, 'Hakata (ฮากาตะ) - I\'m China Town', 'Ramen', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C2NKAA42G22YEX/hero/5324bc409ae54870a5e460f2c5f4d2ce_1688317402391084906.webp'),
(5, 'เจ๊แดงสามย่าน ส้มตำ คอหมูย่าง - สยามสแควร์ ซอย10', 'Coupon, Somtum, Cooked to Order, Spicy Salad', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C23YT76XJUXYKA/hero/d872c44dd786458cac222e6a4a75d219_1688317882783208267.webp');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
