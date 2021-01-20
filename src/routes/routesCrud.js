const routesCrud = require('express').Router();
const ControlerMailAndUserChecks = require('../controllers/controlerMailAndUserCheck')
const ControllerCrud = require('../controllers/controllersCrud');
const credentialConnection = require('../Connection/credentialConnection')

 //I have a problem with this specific route "routesCrud.delete", the problem is if I use a middleware of authentication with this route i cant delete a log because the route cant pass the authentication middleware
 routesCrud.delete(ControlerMailAndUserChecks.UserCheck(credentialConnection.connection)) //middlewares for delete authentication
 routesCrud.delete('/delete/:Username/:id',ControllerCrud.deleteLogById(credentialConnection.connection))

routesCrud.use(ControlerMailAndUserChecks.UserCheck(credentialConnection.connection)) //middlewares for authentication
routesCrud.get(ControlerMailAndUserChecks.UserCheck(credentialConnection.connection)) //middlewares for authentication
routesCrud.put(ControlerMailAndUserChecks.UserCheck(credentialConnection.connection)) //middlewares for authentication

routesCrud.post('/first/:Username',ControllerCrud.firstRow(credentialConnection.connection))
routesCrud.post('/add/:Username',ControllerCrud.newLog(credentialConnection.connection))
routesCrud.get('/getbyid/:Username/:id',ControllerCrud.obtainByID(credentialConnection.connection))
routesCrud.put('/update/:Username/:id', ControllerCrud.updateLogById(credentialConnection.connection))






  
module.exports =routesCrud  