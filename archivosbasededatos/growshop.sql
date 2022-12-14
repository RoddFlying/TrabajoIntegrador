-- MySQL Script generated by MySQL Workbench
-- Thu Dec  1 20:35:08 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema growshop
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `growshop` ;

-- -----------------------------------------------------
-- Schema growshop
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `growshop` DEFAULT CHARACTER SET utf8 ;
USE `growshop` ;

-- -----------------------------------------------------
-- Table `growshop`.`payment_method`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `growshop`.`payment_method` ;

CREATE TABLE IF NOT EXISTS `growshop`.`payment_method` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `growshop`.`product_category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `growshop`.`product_category` ;

CREATE TABLE IF NOT EXISTS `growshop`.`product_category` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `growshop`.`supplier`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `growshop`.`supplier` ;

CREATE TABLE IF NOT EXISTS `growshop`.`supplier` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(65) NOT NULL,
  `telephone` INT(11) NULL DEFAULT NULL,
  `email` VARCHAR(80) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `growshop`.`product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `growshop`.`product` ;

CREATE TABLE IF NOT EXISTS `growshop`.`product` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `brand` VARCHAR(45) NULL DEFAULT NULL,
  `detail` VARCHAR(10000) NULL DEFAULT NULL,
  `price` DECIMAL(65,0) NOT NULL,
  `discount` TINYINT(100) NULL DEFAULT NULL,
  `image` VARCHAR(45) NULL DEFAULT NULL,
  `expiration_date` DATE NULL DEFAULT NULL,
  `creation_date` DATE NULL DEFAULT NULL,
  `delete_date` DATE NULL DEFAULT NULL,
  `product_Category_id` INT(11) NULL DEFAULT NULL,
  `supplier_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `id_idx1` (`supplier_id` ASC) VISIBLE,
  INDEX `product_Category_id_idx` (`product_Category_id` ASC) VISIBLE,
  CONSTRAINT `product_Category_id`
    FOREIGN KEY (`product_Category_id`)
    REFERENCES `growshop`.`product_category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `supplier_id`
    FOREIGN KEY (`supplier_id`)
    REFERENCES `growshop`.`supplier` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 21
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `growshop`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `growshop`.`role` ;

CREATE TABLE IF NOT EXISTS `growshop`.`role` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `growshop`.`sale_detail`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `growshop`.`sale_detail` ;

CREATE TABLE IF NOT EXISTS `growshop`.`sale_detail` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `total_amount` DECIMAL(65,0) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `growshop`.`service`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `growshop`.`service` ;

CREATE TABLE IF NOT EXISTS `growshop`.`service` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `detail` VARCHAR(10000) NULL DEFAULT NULL,
  `price` DECIMAL(20,0) NOT NULL,
  `discount` TINYINT(100) NULL DEFAULT NULL,
  `time_date` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `growshop`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `growshop`.`user` ;

CREATE TABLE IF NOT EXISTS `growshop`.`user` (
  `id` INT(245) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(80) NULL DEFAULT NULL,
  `surname` VARCHAR(80) NULL DEFAULT NULL,
  `dni` VARCHAR(9) NULL DEFAULT NULL,
  `email` VARCHAR(90) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `address` VARCHAR(100) NULL DEFAULT NULL,
  `profile_image` VARCHAR(100) NULL DEFAULT 'defaultProfile.png',
  `telephone` INT(15) NOT NULL,
  `role_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `id_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `role_id`
    FOREIGN KEY (`role_id`)
    REFERENCES `growshop`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `growshop`.`sale`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `growshop`.`sale` ;

CREATE TABLE IF NOT EXISTS `growshop`.`sale` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `product_id` INT(11) NULL DEFAULT NULL,
  `service_id` INT(11) NULL DEFAULT NULL,
  `payment_method_id` INT(11) NOT NULL,
  `unit_amount` DECIMAL(65,0) NULL DEFAULT NULL,
  `quantity` TINYINT(100) NULL DEFAULT NULL,
  `sale_detail_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `service_id_idx` (`service_id` ASC) VISIBLE,
  INDEX `payment_method_id_idx` (`payment_method_id` ASC) VISIBLE,
  INDEX `sale_detail_id_idx` (`sale_detail_id` ASC) VISIBLE,
  INDEX `product_id_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `payment_method_id`
    FOREIGN KEY (`payment_method_id`)
    REFERENCES `growshop`.`payment_method` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `growshop`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `sale_detail_id`
    FOREIGN KEY (`sale_detail_id`)
    REFERENCES `growshop`.`sale_detail` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `service_id`
    FOREIGN KEY (`service_id`)
    REFERENCES `growshop`.`service` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `growshop`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
