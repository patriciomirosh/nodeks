const routesEmailAndUserChecks = require('express').Router();

const ControlerMailAndUserChecks = require('../controllers/controlerMailAndUserCheck');
const credentialConnection = require('../Connection/credentialConnection');

routesEmailAndUserChecks.post(ControlerMailAndUserChecks.UserCheck(credentialConnection.connection)) // MiddleWare of method post for send a email


routesEmailAndUserChecks.post('/email/',ControlerMailAndUserChecks.MailSend)







  
module.exports =routesEmailAndUserChecks
