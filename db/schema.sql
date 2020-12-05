DROP DATABASE IF EXISTS burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name varchar(75) not null ,
    devoured boolean not null default false,
);
