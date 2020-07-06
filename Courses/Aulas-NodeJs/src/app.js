//aqui é onde será composta a aplicação
'use strict';

const express = require('express');
const bodyParser = require('body-parser'); //para converter para json

const app = express();
const router = express.Router();

//Carrega (importa) as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false
}));

//sempre que criamos uma rota, temos as opções get, post, delete, put, patch, (essas sao as mais utilizadas) e varios outros
//get pra obter informações, o post para enviar infos, o put pra atualizar, e o delete para excluir essas informações

//nosso create, read, update, delete, vão ser todos nessa mesma rota '/'
//(req, res, next) = (request, response, next)

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app; //exportando a aplicação
