var database = require("../../database/config")

function acessarCorretos(idUsuario, idQuiz) {
    console.log("ACESSEI A DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUsuario, idQuiz)
    var instrucaoSql = `
        SELECT 
            numQuestao,
            SUM(CASE WHEN correto = 1 THEN 1 ELSE 0 END) AS acertos,
            SUM(CASE WHEN correto = 0 THEN 1 ELSE 0 END) AS erros
        FROM resultado_quiz
        WHERE fkUsuario = ${idUsuario} AND fkQuiz = ${idQuiz}
        GROUP BY numQuestao
        ORDER BY numQuestao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function acertosGerais(idQuiz) {
    const instrucaoSql = `
        SELECT numQuestao, COUNT(*) AS totalAcertos
        FROM resultado_quiz
        WHERE correto = 1
        AND fkQuiz = ${idQuiz}
        GROUP BY numQuestao
        ORDER BY numQuestao;
    `;
    return database.executar(instrucaoSql);
}


module.exports = {
    acessarCorretos,
    acertosGerais
};