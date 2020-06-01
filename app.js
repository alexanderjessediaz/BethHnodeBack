const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const sendGrid = require('@sendgrid/mail')

const app = express()

app.use(bodyParser.json())

app.use(cors())



app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow_Origin","*")
    res.setHeader( "Access-Control-Allow-Methods","POST")
    res.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization")
    next()
})


app.get('/api', (req,res, next) => {
    res.send('API status: Running')
})



app.post('/api/email', (req,res,next) => {
    sendGrid.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: 'alexanderjessediaz@gmail.com',
      from: req.body.email,
      subject: 'Sending with Twilio SendGrid is Fun',
      text: req.body.message
    };
    sendGrid.send(msg)
        .then(result => {
            res.status(200).json({
                success:true
            })      
        })
        .catch(err => {
            console.log('error:', err)
            res.status(401).json({
                success:false
            })
        })
    })

app.listen(9000, '0.0.0.0')

















// const { HarperDBConnect } = require('harperdb-connect')
// const db = new HarperDBConnect('AJ_Diaz', 'jackie')

// // HarperDB
// db.setDefaultOptions({
//     method: 'POST',
//     headers: {
//             'content-type': 'application/json'
//         },
//         json: true
//     })
//     db.connect('http://localhost:9925')
//     .then(() => {
//         db.request({ operation: "describe_all" })
//           .then(res => console.log(res))
//           .catch(err => console.error(err))
// })
// .catch(err => console.log(err))



module.exports = app





        
        

        
