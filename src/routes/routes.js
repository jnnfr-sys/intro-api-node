const express = require('express');
const router = express.Router();

const BairroController = require('../controllers/bairro');

router.get('/bairro', BairroController.listarBairros);
router.post('/bairro', BairroController.atualizarBairros);
router.patch('/bairro', BairroController.inserirBairros);
router.delete('/bairro', BairroController.excluirBairros);
 
module.exports = router;