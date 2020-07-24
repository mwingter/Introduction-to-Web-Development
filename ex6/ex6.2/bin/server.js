// Nome: Michelle Wingter da Silva, nUSP: 10783243

'use strict'

const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');
const { EADDRINUSE } = require('constants');

//normalizando a porta usando variáveis de ambiente
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

// ouvindo pedidos na porta
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('API rodando na porta ' + port);

// caso a porta definida (3000) já esteja em uso
function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

// gerenciando erros
function onError(error){
    if (error.syscall !== 'listen') throw error;

    const bind = typeof port === 'string' ? 
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES':      // permissão
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':  // endereço em uso
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// pega informações do servidor e inicia a depuração
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ?
        'Pipe ' + addr :
        'Port ' + addr.port;
    debug('Listening on ' + bind);
}