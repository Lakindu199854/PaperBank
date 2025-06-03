//Middleware to handle multipart/form-data (used for file uploads).
const multer = require('multer');
// Node.js module to work with file and directory paths.
const path = require('path');

// Define storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); //Tells multer to save uploaded files in the uploads/ folder.
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); //Creates a unique file name using the current timestamp and a random number.
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

// File filter (optional)
//Restricts uploads to only .pdf, .doc, or .docx files.
//If the file extension isn't allowed, it rejects the upload.
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['.pdf', '.doc', '.docx'];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Only PDF or DOC files are allowed'), false);
  }
};

/**
This creates a middleware you can use in your route to handle file uploads with:
    Custom storage path and filename
    Optional file filtering
*/
const upload = multer({ storage, fileFilter });

module.exports = upload;
