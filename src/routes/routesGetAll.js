const routerGetAll = require('express').Router();

const ControllerGetLogs = require('../controllers/controllerGetLogs');
const ControlerMailAndUserChecks = require('../controllers/controlerMailAndUserCheck');
const credentialConnection = require('../Connection/credentialConnection')



routerGetAll.get('/',ControlerMailAndUserChecks.UserCheck(credentialConnection.connection)) //MiddleWare of Get Request

routerGetAll.get('/last10/:Username',ControllerGetLogs.last10Logs(credentialConnection.connection))
routerGetAll.get('/get/:Username',ControllerGetLogs.allUserLogs(credentialConnection.connection))
routerGetAll.get('/balance/:Username',ControllerGetLogs.SumAllUserEntrys(credentialConnection.connection))
routerGetAll.get('/balanceEg/:Username', ControllerGetLogs.SumAllUserEgress(credentialConnection.connection))


 



  
module.exports =routerGetAll     