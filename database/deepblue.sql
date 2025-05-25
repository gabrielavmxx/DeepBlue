drop database deepblue;
create database deepblue;
use deepblue;

create table usuario
(
    idUsuario int primary key auto_increment,
    nome varchar(50),
    email varchar(60),
    senha varchar(20)
);

create table quiz
(
    idQuiz int auto_increment primary key,
    descricao varchar(50)
);

insert into quiz(descricao)
values
("Quiz de personalidade"),
("Quiz de cultura"),
("Quiz sobre surfistas");

create table resultado_quiz
(
    idResultado int primary key auto_increment,
    resultado char(1),
    correto boolean,
    numQuestao int,
    fkUsuario int,
    fkQuiz int,
    dataQuiz datetime default CURRENT_TIMESTAMP,
    foreign key (fkUsuario) references usuario (idUsuario),
    foreign key (fkQuiz) references quiz (idQuiz)
);

select * from usuario;
use deepblue;
select * from resultado_quiz;

select rq.correto from usuario u inner join resultado_quiz rq on u.idUsuario = rq.fkUsuario where idUsuario = 1 and fkQuiz = 2 and correto = 1 group by idUsuario desc limit 7;

SELECT rq.correto
FROM resultado_quiz rq
INNER JOIN usuario u ON u.idUsuario = rq.fkUsuario
WHERE rq.fkUsuario = 1 AND rq.fkQuiz = 2 AND rq.correto = 1
ORDER BY rq.idResultado DESC
LIMIT 7;

SELECT numQuestao, COUNT(*) AS totalAcertos
        FROM resultado_quiz
        WHERE correto = 1
        AND fkQuiz = 3
        GROUP BY numQuestao
        ORDER BY numQuestao;