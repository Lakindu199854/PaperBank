const { Course } = require('../models');

const getCoursesByUniversity = async (req, res) => {
  try {
    const { universityId } = req.params;
    const courses = await Course.findAll({ where: { universityId } });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
};

const createCourse = async (req, res) => {
  try {
    const { name, universityId } = req.body;
    const newCourse = await Course.create({ name, universityId });
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create course' });
  }
};

module.exports = { getCoursesByUniversity, createCourse };
