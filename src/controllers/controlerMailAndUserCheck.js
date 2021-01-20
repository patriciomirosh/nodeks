const nodemailer = require('nodemailer')
require('dotenv').config();

const ControlerMailAndUserChecks={}

//this is the controller for the middleware authentication
ControlerMailAndUserChecks.UserCheck= (connection)=>( req, res, next) => {
    
    const locale = {
      Email:req.body.Email,
      Username:req.body.Username} //  This username I get from the database and this is a random 25 character UID, it is more secure than password
   
      const sql = `SELECT Username FROM tableregister WHERE Mail = '${locale.Email}' AND Username = '${locale.Username}' `;
      
      connection.query(sql,(error, result) => {
      
        if (error) throw error;   
        if(result!=undefined){
        if (result.length>0) {
          next();
        
          }     
          else{res.send("not allowed to see the database")}
      }})
    };    
  
 //controler for send a mail to my personal mail
    ControlerMailAndUserChecks.MailSend=(req, res) => { 
        const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
              user: process.env.USER_EMAIL,
              pass: process.env.USER_PASSWORD
          }})
          
          
          var mailOptions = {
            from: 'mirospatricio@gmail.com',
            to: 'pato.16.pp@gmail.com',
            subject: `${req.body.subject}`, 
            text: `Sent from ${req.body.name} \n
            .Message body ${req.body.message}. \n
             Contact: mail:${req.body.email}`} 
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error){ 
              console.log(error);
              res.send(500, error.message);
          } else { 
              console.log("Email sent"); 
              res.status(200).json(req.body); 
          }
        })
    }

    module.exports = ControlerMailAndUserChecks