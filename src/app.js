//config requirements
require('dotenv').config();
const morgan = require('morgan')
const credentialConnection = require('./Connection/credentialConnection')


//settings
app = credentialConnection.app
credentialConnection.checkConect()


//Importing Routes
const routesCrud = require('./routes/routesCrud');
const routesEmailAndUserChecks = require('./routes/routesEmailAndUserChecks');
const routerGetAll = require('./routes/routesGetAll');
const routesTable = require('./routes/routesTable');



 
//midleware of consoles logs
app.use(morgan('dev'));

//routes
app.use('/Crud',routesCrud) 
app.use('/emailed',routesEmailAndUserChecks)
app.use('/getAll',routerGetAll)
app.use('/Table',routesTable) 
 

// Check connect to mysql database
credentialConnection.listenPort()
 