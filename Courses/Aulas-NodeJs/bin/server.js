const app = require('../src/app');
const debug = require('debug')('balta:server'); //debug de nome nodestr:server
const http = require('http'); //pra criar o servidor http

//constante para a porta da aplicação, pode ser fixada num numero, mas o melhor é nao fixar um numero, pq a porta pode estar em uso
const port = normalizePort(process.env.PORT || '3000'); //se nao tiver setado, joga pra porta 3000
app.set('port', port); //setamos a porta

const server = http.createServer(app); //criando o servidor

server.listen(port); //falando para o servidor para ficar ouvindo nessa porta
server.on('error', onError); //(evento, método)
server.on('listening', onListening);
console.log('API rodando na porta ' + port); //pra saber se deu tudo certo

function normalizePort(val){ //função tirada do gerador de codigo do express
    const port = parseInt(val, 10); //tentando converter o valor recebido para um inteiro

    if(isNaN(port)){ //se esse valor não for um numero, retorno 10
        return val;
    }

    if(port >= 0){ //se a porta for >= 0, retorno a porta
        return port;
    }

    return false; //ou então retorno falso
}

function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' 
    ? 'Pipe ' + port 
    : 'Port ' + port;

    switch (error.code){
        case 'EACCES': //ve se é um erro de permissao
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE': //ve se é um erro de endereço em uso
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
