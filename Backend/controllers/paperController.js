const { Paper } = require('../models');


/*
Extracts courseId from the URL path (e.g., /api/papers/course/3)
Uses Sequelize's findAll() to get all papers with that course ID
Returns the list as a JSON response
On error, returns 500 Internal Server Error
*/
const getPapersByCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const papers = await Paper.findAll({ where: { courseId } });
    res.json(papers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch papers' });
  }
};

const uploadPaper = async (req, res) => {
  try {
    const { courseId, year, semester } = req.body; //Gets courseId, year, and semester from the request body (form data).

    if (!req.file) { //Checks if a file was uploaded using multer (req.file). If not, returns a 400 error.
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

    const paper = await Paper.create({ courseId, year, semester, fileUrl });
    res.status(201).json(paper);
  } catch (error) {
    console.error('Upload failed:', error);
    res.status(500).json({ error: 'Failed to upload paper' });
  }
};

module.exports = { getPapersByCourse, uploadPaper };
