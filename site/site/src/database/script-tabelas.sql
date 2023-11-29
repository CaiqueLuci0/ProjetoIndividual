CREATE DATABASE musclerise;

USE musclerise;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
sobrenome VARCHAR(50)NOT NULL,
email VARCHAR(50) NOT NULL UNIQUE,
senha VARCHAR(50) NOT NULL,
dtNasc DATE NOT NULL
) auto_increment = 1000;

INSERT INTO usuario (nome, sobrenome, email, senha, dtNasc) VALUES
('Caique', 'Lucio', 'CAIQUE@GMAIL.COM', 'sptech88', '2004-10-26');

CREATE TABLE highScore(
fkUsuario INT PRIMARY KEY,
qtdClicks DECIMAL(20,2),
qtdPontos DECIMAL(20,2),
CONSTRAINT pkHighScore FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

INSERT INTO highScore (fkUsuario, qtdClicks, qtdPontos) VALUES
(1000, 10000, 5000);

CREATE TABLE powerUp(
idPowerUp INT PRIMARY KEY,
nome VARCHAR(20)
);

INSERT INTO powerUp (idPowerUp, nome) VALUES
(1, 'execução'),
(2, 'creatina'),
(3, 'whey'),
(4, 'cardio'),
(5, 'pesado'),
(6, 'dieta'),
(7, 'disciplina');

CREATE TABLE nivelPowerUp(
fkUsuario INT,
fkPowerUp INT,
nivel DECIMAL(10),
CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario) REFERENCES highScore(fkUsuario),
CONSTRAINT fkPowerUp FOREIGN KEY (fkPowerUp) REFERENCES powerUp(idPowerUp),
CONSTRAINT pkNivelPowerUp PRIMARY KEY (fkUsuario, fkPowerUp)
);

-- Substituir na API o primeiro valor pelo id do usuário guardado no session storage e o terceiro pelo nível guardado na variável

INSERT INTO nivelPowerUp (fkUsuario, fkPowerUp, nivel) VALUES
(1000, 1, 5),
(1000, 2, 10),
(1000, 3, 5),
(1000, 4, 6),
(1000, 5, 7),
(1000, 6, 15),
(1000, 7, 10);

CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'usuario';
GRANT select, insert, delete, update ON musclerise.* TO 'usuario'@'localhost';
FLUSH PRIVILEGES;
