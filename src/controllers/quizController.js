var quizModel = require("../models/quizModel");

function salvarRespostas(req, res){
    var resultado = req.body.resultadoServer;
    var correto = req.body.corretoServer;
    var idUsuario = req.body.idUsuarioServer;
    var idQuiz = req.body.idQuizServer;

    if(correto.length > 0 && resultado.length != correto.length){
        res.status(400).json({mensagem: "Quantidade de respostas incoerrente"})
    }

    quizModel.salvarRespostas(idUsuario, idQuiz, correto, resultado)

    .then( //espera executar o resto da funcao para executar essa parte
        function (resultadoAutenticar) {
            console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
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
    salvarRespostas
};