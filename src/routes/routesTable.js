const routesTable = require('express').Router();

const ControllerTable = require('../controllers/controllersTable');
const credentialConnection = require('../Connection/credentialConnection')


// I dont need middleware for authentication because in this seccion I create the user and the table register
// In the main page we can't create a table register, don't exist the opcion of create a table register but the route exist, use the below route one time.
routesTable.post('/createtableregister',ControllerTable.createTableRegister(credentialConnection.connection))
routesTable.post('/create/:Username',ControllerTable.createTableUsername(credentialConnection.connection))
routesTable.post('/newUser/:Username',ControllerTable.createFirstRowUserTable(credentialConnection.connection))
routesTable.post('/newUser', ControllerTable.newUsernameInRegisterTable(credentialConnection.connection))






  
module.exports =routesTable   