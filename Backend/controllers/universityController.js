//This imports the University Sequelize model so you can interact with the database.
const { University } = require('../models');

const getAllUniversities = async (req, res) => {
  try {
    const universities = await University.findAll(); // SELECT * FROM Universities
    res.json(universities);  // Send the list as JSON
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch universities' });
  }
};

const createUniversity = async (req, res) => {
  try {
    const { name } = req.body;
    const newUniversity = await University.create({ name }); // INSERT INTO Universities
    res.status(201).json(newUniversity);  // Return the created record
  } catch (error) {
    res.status(500).json({ error: 'Failed to create university' });
  }
};

module.exports = { getAllUniversities, createUniversity };
