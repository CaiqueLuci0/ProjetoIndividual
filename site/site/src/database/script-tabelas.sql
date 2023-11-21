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

select * from usuario;

delete from highscore where fkUsuario = 1001;

INSERT INTO usuario (nome, sobrenome, email, senha, dtNasc) VALUES
('Caique', 'Lucio', 'CAIQUE@GMAIL.COM', 'sptech88', '2004-10-26');

CREATE TABLE highScore(
fkUsuario INT PRIMARY KEY,
qtdClicks DECIMAL(20,2),
qtdPontos DECIMAL(20,2),
CONSTRAINT pkHighScore FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

INSERT INTO highScore (fkUsuario, qtdClicks, qtdPontos) VALUES
(1000, 10000, 500000);

CREATE TABLE powerUp(
idPowerUp VARCHAR(20) PRIMARY KEY
);

INSERT INTO powerUp (idPowerUp) VALUES
('execucao'),
('creatina'),
('whey'),
('cardio'),
('pesado'),
('dieta'),
('disciplina');

CREATE TABLE nivelPowerUp(
fkUsuario INT,
fkPowerUp VARCHAR(20),
nivel DECIMAL(10),
CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario) REFERENCES highScore(fkUsuario),
CONSTRAINT fkPowerUp FOREIGN KEY (fkPowerUp) REFERENCES powerUp(idPowerUp),
CONSTRAINT pkNivelPowerUp PRIMARY KEY (fkUsuario, fkPowerUp)
);

-- Substituir na API o primeiro valor pelo id do usuário guardado no session storage e o terceiro pelo nível guardado na variável !

INSERT INTO nivelPowerUp (fkUsuario, fkPowerUp, nivel) VALUES
(1000, 'execucao', 5),
(1000, 'creatina', 10),
(1000, 'whey', 5),
(1000, 'cardio', 6),
(1000, 'pesado', 7),
(1000, 'dieta', 15),
(1000, 'disciplina', 10);

CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'usuario';
GRANT select, insert, delete, update ON musclerise.* TO 'usuario'@'localhost';
FLUSH PRIVILEGES;

select * from nivelPowerUp;

select * from highScore;

 INSERT INTO nivelPowerUp (fkUsuario, fkPowerUp, nivel) VALUES
	(1005, 'execucao', 0),
      (1005, 'creatina', 0),
      (1005, 'whey', 0),
      (1005, 'cardio', 0),
      (1005, 'pesado', 0),
     (1005, 'dieta', 0),
      (1005, 'disciplina', 0);
