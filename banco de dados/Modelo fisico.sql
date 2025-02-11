-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE Contatos (
id INTEGER PRIMARY KEY,
nome VARCHAR(100),
email VARCHAR(50),
mensagem VARCHAR(300),
telefone VARCHAR(15)
)

CREATE TABLE Doacoes (
id INTEGER PRIMARY KEY,
nome VARCHAR(100),
email VARCHAR(50),
valor DECIMAL(10,2),
telefone VARCHAR(15)
)

CREATE TABLE Povos (
nome VARCHAR(100),
id INTEGER PRIMARY KEY
)

CREATE TABLE Contos (
id INTEGER PRIMARY KEY,
titulo VARCHAR(255),
descricao VARCHAR(1000),
id_povos INTEGER,
FOREIGN KEY(id) REFERENCES Povos (id)
)

CREATE TABLE Idiomas (
id INTEGER PRIMARY KEY,
nome VARCHAR(100),
familia_linguistica VARCHAR(100)
)

CREATE TABLE Povos_idiomas (
id INTEGER,
id INTEGER,
FOREIGN KEY(id) REFERENCES Idiomas (id),
FOREIGN KEY(id) REFERENCES Povos (id)
)

