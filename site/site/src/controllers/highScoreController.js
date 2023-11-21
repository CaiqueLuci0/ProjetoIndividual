var highScoreModel = require("../models/highScoreModel");

function verificarSave(req,res){
    
    var idUsuario = req.body.idServer

    highScoreModel.verificarSave(idUsuario)
    .then(
        function(resultadoVerificacao){
            if(resultadoVerificacao.length == 1){
                console.log('já tem save');
                console.log(JSON.stringify(resultadoVerificacao));
                res.status(201).json(resultadoVerificacao[0]);
            } else if(resultadoVerificacao.length == 0){
                console.log('Não tem save');
                console.log(JSON.stringify(resultadoVerificacao));
                res.status(204).send('Nenhum save encontrado');
            };
        }
    ) .catch(
        function (error) {
            console.log(error.sqlMessage);
            res.status(500).send('Erro ao se conectar com o servidor');
        }
    );

};

    function cadastrarHighScore (req, res){
        var id = req.body.idServer;
        var qtdClicks = req.body.qtdClicks;
        var pontos = req.body.pontosServer;

        highScoreModel.cadastrarHighScore(id, qtdClicks, pontos)
        .then(
            function(resultado){
                console.log(resultado);
                res.json(resultado);
            }
        ) .catch(
            function (erro){
                console.log(erro);
                res.status(500).send('Erro na comunicação com o servidor');
            }
        );

    };

    function cadastrarPowerUps(req, res){
        console.log('estou no controller')
        var id = req.body.idServer;
        var execucao = req.body.execucao;
        var creatina = req.body.creatina;
        var whey = req.body.whey;
        var cardio = req.body.cardio;
        var treino = req.body.treino;
        var dieta = req.body.dieta;
        var disciplina = req.body.disciplina;
        console.log('criei as variaveis');

        highScoreModel.cadastrarPowerUps(id, execucao, creatina, whey, cardio, treino, dieta, disciplina)
        .then(
            function(resultado){
                console.log(resultado);
                res.json(resultado);
            }
        ) .catch(
            function (erro){
                console.log(erro);
                res.status(500).send('Erro na comunicação com o servidor');
            }
        );
    }

    function apagarHighScore(req, res){
        var id = req.body.idServer;

        highScoreModel.apagarHighScore(id)
        .then(
            function(resultado){
                console.log(resultado);
                res.json(resultado);
            }
        ) .catch(
            function (erro){
                console.log(erro);
                res.status(500).send('Erro na comunicação com o servidor');
            }
        );
    }

    function apagarPowerUps(req, res) {
        var id = req.body.idServer;

        highScoreModel.apagarPowerUps(id)
        .then(
            function(resultado){
                console.log(resultado);
                res.json(resultado);
            }
        ) .catch(
            function (erro){
                console.log(erro);
                res.status(500).send('Erro na comunicação com o servidor');
            }
        );
    };

    function exibirNiveis(req, res){
        var id = req.body.idServer;

        highScoreModel.exibirNiveis(id)
        .then(
            function(resultadoVerificacao){
                    console.log('estou no .ok do controller')
                    res.status(201).json(resultadoVerificacao); 
            }
        ) .catch(
            function(erro){
                console.log(erro);
                res.status(500).send('Erro na comunicação com o servidor');
            }
        )
    };

module.exports = {
    verificarSave,
    cadastrarHighScore,
    cadastrarPowerUps,
    apagarHighScore,
    apagarPowerUps,
    exibirNiveis
};