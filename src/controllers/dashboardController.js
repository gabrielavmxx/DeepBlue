var dashboardModel = require("../models/dashboardModel");

function selectCerto(req, res){
    var idUsuario = req.body.idUsuarioServer;
    var idQuiz = req.body.idQuizServer;

    if(idUsuario != ""){
        res.status(400).json({mensagem: "Quantidade de respostas incoerrente"})
    }

    dashboardModel.acessarCorretos(idUsuario, idQuiz)

    .then( //espera executar o resto da funcao para executar essa parte
        function (resultadoCorreto) {
            console.log(`\nResultados encontrados: ${resultadoCorreto.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoCorreto)}`); // transforma JSON em String
            res.status(201).json()
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao enviar para o banco de dados! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    selectCerto
};