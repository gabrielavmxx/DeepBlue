var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/acessarTodos/:idUsuario/:idQuiz", function (req, res) {
    dashboardController.selectCerto(req, res);
});

router.get("/acertosGerais/:idQuiz", function (req, res) {
    dashboardController.listarAcertosGerais(req, res);
});



module.exports = router;