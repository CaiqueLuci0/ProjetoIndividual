var usuarioModel = require("../models/usuarioModel");
// var routerUsuario = require("../routes/usuario")
// var config = require ("../database/config");
// // var conexao = mysql.createConnection(mySqlConfig);

function verificarEmail(req, res) {
    var email = req.body.emailVerificado;

    usuarioModel.verificarEmail(email)
        .then(
            function (resultadoVerificar) {
                console.log('resultados encontrados:' + JSON.stringify(resultadoVerificar))
                if (resultadoVerificar.length == 0) {
                    res.status(201).json('E-mail válido');
                } else if (resultadoVerificar.length > 0) {
                    res.status(400).json('E-mail em uso');
                };
            }
        ).catch(
            function (error) {
                console.log(error.sqlMessage);
                res.status(500).send('Erro ao se conectar com o servidor');
            }
        );
};

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
    if (
        email.indexOf('.COM') < email.length - 4 ||
        email.indexOf('@') < 1
    ) {
        console.log('deu erro no email')
        res.status(400).send("Email inválido");
    } else if (
        nome.indexOf('0') > -1 ||
        nome.indexOf('1') > -1 ||
        nome.indexOf('2') > -1 ||
        nome.indexOf('3') > -1 ||
        nome.indexOf('4') > -1 ||
        nome.indexOf('5') > -1 ||
        nome.indexOf('6') > -1 ||
        nome.indexOf('7') > -1 ||
        nome.indexOf('8') > -1 ||
        nome.indexOf('9') > -1 ||
        nome.length < 2
    ) {
        console.log('deu erro no nome')
        res.status(400).send("Nome inválido");
    } else if (
        senha.length < 8 ||
        senha.indexOf(' ') >= 0
        ) {
            console.log('deu erro na senha')
        res.status(400).send("Senha inválida");
    } else if (
        sobrenome.indexOf('0') > -1 ||
        sobrenome.indexOf('1') > -1 ||
        sobrenome.indexOf('2') > -1 ||
        sobrenome.indexOf('3') > -1 ||
        sobrenome.indexOf('4') > -1 ||
        sobrenome.indexOf('5') > -1 ||
        sobrenome.indexOf('6') > -1 ||
        sobrenome.indexOf('7') > -1 ||
        sobrenome.indexOf('8') > -1 ||
        sobrenome.indexOf('9') > -1 ||
        sobrenome.length < 2
    ) {
        console.log('deu erro no sobrenome')
        res.status(400).send("Sobrenome inválido");
    } else if (dtNasc == undefined) {
        console.log('deu erro na data')
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
    };
};

module.exports = {
    verificarEmail,
    autenticar,
    cadastrar
};