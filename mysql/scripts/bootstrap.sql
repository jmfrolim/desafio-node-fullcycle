DROP DATABASE IF EXISTS nodedb;

CREATE SCHEMA  nodedb DEFAULT CHARACTER SET utf8 ;

USE nodedb;

CREATE TABLE people(
    id int not null auto_increment,
    name varchar(200),
    PRIMARY KEY (id)
);


INSERT INTO people(name) values('Wesley');
INSERT INTO people(name) values('Joao Manoel');
