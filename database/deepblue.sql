create database deepblue;
use deepblue;

create table usuario
(
    idUsuario int primary key auto_increment,
    nome varchar(50),
    email varchar(60),
    senha varchar(20),
);

create table quiz
(
    idQuz int auto_increment primary key,
    descricao varchar(50)
);

create table resultado_quiz
(
    idResultado int primary key auto_increment,
    resultado varchar(40),
    fkUsuario int,
    fkQuiz int,
    foreign key (fkUsuario) references usuario (idUsuario),
    foreign key (fkQuiz) references quiz (idQuiz)
);