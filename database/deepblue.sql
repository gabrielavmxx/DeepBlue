
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
    fkUsuario int,
    fkQuiz int,
    dataQuiz datetime default CURRENT_TIMESTAMP,
    foreign key (fkUsuario) references usuario (idUsuario),
    foreign key (fkQuiz) references quiz (idQuiz)
);