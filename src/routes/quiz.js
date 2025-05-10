var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função salvarRespostas de quizController.js
router.post("/salvarRespostas", function (req, res) {
    quizController.salvarRespostas(req, res);
})

module.exports = router;