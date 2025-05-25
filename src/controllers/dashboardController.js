var dashboardModel = require("../models/dashboardModel");

function selectCerto(req, res) {
    var {idUsuario, idQuiz} = req.params;

    dashboardModel.acessarCorretos(idUsuario, idQuiz)
        .then((resultado) => {
            res.status(200).json(resultado);
        })
        .catch((erro) => {
            console.error("Erro ao buscar acertos:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function listarAcertosGerais(req, res) {
    var idQuiz = req.params.idQuiz;

    dashboardModel.acertosGerais(idQuiz)
        .then((resultado) => {
            res.status(200).json(resultado);
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

var dashboardModel = require("../models/dashboardModel");

function totalQuestoes(req, res) {
    var idQuiz = req.params.idQuiz;

    dashboardModel.totalQuestoes(idQuiz)
        .then(resultado => {
            if (resultado.length > 0) {
                res.json({ total: resultado[0].total });
            } else {
                res.json({ total: 0 });
            }
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    selectCerto,
    listarAcertosGerais,
    totalQuestoes
};