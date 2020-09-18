###Schema

CREATE DATABASE veganBurger_db;
USE veganBurger_db;

CREATE TABLE burgers
(
  id INT
  AUTO_INCREMENT NOT NULL,
	burger_name varchar
  (255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
  createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY
  (id)
);