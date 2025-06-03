const express = require('express');
const router = express.Router();
const { getCoursesByUniversity, createCourse } = require('../controllers/courseController');

router.get('/university/:universityId', getCoursesByUniversity);
router.post('/', createCourse); // Optional: to add new courses

module.exports = router;
