const { Sequelize } = require('sequelize');

//Load .env file
//Without this our app won't read the .env file.
//process.env will be undefined.
require('dotenv').config();


//The Sequelize object is the main instance that connects your Node.js application to your SQL database
//It comes from the Sequelize class in the sequelize library.
//You're creating a Sequelize object, named sequelize.
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER, // Output: root
  process.env.DB_PASSWORD,  // Output: secret123
  {
    host: process.env.DB_HOST,
    //Tells Sequelize you're using MySQL
    dialect: 'mysql',
    port: process.env.DB_PORT,
    //Disables SQL query logs in the console
    logging: false
  }
);

module.exports = sequelize;

/**
 The sequelize object represents the connection to your database, and gives you powerful capabilities:
Capability	                                        Description
    Connect to DB	                Establishes a connection with your SQL database
    Define Models	                You can define tables using sequelize.define(...)
    Set Associations	            Define relationships like hasMany, belongsTo
    Sync DB Schema	                Run sequelize.sync() to auto-create or update tables
    Run Queries	                    Use sequelize.query(...) to run raw SQL queries
    Manage Transactions	            Supports sequelize.transaction(...) for safe DB operations
 */