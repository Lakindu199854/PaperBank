const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Paper = sequelize.define('Paper', {
  courseId: { type: DataTypes.INTEGER, allowNull: false },
  year: DataTypes.INTEGER,
  semester: DataTypes.STRING,
  fileUrl: DataTypes.STRING
});

module.exports = Paper;
