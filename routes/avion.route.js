const express = require('express');
const router = express.Router();
const avionController = require('../controllers/avion.controller');

// Récupérer tous les listes des avions
router.get('/',avionController.findAllAvion);

// Récupérer un avion
router.get('/:id',avionController.findAvion);

// Enregistrement d'un avion
router.post('/',avionController.createAvion);

module.exports = router;