var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/acessarCorreto/:idUsuario/:idQuiz", function (req, res) {
    dashboardController.selectCerto(req, res);
});

router.get("/acessarTodos/:idUsuario/:idQuiz", function (req, res) {
    dashboardController.exibirTodos(req, res);
});

router.get("/acertosGerais", function (req, res) {
    dashboardController.listarAcertosGerais(req, res);
});



module.exports = router;