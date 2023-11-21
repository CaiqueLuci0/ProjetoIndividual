var database = require("../database/config")

function verificarSave(idUsuario) {
    console.log()
    var instrucao = `
    SELECT qtdPontos, qtdClicks FROM highScore WHERE fkUsuario = '${idUsuario}'
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
};

function cadastrarHighScore(id, qtdClicks, pontos) {
    console.log('Estou no model cadastrando o highscore')
    var instrucao = `
    INSERT INTO highScore (fkUsuario, qtdClicks, qtdPontos) VALUES
    (${id}, ${qtdClicks}, ${pontos});
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
};


function cadastrarPowerUps(id, execucao, creatina, whey, cardio, treino, dieta, disciplina) {
    console.log("estou no model cadastrando powerUp")
    var instrucao = `
    INSERT INTO nivelPowerUp (fkUsuario, fkPowerUp, nivel) VALUES
    (${id}, 'execucao', ${execucao}),
    (${id}, 'creatina', ${creatina}),
    (${id}, 'whey', ${whey}),
    (${id}, 'cardio', ${cardio}),
    (${id}, 'pesado', ${treino}),
    (${id}, 'dieta', ${dieta}),
    (${id}, 'disciplina', ${disciplina});
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
};

function apagarHighScore(id){
    console.log("estou no model apagando highscore")
    var instrucao = `
    DELETE FROM highscore WHERE fkUsuario = ${id};
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function apagarPowerUps(id){
    console.log("estou no model apagando powerUps")
    var instrucao = `
    DELETE FROM nivelPowerUp WHERE fkUsuario = ${id};
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibirNiveis(id){
    console.log("estou no model fazendo select dos níveis!!")
    var instrucao = `
    SELECT * FROM nivelPowerUp WHERE fkUsuario = ${id} order by fkPowerUp;
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    verificarSave,
    cadastrarHighScore,
    cadastrarPowerUps,
    apagarHighScore,
    apagarPowerUps,
    exibirNiveis
};