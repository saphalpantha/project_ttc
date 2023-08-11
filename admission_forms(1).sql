-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 09, 2023 at 07:45 PM
-- Server version: 8.1.0
-- PHP Version: 7.4.3-4ubuntu2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ttc_test_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admission_forms`
--

CREATE TABLE `admission_forms` (
  `id` int NOT NULL,
  `faculty` varchar(50) DEFAULT NULL,
  `grade` int DEFAULT NULL,
  `shift` varchar(50) DEFAULT NULL,
  `nameinblock` varchar(50) DEFAULT NULL,
  `nameindevanagari` varchar(50) DEFAULT NULL,
  `dob_bs` text,
  `dob_ad` text,
  `gender` varchar(50) DEFAULT NULL,
  `t_no` varchar(50) DEFAULT NULL,
  `p_no` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `ward_no` int DEFAULT NULL,
  `vdc_mun` text,
  `district` varchar(50) DEFAULT NULL,
  `fathers_name` varchar(50) DEFAULT NULL,
  `fathers_cellno` varchar(50) DEFAULT NULL,
  `fathers_occupation` varchar(50) DEFAULT NULL,
  `mothers_name` varchar(50) DEFAULT NULL,
  `mothers_cellno` varchar(50) DEFAULT NULL,
  `mothers_occupation` varchar(50) DEFAULT NULL,
  `localgurdain_name` varchar(50) DEFAULT NULL,
  `localgurdain_occupation` varchar(50) DEFAULT NULL,
  `localgurdain_cellno` varchar(50) DEFAULT NULL,
  `bus_faculty` varchar(50) DEFAULT NULL,
  `bus_stop` varchar(50) DEFAULT NULL,
  `nameofprevschool` varchar(50) DEFAULT NULL,
  `sendUpGpa` decimal(3,2) DEFAULT NULL,
  `see_cgpa` decimal(3,2) DEFAULT NULL,
  `grade_div` text,
  `sendup_eng` decimal(5,2) DEFAULT NULL,
  `sendup_optmath` decimal(5,2) DEFAULT NULL,
  `sendup_science` decimal(5,2) DEFAULT NULL,
  `sendup_account` decimal(5,2) DEFAULT NULL,
  `see_eng` decimal(5,2) DEFAULT NULL,
  `see_cmath` decimal(5,2) DEFAULT NULL,
  `see_optmath` decimal(5,2) DEFAULT NULL,
  `see_science` decimal(5,2) DEFAULT NULL,
  `see_account` decimal(5,2) DEFAULT NULL,
  `hobbies` text,
  `photo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `see_cc` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `see_tc` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `see_marksheet` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `sendup_cmath` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `admission_forms`
--

INSERT INTO `admission_forms` (`id`, `faculty`, `grade`, `shift`, `nameinblock`, `nameindevanagari`, `dob_bs`, `dob_ad`, `gender`, `t_no`, `p_no`, `email`, `ward_no`, `vdc_mun`, `district`, `fathers_name`, `fathers_cellno`, `fathers_occupation`, `mothers_name`, `mothers_cellno`, `mothers_occupation`, `localgurdain_name`, `localgurdain_occupation`, `localgurdain_cellno`, `bus_faculty`, `bus_stop`, `nameofprevschool`, `sendUpGpa`, `see_cgpa`, `grade_div`, `sendup_eng`, `sendup_optmath`, `sendup_science`, `sendup_account`, `see_eng`, `see_cmath`, `see_optmath`, `see_science`, `see_account`, `hobbies`, `photo`, `see_cc`, `see_tc`, `see_marksheet`, `sendup_cmath`) VALUES
(43, 'Science', 11, 'Day', 'OJASWI NYAUPANE', 'ओजस्वी न्यौपाने ', '2065/09/27', '2009-01-11', '', '', '9847744190', 'ojaswinyaupane@gmail.com', 7, 'Devdaha', 'Rupandehi', 'Toyanath Nyauapne', '9857034736', 'Teacher', 'Bhawana Paudyal', '9847121447', 'Shopkeeper(was teacher)', '', '', '', 'Yes', 'Shitalnagar', 'Sagarmatha S.S.B.S', 3.85, 3.75, 'A+', 4.00, 3.60, 4.00, 4.00, 3.60, 3.60, 4.00, 4.00, 4.00, 'Speech,,', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688749092497_IMG-2.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688749092489_Scree.android', 4.00),
(44, 'Science', 11, 'Day', 'OJASWI NYAUPANE', 'ओजस्वी न्यौपाने ', '2065/09/27', '2009-01-11', '', '', '9847744190', 'ojaswinyaupane@gmail.com', 7, 'Devdaha', 'Rupandehi', 'Toyanath Nyauapne', '9857034736', 'Teacher', 'Bhawana Paudyal', '9847121447', 'Shopkeeper(was teacher)', '', '', '', 'Yes', 'Shitalnagar', 'Sagarmatha S.S.B.S', 3.85, 3.75, 'A+', 4.00, 3.60, 4.00, 4.00, 3.60, 3.60, 4.00, 4.00, 4.00, 'Speech,', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688749087923_IMG-2.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688749087915_Scree.android', 4.00),
(45, 'Science', 11, 'Morning', 'PRANIL MISHRA', 'प्रणिल मिश्रा', '2064-11-16', '2008-02-28', 'Male', '', '9866147700', 'mishrapranil63@gmail.com', 3, 'SIDDHARTHANAGAR NAGARPALIKA', 'RUPANDEHI', 'GIRJAPATI MISHRA', '9825484406', 'BUSINESSMAN ', 'SITA MISHRA', '9847120520', 'GOVERNMENT Job ', '', '', '', 'Yes', 'BHAIRAHAWA', 'AMAR JYOTI BOARDING SCHOOL', 3.20, 3.45, '10', 69.00, 90.00, 60.00, 91.00, 66.00, 90.00, 90.00, 58.00, 94.00, 'Football,VolleyBall,Chess,KABADDDI,KABADDDI,KABADDDI', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688800402152_my pa.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688800402151_Scree.NTC', 91.00),
(46, 'Science', 11, 'Morning', 'PRANIL MISHRA', 'प्रणिल मिश्रा', '2064-11-16', '2008-02-28', 'Male', '', '9866147700', 'mishrapranil63@gmail.com', 3, 'SIDDHARTHANAGAR NAGARPALIKA', 'RUPANDEHI', 'GIRJAPATI MISHRA', '9825484406', 'BUSINESSMAN ', 'SITA MISHRA', '9847120520', 'GOVERNMENT Job ', '', '', '', 'Yes', 'BHAIRAHAWA', 'AMAR JYOTI BOARDING SCHOOL', 3.20, 3.45, '10', 69.00, 90.00, 60.00, 91.00, 66.00, 90.00, 90.00, 58.00, 94.00, 'Football,VolleyBall,Chess,KABADDDI,KABADDDI,KABADDDI,KABADDDI,KABADDDI', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688800420386_my pa.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688800420386_Scree.NTC', 91.00),
(47, 'Science', 11, 'Morning', 'PRANIL MISHRA', 'प्रणिल मिश्रा', '2064-11-16', '2008-02-28', 'Male', '', '9866147700', 'mishrapranil63@gmail.com', 3, 'SIDDHARTHANAGAR NAGARPALIKA', 'RUPANDEHI', 'GIRJAPATI MISHRA', '9825484406', 'BUSINESSMAN ', 'SITA MISHRA', '9847120520', 'GOVERNMENT Job ', '', '', '', 'Yes', 'BHAIRAHAWA', 'AMAR JYOTI BOARDING SCHOOL', 3.20, 3.45, '10', 69.00, 90.00, 60.00, 91.00, 66.00, 90.00, 90.00, 58.00, 94.00, 'Football,VolleyBall,Chess,KABADDDI,KABADDDI,KABADDDI,KABADDDI', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688800417572_my pa.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688800417572_Scree.NTC', 91.00),
(48, 'Science', 11, 'Morning', 'PIYUSH SHAH', '', '', '2008-01-29', 'Male', '', '9857074276', 'rambilas155@gmail.com', 11, 'Butwal, Praweshnagar(Majuwa)', 'Lumbini', 'Rambilas Sah', '9857074276', 'Medical Lab Technician', 'Anjana Sah', '9847555992', 'Medical Lab Technician', 'Rambilas Sah', 'Medical Lab Techinician', '', '', '', 'Kalika Manavgyan Secondary School', 3.00, 3.10, 'B+', 3.60, 2.40, 2.80, 4.00, 3.60, 2.00, 2.40, 2.80, 4.00, 'Football,Badminton,Badminton,Badminton,Badminton', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688802562745_WIN_2.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688802562743_SEE.p.pdf', 2.00),
(49, 'Science', 11, 'Morning', 'PRANIL MISHRA', 'प्रणिल मिश्रा', '2064-11-16', '2008-02-28', 'Male', '', '9866147700', 'mishrapranil63@gmail.com', 3, 'SIDDHARTHANAGAR NAGARPALIKA', 'RUPANDEHI', 'GIRJAPATI MISHRA', '9825484406', 'BUSINESSMAN ', 'SITA MISHRA', '9847120520', 'GOVERNMENT Job ', '', '', '', 'Yes', 'BHAIRAHAWA', 'AMAR JYOTI BOARDING SCHOOL', 3.20, 3.45, '10', 69.00, 90.00, 60.00, 91.00, 66.00, 90.00, 90.00, 58.00, 94.00, 'Football,VolleyBall,Chess,KABADDDI,KABADDDI,KABADDDI,KABADDDI,KABADDDI,KABADDDI', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688802965558_my pa.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688802965555_Scree.NTC', 91.00),
(50, 'Science', 11, 'Morning', 'UTKARSH SHRIVASTAV ', 'उत्कर्ष श्रीवास्तव ', '', '2007-02-21', 'Male', '', '9817529954', 'shrivastavutkarsh439@gmail.com', 6, 'Siddharthanagar Municipality ', 'Rupendehi', 'Sanjay Shrivastav ', '9819436755', '', 'Sunita Shrivastav ', '9821590904', '', 'Sanjay Shrivastav ', '', '9819436755', 'Yes', 'Bhairahawa ', 'Amar Jyoti Boarding School ', 3.25, 3.45, 'A', 3.60, 3.20, 3.20, 4.00, 3.60, 4.00, 3.20, 3.20, 4.00, 'Cricket,Chess,,', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688906547788_IMG_2.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688906547783_Scree.png', 3.60),
(51, 'Science', 11, 'Morning', 'ABHINAV ADHIKARI', ' ‌‌अभिनव अधिकारी', '07/01/2064', '2007-04-20', 'Male', '', '9847111216', 'abhinavadhikari237@gmail.com', 3, 'Tilottama', 'Rupandehi', 'Namaraj Adhikari', '9857012027', 'Government Officer', 'Urmila Khanal ', '9844746631', 'Housewife ', 'Urmila Khanal', 'Housewife', '9844746631', 'Yes', 'Pratima Medical', 'Kalika Manavgyan Secondary School ', 3.55, 3.45, 'A', 4.00, 3.20, 3.60, 4.00, 3.60, 3.60, 2.80, 3.60, 4.00, 'Cricket,Chess,,,,,,,,,I like astronomy and topics related to space.,I like astronomy and topics related to space.', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688912471467_IMG_2.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688912471465_recei.jpeg', 4.00),
(52, 'Science', 11, 'Morning', 'ABHINAV ADHIKARI', ' ‌‌अभिनव अधिकारी', '07/01/2064', '2007-04-20', 'Male', '', '9847111216', 'abhinavadhikari237@gmail.com', 3, 'Tilottama', 'Rupandehi', 'Namaraj Adhikari', '9857012027', 'Government Officer', 'Urmila Khanal ', '9844746631', 'Housewife ', 'Urmila Khanal', 'Housewife', '9844746631', 'Yes', 'Pratima Medical', 'Kalika Manavgyan Secondary School ', 3.55, 3.45, 'A', 4.00, 3.20, 3.60, 4.00, 3.60, 3.60, 2.80, 3.60, 4.00, 'Cricket,Chess,,,,,,,,,I like astronomy and topics related to space.,I like astronomy and topics related to space.,I like astronomy and topics related to space.', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688912472625_IMG_2.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688912472624_recei.jpeg', 4.00),
(53, 'Science', 11, 'Morning', 'ABHINAV ADHIKARI', ' ‌‌अभिनव अधिकारी', '07/01/2064', '2007-04-20', 'Male', '', '9847111216', 'abhinavadhikari237@gmail.com', 3, 'Tilottama', 'Rupandehi', 'Namaraj Adhikari', '9857012027', 'Government Officer', 'Urmila Khanal ', '9844746631', 'Housewife ', 'Urmila Khanal', 'Housewife', '9844746631', 'Yes', 'Pratima Medical', 'Kalika Manavgyan Secondary School ', 3.55, 3.45, 'A', 4.00, 3.20, 3.60, 4.00, 3.60, 3.60, 2.80, 3.60, 4.00, 'Cricket,Chess,,,,,,,,,I like astronomy and topics related to space.,I like astronomy and topics related to space.,I like astronomy and topics related to space.,I like astronomy and topics related to space.', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688912473346_IMG_2.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688912473345_recei.jpeg', 4.00),
(54, 'Science', 11, 'Day', 'UTKARSH SHRIVASTAV ', 'उत्कर्ष श्रीवास्तव ', '', '2007-02-21', 'Male', '', '9817529954', 'shrivastavutkarsh439@gmail.com', 6, 'Siddharthanagar Municipality ', 'Rupandehi', 'Sanjay Shrivastav ', '9819436755', '', 'Sunita Shrivastav ', '921590904', '', 'Sanjay Shrivastav ', '', '', 'Yes', 'Bhairahawa ', 'Amar Jyoti Boarding School ', 3.25, 3.45, 'A', 3.60, 3.00, 3.00, 4.00, 3.60, 4.00, 3.20, 3.20, 4.00, 'Cricket,Chess,', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688913568776_IMG_2.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688913568774_Scree.png', 3.20),
(55, 'Science', 11, 'Day', 'UTKARSH SHRIVASTAV ', 'उत्कर्ष श्रीवास्तव ', '', '2007-02-21', 'Male', '', '9817529954', 'shrivastavutkarsh439@gmail.com', 6, 'Siddharthanagar Municipality ', 'Rupandehi', 'Sanjay Shrivastav ', '9819436755', '', 'Sunita Shrivastav ', '921590904', '', 'Sanjay Shrivastav ', '', '', 'Yes', 'Bhairahawa ', 'Amar Jyoti Boarding School ', 3.25, 3.45, 'A', 3.60, 3.00, 3.00, 4.00, 3.60, 4.00, 3.20, 3.20, 4.00, 'Cricket,Chess,,', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688913573968_IMG_2.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688913573967_Scree.png', 3.20),
(56, 'Science', 11, 'Day', 'UTKARSH SHRIVASTAV ', 'उत्कर्ष श्रीवास्तव ', '', '2007-02-21', 'Male', '', '9817529954', 'shrivastavutkarsh439@gmail.com', 6, 'Siddharthanagar Municipality ', 'Rupandehi', 'Sanjay Shrivastav ', '9819436755', '', 'Sunita Shrivastav ', '921590904', '', 'Sanjay Shrivastav ', '', '', 'Yes', 'Bhairahawa ', 'Amar Jyoti Boarding School ', 3.25, 3.45, 'A', 3.60, 3.00, 3.00, 4.00, 3.60, 4.00, 3.20, 3.20, 4.00, 'Cricket,Chess,,,', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688913575096_IMG_2.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688913575093_Scree.png', 3.20),
(57, 'Science', 11, 'Day', 'UTKARSH SHRIVASTAV ', 'उत्कर्ष श्रीवास्तव ', '', '2007-02-21', 'Male', '', '9817529954', 'shrivastavutkarsh439@gmail.com', 6, 'Siddharthanagar Municipality ', 'Rupandehi', 'Sanjay Shrivastav ', '9819436755', '', 'Sunita Shrivastav ', '921590904', '', 'Sanjay Shrivastav ', '', '', 'Yes', 'Bhairahawa ', 'Amar Jyoti Boarding School ', 3.25, 3.45, 'A', 3.60, 3.00, 3.00, 4.00, 3.60, 4.00, 3.20, 3.20, 4.00, 'Cricket,Chess,,,,', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688913575649_IMG_2.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688913575648_Scree.png', 3.20),
(58, 'Science', 11, 'Day', 'UTKARSH SHRIVASTAV ', 'उत्कर्ष श्रीवास्तव ', '', '2007-02-21', 'Male', '', '9817529954', 'shrivastavutkarsh439@gmail.com', 6, 'Siddharthanagar Municipality ', 'Rupandehi', 'Sanjay Shrivastav ', '9819436755', '', 'Sunita Shrivastav ', '921590904', '', 'Sanjay Shrivastav ', '', '', 'Yes', 'Bhairahawa ', 'Amar Jyoti Boarding School ', 3.25, 3.45, 'A', 3.60, 3.00, 3.00, 4.00, 3.60, 4.00, 3.20, 3.20, 4.00, 'Cricket,Chess,,,,,,', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688913575680_IMG_2.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688913575692_Scree.png', 3.20),
(59, 'Science', 11, 'Day', 'UTKARSH SHRIVASTAV ', 'उत्कर्ष श्रीवास्तव ', '', '2007-02-21', 'Male', '', '9817529954', 'shrivastavutkarsh439@gmail.com', 6, 'Siddharthanagar Municipality ', 'Rupandehi', 'Sanjay Shrivastav ', '9819436755', '', 'Sunita Shrivastav ', '921590904', '', 'Sanjay Shrivastav ', '', '', 'Yes', 'Bhairahawa ', 'Amar Jyoti Boarding School ', 3.25, 3.45, 'A', 3.60, 3.00, 3.00, 4.00, 3.60, 4.00, 3.20, 3.20, 4.00, 'Cricket,Chess,,,,,,', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688913575695_IMG_2.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688913575692_Scree.png', 3.20),
(60, 'Science', 11, 'Morning', 'MOHIT CHAUDHARY THARU', 'Mohit chaudhary tharu', '2063-06-15', '2005-10-01', 'Male', '', '9829275125', 'chaudhary982mohit@gmail.com', 4, 'Dingger nagar', 'Rupandehi', 'Khemraj mahato', '9804204468', 'Teacher ', 'Sarita devi', '9825218905', 'House wife ', 'Ravi das', 'Grace pharmaceutical ', '', 'No', '', 'Gautam school', 2.45, 3.15, '29', 55.00, 46.00, 36.00, 50.00, 80.00, 79.00, 55.00, 85.00, 75.00, 'Cricket,,,,,,,,,,,', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688914218773_inbou.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688914218770_inbou.jpg', 30.00),
(61, 'Science', 11, 'Day', 'ABHILASH CHAUDHARY KURMI ', 'अभिलाष चौधरी कुर्मी ', '2063-02-18', '2006-06-01', 'Male', '', '9817471238', 'chaudharyabhilash123@gmail.com', 5, 'Kapilvastu municipality ', 'Kapilvastu ', 'Bishnu prasad chaudhary ', '9819472848', 'Agriculture ', 'Sonmati kurmi ', '9807535990', 'House wife', 'Pujari prasad chaudhary ', 'Teacher ', '9847037242', 'Yes', 'Bardghat ', 'Daunne devi secondary school ', 3.40, 3.20, 'A', 3.60, 3.20, 3.60, 3.60, 3.60, 3.20, 2.80, 3.60, 3.60, 'Quiz,Chess,,,', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688955253962_IMG_2.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1688955253873_Scree.android', 3.40),
(62, 'Science', 11, 'Day', 'NIRAJ BASHYAL', 'निरज बस्याल', '2063-01-31', '2006-05-14', 'Male', '0', '9847374148', 'basyalniraj819@gmail.com', 6, 'tilottama', 'rupandehi', 'Durga Bashyal', '9860900380', 'abroad', 'Gyanu Bashyal ', '9860351745', 'teacher', '', '', '', 'Yes', 'manigram chowk', 'Shree Shanti secondary school', 4.00, 3.80, 'A+', 4.00, 4.00, 4.00, 4.00, 4.00, 4.00, 3.60, 3.60, 4.00, 'VolleyBall,Cricket,Football,Quiz,Speech,,,,,', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1689146115027_28580.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1689146115026_Scree.png', 4.00),
(63, 'Management', 11, 'Day', 'REEYAZ GURUNG', 'रियाज गुरूङ', '2064-01-01', '2007-04-14', 'Male', '', '9857080122', 'reenagauchangurung@gmail.com', 4, 'Bardaghat, Nagarpalika', 'Nawalparasi', 'Supen Gurung', '9867186015', 'businessman ', 'Reena Gurung', '9857080122', 'Housewife', 'Reena Gurung', 'Housewife', '9857080122', 'Yes', 'Bardaghat', 'New Life secondary ', 2.30, 3.50, 'A', 2.80, 2.80, 2.00, 3.60, 4.00, 3.60, 3.20, 3.20, 4.00, 'Music,Music,Music,Music,Music,Music,Music,Music,Music', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1689150715267_IMG_2.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1689150715266_Scree.jpg', 2.40),
(64, 'Management', 11, 'Day', 'REEYAZ GURUNG', 'रियाज गुरूङ', '2064-01-01', '2007-04-14', 'Male', '', '9857080122', 'reenagauchangurung@gmail.com', 4, 'Bardaghat, Nagarpalika', 'Nawalparasi', 'Supen Gurung', '9867186015', 'businessman ', 'Reena Gurung', '9857080122', 'Housewife', 'Reena Gurung', 'Housewife', '9857080122', 'Yes', 'Bardaghat', 'New Life secondary ', 2.30, 3.50, 'A', 2.80, 2.80, 2.00, 3.60, 4.00, 3.60, 3.20, 3.20, 4.00, 'Music,Music,Music,Music,Music,Music,Music,Music', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1689150713232_IMG_2.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1689150713232_Scree.jpg', 2.40),
(65, 'Science', 11, 'Day', 'Kefash Baniya', 'केफास बनिया ', '2065/01/14', '2008-04-26', 'Male', '', '9808399982', 'kkrti2200@gmail.com', 1, 'Ramgram ', 'Nawalparasi ', 'Ram Prakash Baniya', '9800762180', 'Nirmala Baniya', 'Niramala Baniya', '9811427883', 'Vegetables vendor ', 'Krishna Kumar Yadav ', 'Student ', '9808399982', 'Yes', 'Budhachowk, parasi', 'Mahakavi Devkota Model Secondary school ', 3.20, 3.20, '3.20', 3.20, 3.20, 2.80, 0.00, 3.20, 2.40, 3.20, 2.80, 0.00, 'BasketBall,VolleyBall,Chess,TableTennis,Piano ,Piano ,Piano ,Piano ,Piano ', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1689162408164_16891.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1689162408155_DOC-2._1', 2.40),
(66, 'Science', 11, 'Day', 'Kefash Baniya', 'केफास बनिया ', '2065/01/14', '2008-04-26', 'Male', '', '9808399982', 'kkrti2200@gmail.com', 1, 'Ramgram ', 'Nawalparasi ', 'Ram Prakash Baniya', '9800762180', 'Nirmala Baniya', 'Niramala Baniya', '9811427883', 'Vegetables vendor ', 'Krishna Kumar Yadav ', 'Student ', '9808399982', 'Yes', 'Budhachowk, parasi', 'Mahakavi Devkota Model Secondary school ', 3.20, 3.20, '3.20', 3.20, 3.20, 2.80, 0.00, 3.20, 2.40, 3.20, 2.80, 0.00, 'BasketBall,VolleyBall,Chess,TableTennis,Piano ,Piano ,Piano ,Piano ,Piano ,Piano ,Piano ', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1689162413218_16891.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1689162413215_DOC-2._1', 2.40),
(67, 'Science', 11, 'Day', 'Kefash Baniya', 'केफास बनिया ', '2065/01/14', '2008-04-26', 'Male', '', '9808399982', 'kkrti2200@gmail.com', 1, 'Ramgram ', 'Nawalparasi ', 'Ram Prakash Baniya', '9800762180', 'Nirmala Baniya', 'Niramala Baniya', '9811427883', 'Vegetables vendor ', 'Krishna Kumar Yadav ', 'Student ', '9808399982', 'Yes', 'Budhachowk, parasi', 'Mahakavi Devkota Model Secondary school ', 3.20, 3.20, '3.20', 3.20, 3.20, 2.80, 0.00, 3.20, 2.40, 3.20, 2.80, 0.00, 'BasketBall,VolleyBall,Chess,TableTennis,Piano ,Piano ,Piano ,Piano ,Piano ,Piano ', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1689162409138_16891.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1689162409134_DOC-2._1', 2.40),
(68, 'Science', 11, 'Day', 'Kefash Baniya', 'केफास बनिया ', '2065/01/14', '2008-04-26', 'Male', '', '9808399982', 'kkrti2200@gmail.com', 1, 'Ramgram ', 'Nawalparasi ', 'Ram Prakash Baniya', '9800762180', 'Nirmala Baniya', 'Niramala Baniya', '9811427883', 'Vegetables vendor ', 'Krishna Kumar Yadav ', 'Student ', '9808399982', 'Yes', 'Budhachowk, parasi', 'Mahakavi Devkota Model Secondary school ', 3.20, 3.20, '3.20', 3.20, 3.20, 2.80, 0.00, 3.20, 2.40, 3.20, 2.80, 0.00, 'BasketBall,VolleyBall,Chess,TableTennis,Piano ,Piano ,Piano ,Piano ,Piano ,Piano ,Piano ,Piano ', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1689162429535_16891.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1689162429517_DOC-2._1', 2.40),
(69, 'Science', 11, 'Day', 'Kefash Baniya', 'केफास बनिया ', '2065/01/14', '2008-04-26', 'Male', '', '9808399982', 'kkrti2200@gmail.com', 1, 'Ramgram ', 'Nawalparasi ', 'Ram Prakash Baniya', '9800762180', 'Nirmala Baniya', 'Niramala Baniya', '9811427883', 'Vegetables vendor ', 'Krishna Kumar Yadav ', 'Student ', '9808399982', 'Yes', 'Budhachowk, parasi', 'Mahakavi Devkota Model Secondary school ', 3.20, 3.20, '3.20', 3.20, 3.20, 2.80, 0.00, 3.20, 2.40, 3.20, 2.80, 0.00, 'BasketBall,VolleyBall,Chess,TableTennis,Piano ,Piano ,Piano ,Piano ,Piano ,Piano ,Piano ,Piano ,Piano ', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1689162430723_16891.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1689162430720_DOC-2._1', 2.40),
(70, 'Science', 11, 'Day', 'Kefash Baniya', 'केफास बनिया ', '2065/01/14', '2008-04-26', 'Male', '', '9808399982', 'kkrti2200@gmail.com', 1, 'Ramgram ', 'Nawalparasi ', 'Ram Prakash Baniya', '9800762180', 'Nirmala Baniya', 'Niramala Baniya', '9811427883', 'Vegetables vendor ', 'Krishna Kumar Yadav ', 'Student ', '9808399982', 'Yes', 'Budhachowk, parasi', 'Mahakavi Devkota Model Secondary school ', 3.20, 3.20, '3.20', 3.20, 3.20, 2.80, 0.00, 3.20, 2.40, 3.20, 2.80, 0.00, 'BasketBall,VolleyBall,Chess,TableTennis,Piano ,Piano ,Piano ,Piano ,Piano ,Piano ,Piano ,Piano ,Piano ,Piano ', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1689162431866_16891.jpg', '', '', '/home/tilottama-cgkik/tilottama.edu.np/public/images/uploads/1689162431864_DOC-2._1', 2.40);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admission_forms`
--
ALTER TABLE `admission_forms`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admission_forms`
--
ALTER TABLE `admission_forms`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
