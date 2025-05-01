create database deepblue;
use deepblue;

create table usuario
(
    idUsuario int primary key auto_increment,
    nome varchar(50),
    email varchar(60),
    senha varchar(20),
);