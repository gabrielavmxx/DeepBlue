var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/acessarTodos/:idUsuario/:idQuiz", function (req, res) {
    dashboardController.selectCerto(req, res);
});

router.get("/acertosGerais/:idQuiz", function (req, res) {
    dashboardController.listarAcertosGerais(req, res);
});

router.get("/totalQuestoes/:idQuiz", function (req, res) {
    dashboardController.totalQuestoes(req, res);
});

module.exports = router;