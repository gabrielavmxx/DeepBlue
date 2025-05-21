var database = require("../../database/config")

function salvarRespostas(idUsuario, numQuestao , idQuiz, correto, resultado)
{
    var instrucaoSql =  
    `
        INSERT INTO resultado_quiz (resultado, correto, numQuestao, fkUsuario, fkQuiz) VAlUES
    `
    for(let i = 0; i < resultado.length; i++){
        
        if(correto.length > 0){
            instrucaoSql += 
            `
            ("${resultado[i]}", ${correto[i]}, ${numQuestao[i]} , ${idUsuario}, ${idQuiz})
            `
        }else{
            instrucaoSql += 
            `
            ("${resultado[i]}", null, ${numQuestao[i]} , ${idUsuario}, ${idQuiz})
            `
        }
        
        if(i != (resultado.length -1)){
            instrucaoSql += ','
        }else{
            instrucaoSql += ';'
        }
    }

    return database.executar(instrucaoSql);
}

module.exports = {
    salvarRespostas
};