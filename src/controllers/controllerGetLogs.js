const ControllerGetLogs = {}

ControllerGetLogs.last10Logs= (connection)=>(req, res) => {
     

      const {Username} = req.params;
      const sql = `SELECT * FROM ${Username} ORDER BY ID DESC LIMIT 10`;
    
      connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
          res.json(results);
        } else { 
          res.send('Not result');
        }
      });
    };
      
    //Show all the Logs of the Table. Checked
    ControllerGetLogs.allUserLogs= (connection)=>(req, res) => {
      const {Username} = req.params;
      const sql = `SELECT * FROM ${Username}`;
      
      connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
          res.json(results);
        } else {
          res.send('Not result');
        }
      }); 
    };
    
    
    // Get the sum of all entry logs Checked
    ControllerGetLogs.SumAllUserEntrys= (connection)=>(req, res) => {  

      
      const Username = req.params.Username;
      const sql = `SELECT id,sum(Ammount) as added FROM ${Username} WHERE Tipe = "in" `;
      
      connection.query(sql, (error, result) => {
        
        if (error) throw error;
    
        if (result.length > 0) {
          res.json(result);
        } else {
          res.send('No Register');
        }
      });
    };
    
    // Get the sum of all egress logs Checked 
    ControllerGetLogs.SumAllUserEgress= (connection)=>(req, res) => {
      const Username = req.params.Username;
      const sql =  `SELECT id,sum(Ammount) as added FROM ${Username} WHERE Tipe = "eg" `;
      
      connection.query(sql, (error, result) => { 
        if (error) throw error;
    
        if (result.length > 0) {
          res.json(result);
        } else {
          res.send('No Register');
        }
      });
    }
    
    module.exports = ControllerGetLogs