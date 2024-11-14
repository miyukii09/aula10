const express = require ('express');
const cors = require ('cors');
const mysql = require ('mysql');
const app = express ();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'aulabd'
});

// Conectando ao bando de dados
db.connect((erro) => {
    if (erro) {
        console.error('Erro ao conectatr ao MySQL:',erro);
    } else{
        console.log('Conectando ao MySQL com sucesso!');
    }
});