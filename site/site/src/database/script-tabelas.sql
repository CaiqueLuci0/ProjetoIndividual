CREATE DATABASE healthyAesthetic;
USE healthyAesthetic;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
sobrenome VARCHAR(50),
email VARCHAR(50),
senha VARCHAR(50),
dtNasc DATE
) auto_increment = 1000;

CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'usuario';
GRANT select, insert, delete, update ON healthyAesthetic.* TO 'usuario'@'localhost';
FLUSH PRIVILEGES;

select * from usuario;