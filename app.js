const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')


const app = express()
app.use(bodyParser.json())

//it is added by me for cors origin ie it is listed in youtube video 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if( req.method === 'OPTIONS'){
      req.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    }
    next();
  });
// app.get('/',(req,res)=>{
//     res.send('hello world')
// })
// app.get('/employees',(req,res)=>{
//     res.send('employee')
// })

const connetDB = require('./config/db')

// load config
dotenv.config({path : './config/config.env'})

connetDB()

// Routes
app.use('/',require('./routes/index'))



app.listen(3000)