require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const mysql = require('mysql');
const credentialConnection = {}
credentialConnection.app = express();
credentialConnection.app.use(bodyParser.json());



// Credential for the server
const PORT = process.env.PORT ;
credentialConnection.connection = mysql.createConnection({ 
  multipleStatements: true,
  host:  process.env.HOST, 
  user: process.env.USER,
  //if i use a external server i put the password in the line of code of below
  // password:process.env.PASSWORD, 
  database: process.env.DATABASE 
});
 

// Check connect to mysql database
credentialConnection.checkConect=() => credentialConnection.connection.connect(error => {
  if (error) throw error;
  console.log('Database server running!');
});

credentialConnection.listenPort=() => app.listen( PORT, () => console.log(`Server running on port ${PORT},${ process.env.DATABASE}`));

module.exports=credentialConnection


