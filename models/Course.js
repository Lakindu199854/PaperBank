const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Course = sequelize.define('Course', {
  name: { type: DataTypes.STRING, allowNull: false },
  universityId: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Course;
