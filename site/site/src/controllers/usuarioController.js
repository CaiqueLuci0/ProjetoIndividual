var usuarioModel = require("../models/usuarioModel");
// var routerUsuario = require("../routes/usuario")
// var config = require ("../database/config");
// // var conexao = mysql.createConnection(mySqlConfig);

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    usuarioModel.autenticar(email, senha)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);
                if (resultadoAutenticar.length > 0) {
                    res.json(resultadoAutenticar[0])
                }
            }
        )
};

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var sobrenome = req.body.sobrenomeServer;
    var nome = req.body.nomeServer;
    var dtNasc = req.body.dtNascServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Campo sobrenome vazio");
    } else if (sobrenome == undefined) {
        res.status(400).send("Campo sobrenome vazio");
    } else if (senha == undefined) {
        res.status(400).send("Campo senha vazio");
    } else if (email == undefined) {
        res.status(400).send("Campo email vazio");
    } else if (dtNasc == undefined) {
        res.status(400).send("Campo data de nascimento está vazio");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js

        usuarioModel.cadastrar(nome, email, senha, sobrenome, dtNasc)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
};

module.exports = {
    autenticar,
    cadastrar
};