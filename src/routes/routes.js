const express = require('express');
const router = express.Router();

const BairroController = require('../controllers/bairro');

router.get('/bairro', BairroController.listarBairros);
 
module.exports = router;