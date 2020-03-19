const express = require('express');
const Ninja = require('./models/beans/Ninja');
// const cors = require('cors');
// const routes = require('./config/routes');

const connection = require('./config/ConexaoBD');

const app = express();

// testar a conexão 
connection.connect(function(err) {
    if (err) throw err;
    criarNinja();
    console.log("Connected!");
    // createTable(connection);
    // removerTable(connection);
});

function criarNinja() {
    ninja = new Ninja(1, 'Sam', 'teste@gmail.com', 'senha', 'Folha', 'Kage', 'Ninjutsu', 'nao');
    console.log(ninja);
}

function removerTable(conn) {
    const sql = "DROP TABLE TESTANDO;"
    conn.query(sql, (error, results, fields) => {
        if(error) return console.log(error);
        console.log('removeu a tabela!');
    })
}

// função para criar tabela
function createTable(conn){
      const sql = "CREATE TABLE IF NOT EXISTS TESTANDO (ID int NOT NULL AUTO_INCREMENT, Nome varchar(150) NOT NULL, CPF char(11) NOT NULL, PRIMARY KEY (ID));";
      
      conn.query(sql, function (error, results, fields){
          if(error) return console.log(error);
          console.log('criou a tabela!');
      });
}

function addRows(conn){
    const sql = "INSERT INTO Clientes(Nome,CPF) VALUES ?";
    const values = [
          ['teste1', '12345678901'],
          ['teste1', '09876543210'],
          ['teste3', '12312312399']
        ];
    conn.query(sql, [values], function (error, results, fields){
            if(error) return console.log(error);
            console.log('adicionou registros!');
            conn.end();//fecha a conexão
        });
  }

// app.use(cors({ origin: 'http://localhost:8080' }));
// app.use(express.json());
// app.use(routes);

// app.listen(3333);