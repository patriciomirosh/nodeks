

const ControllerCrud = {}



//Put the first Row in the user table Checked 
ControllerCrud.firstRow=(connection) => (req, res) => {
    
  const {Username} =req.params
  const registerObj1 = {
      
    Concept: req.body.Concept,
    Ammount: req.body.Ammount,
    Date: req.body.Date,
    Tipe: req.body.Tipe,
    
  }; 


    
    const sql = `INSERT INTO ${Username} SET ?`;
    
   
   
    connection.query(sql, registerObj1, error => {
  
      if (error) throw error; 
      res.send('register Created');
     return
    }); 
  }



  
//add a new log  Checked
ControllerCrud.newLog=(connection) => (req, res) => {
    const {Username} = req.params;
    const sql = `INSERT INTO ${Username} SET ?`;
  
    const registerObj = {
  
      Concept: req.body.Concept,
      Ammount: req.body.Ammount,
      Date: req.body.Date,
      Tipe: req.body.Tipe
    };
  
  
    connection.query(sql, registerObj, error => {
      if (error) throw error;
      res.send('Register created!');
    });
  };
  
  // Bbtain By ID Checked




  ControllerCrud.obtainByID=(connection) =>(req, res) => {
    
    const {Username} = req.params;  
    const { id } = req.params;
    const sql = `SELECT * FROM ${Username} WHERE id = ${id}`;
    connection.query(sql, (error, result) => {
      if (error) throw error;
  
      if (result.length > 0) {
        res.json(result);
        res.json(req.local.Password)
      } else {
        res.send('Not result');
      }
    });
  };



  
  // update a Logs by ID Checked
  ControllerCrud.updateLogById=(connection) =>(req, res) => {
    const { Username} =req.params;
    const { id } = req.params;
    const { Concept, Ammount , Date}= req.body;
    const sql = `UPDATE ${Username} SET Concept = '${Concept}', Ammount='${Ammount}',Date='${Date}' WHERE id =${id}`;
  
    connection.query(sql, error => { 
      if (error) throw error;
      res.send('Customer updated!');
    });
  };
  
  // delete logs by ID Checked
  ControllerCrud.deleteLogById=(connection) => (req, res) => {
    const {Username} =req.params;
    const {id} = req.params;
    const sql = `DELETE FROM ${Username} WHERE id= ${id}`;
  
    connection.query(sql, error => {
      if (error) throw error; 
      res.send('Delete Register');
    });
  };
  

  module.exports = ControllerCrud