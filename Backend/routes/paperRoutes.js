const express = require('express');
const router = express.Router();
const { getPapersByCourse, uploadPaper } = require('../controllers/paperController');
const upload = require('../middleware/upload');

router.get('/course/:courseId', getPapersByCourse);
router.post('/upload', upload.single('file'), uploadPaper); // << file upload endpoint

module.exports = router;
