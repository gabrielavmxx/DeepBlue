var database = require("../../database/config")

function totalQuestoes(idQuiz) {
    const instrucaoSql = `
        SELECT COUNT(DISTINCT numQuestao) AS total
        FROM resultado_quiz
        WHERE fkQuiz = ${idQuiz};
    `;
    return database.executar(instrucaoSql);
}

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

function questaoMaisAcertada(idQuiz){
    const instrucaoSql = `
        select numQuestao from resultado_quiz where correto = 1 and fkQuiz = ${idQuiz} group by numQuestao order by count(*) desc limit 1;
    `;
    return database.executar(instrucaoSql);
}

function questaoMenosAcertada(idQuiz){
    const instrucaoSql = `
       select numQuestao from resultado_quiz where correto = 1 and fkQuiz = ${idQuiz} group by numQuestao order by count(*) limit 1;
    `;
    return database.executar(instrucaoSql);
}

function mediaQuestoes(idQuiz, idUsuario){
    const instrucaoSql = `
    SELECT
    COUNT(CASE WHEN rq.correto = 1 THEN 1 END) * 100.0 / COUNT(*) AS taxa_acertos
    FROM resultado_quiz rq
    JOIN usuario u ON rq.fkUsuario = u.idUsuario
    JOIN quiz q ON rq.fkQuiz = q.idQuiz
    WHERE rq.fkUsuario = ${idUsuario} AND rq.fkQuiz = ${idQuiz}
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    acessarCorretos,
    acertosGerais,
    totalQuestoes,
    questaoMaisAcertada,
    mediaQuestoes,
    questaoMenosAcertada
};