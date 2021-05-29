DROP DATABASE IF EXISTS github;
CREATE DATABASE github;

USE github;


CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name1 VARCHAR(100)
);

CREATE TABLE names (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name1 VARCHAR(100),
  stargazers INT,
  watchers INT,
  size INT,
  userid INT,
  FOREIGN KEY(userid) REFERENCES users(id)
);