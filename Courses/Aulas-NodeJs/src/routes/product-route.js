'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

//nosso create, read, update, delete, vão ser todos nessa mesma rota '/'
//(req, res, next) = (request, response, next)
    //status:   200 - ok
    //          201 - created
    //          400 - bad request
    //          401 - não autenticado
    //          403 - acesso negado
    //          500 - interal server error

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);


module.exports = router;