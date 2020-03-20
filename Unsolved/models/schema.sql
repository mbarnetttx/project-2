DROP DATABASE IF EXISTS indoorLearning_db;
CREATE DATABASE indoorLearning_db;

USE indoorLearning_db;

CREATE TABLE links(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100),
    category VARCHAR(20),
    link VARCHAR(240),
    primary key(id)
);

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
