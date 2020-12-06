-- Checks to see if a db already exists
DROP DATABASE IF EXISTS burgers_db;

-- Create DB
CREATE DATABASE burgers_db;

-- chossen the db of choice to use
USE burgers_db;


-- creating a table that will take in specific data
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name varchar(75) not null ,
    devoured boolean not null default false,
    PRIMARY KEY (id)
);
