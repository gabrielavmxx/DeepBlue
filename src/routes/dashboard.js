var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função salvarRespostas de quizController.js
router.get("/acessarCorreto", function (req, res) {
    dashboardController.selectCerto(req, res);
})

module.exports = router;