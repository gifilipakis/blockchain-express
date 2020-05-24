const express = require('express');
const router = express.Router();
const BlockchainController = require('../controllers/blockchain-controller');

router.get('/lista-blockchain', (req, res, next) => {
    const blockchainData = BlockchainController.getData();
    res.render('lista-blockchain', blockchainData);
});

module.exports = router;