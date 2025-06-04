const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Paper = sequelize.define('Paper', {
  courseId: { type: DataTypes.INTEGER, allowNull: false },
  year: {type:DataTypes.INTEGER,allowNull: false },
  semester: {type:DataTypes.STRING,allowNull: false },
  fileUrl: {type:DataTypes.STRING,allowNull: false }
});

module.exports = Paper;
