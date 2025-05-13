-- Create database
CREATE DATABASE IF NOT EXISTS `user_db1` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Select database
USE `user_db1`;

-- Creating the users table
CREATE TABLE IF NOT EXISTS `orders1` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Optional: insert test data
INSERT INTO `orders1` (`id`, `user_id`, `created_at`) VALUES
('1', '213737562', '2024-04-24 18:00:00'),
('2', '212717562', '2024-04-24 16:00:00');