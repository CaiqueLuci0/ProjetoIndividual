var express = require("express");
var router = express.Router();

var highScoreController = require("../controllers/highScoreController");

router.post("/verificarSave", function (req, res) {
    highScoreController.verificarSave(req, res);
});

router.post("/cadastrarHighScore", function (req, res) {
    highScoreController.cadastrarHighScore(req, res);
});

router.post("/cadastrarPowerUps", function (req, res) {
    highScoreController.cadastrarPowerUps(req, res);
});

router.post("/apagarHighScore", function (req, res) {
    highScoreController.apagarHighScore(req, res);
});

router.post("/apagarPowerUps", function (req, res) {
    highScoreController.apagarPowerUps(req, res);
});

router.post("/exibirNiveis", function (req, res) {
    highScoreController.exibirNiveis(req, res);
});




module.exports = router;