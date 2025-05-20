var database = require("../../database/config")

function acessarCorretos(idUsuario, idQuiz) {
    console.log("ACESSEI A DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUsuario, idQuiz)
    var instrucaoSql = `
        select rq.correto from usuario u inner join resultado_quiz rq on u.idUsuario = rq.fkUsuario where idUsuario = ${idUsuario} and fkQuiz = ${idQuiz} and correto = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    acessarCorretos
};