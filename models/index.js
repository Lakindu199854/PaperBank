//Imports the Sequelize connection (sequelize).
const sequelize = require('../config/db');

//Imports the three models: University, Course, and Paper.
const University = require('./University');
const Course = require('./Course');
const Paper = require('./Paper');

//Associations
//This creates a foreign key column universityId in the Course table.
//One university can have many courses.
//Each course belongs to one university.
University.hasMany(Course, { foreignKey: 'universityId' });
Course.belongsTo(University);

Course.hasMany(Paper, { foreignKey: 'courseId' });
Paper.belongsTo(Course);

module.exports = { sequelize, University, Course, Paper };


// University
//   └── hasMany → Course
//               └── hasMany → Paper
