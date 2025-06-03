const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

//Creates a model named "University" (which maps to a table called Universities by default in plural form).
//The table will have a column name: University Type: STRING (VARCHAR in SQL)
// allowNull: false: This field cannot be null
const University = sequelize.define('University', {
  name: { type: DataTypes.STRING, allowNull: false }
});

module.exports = University;


