const ControllerTable = {}


// Create table register checked 
ControllerTable.createTableRegister=(connection) =>(req, res) => {
    const sql = 'CREATE TABLE node20_mysql.tableregister (ID INT NOT NULL  AUTO_INCREMENT, Username VARCHAR(50) NOT NULL , Mail VARCHAR(50) NOT NULL , Password VARCHAR(50) NOT NULL  ,PRIMARY KEY (ID))';
    connection.query(sql, (error, results) => {
      if (error) throw error; 
      if (results.length > 0) {
        return res.json(results);
      } else {
        return res.send('Table created');
      }
    }); 
  };  


  //Create table Username checked 
  ControllerTable.createTableUsername=(connection) =>(req, res) => {
    const { Username } = req.params;  
    const sql = `CREATE TABLE ${Username} (ID INT NOT NULL  AUTO_INCREMENT, Concept VARCHAR(50) NOT NULL , Ammount FLOAT NOT NULL , Date DATE NOT NULL , Tipe VARCHAR(50) NOT NULL ,PRIMARY KEY (ID))`;
    connection.query(sql, (error, results) => {
      if (error) throw error;
      if (results.length > 0) {  
        return res.json(results); 
      } else {
        return res.send('Table created'); 
      }     
    }); 
  };
   
  //Create first row of the new User Table, Checked
  ControllerTable.createFirstRowUserTable=(connection) =>(req, res) => {
    const { Username } = req.params;  
    const sql =  `INSERT INTO ${Username} SET ?` ;
  
    const registerObj = {
   
      Concept: req.body.Concept,
      Ammount: req.body.Ammount, 
      Date: req.body.Date,
      Tipe: req.body.Tipe,
      
    };
   
    connection.query(sql, registerObj, error => {
      if (error) throw error;
      return res.send('User not created!');
    });  
    
  } 
  ControllerTable.newUsernameInRegisterTable=(connection) =>(req, res) => {
 
    const sql =  `INSERT INTO tableregister SET ?` ;
  
    const registerObj = {
  
      Username: req.body.Username,
      Mail: req.body.Mail,
      Password: req.body.Password, 
    };
    
    connection.query(sql, registerObj, error => {
      if (error) throw error;
      return res.send('User not created!');
    });   
    
  } 
  module.exports = ControllerTable