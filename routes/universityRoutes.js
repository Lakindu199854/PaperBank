//Imports Express and creates a new router.
const express = require('express');
const router = express.Router();

//Imports two controller functions: getAllUniversities and createUniversity
const { getAllUniversities, createUniversity } = require('../controllers/universityController');

router.get('/', getAllUniversities);
router.post('/', createUniversity); // Optional: to add new universities

module.exports = router;
