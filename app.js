const express = require('express')
const app = express()
// let http = reuire('http').Server(app)
// var fs = require('fs')
// const authToken = db.setAuthorization('AJ_Diaz', 'Jackie')
const { HarperDBConnect } = require('harperdb-connect')
const db = new HarperDBConnect('AJ_Diaz', 'Jackie')

db.setDefaultOptions({
    method: 'POST',
    headers: {
            'content-type': 'application/json'
        },
        json: true
    })

db.connect('http://localhost:9925')
.then(() => console.log("Connected!"))
.catch(err => console.log(err))

const connectToDB = async () => {
    let db;
    try {
        db = await new HarperDBConnect('Aj_Diaz','Jackie', 'http://localhost:9925')
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}



// db.request({ operation: "describe_all" })
//   .then(res => console.log(res))
//   .catch(err => console.error(err))


        
        
        
        // CORS
        // const cors = require('cors')
        // app.use(cors())
        // app.get('/products/:id', function (req, res, next) {
        //     res.json({msg: 'This is CORS-enabled for all origins!'})
        //   })
        // app.listen(80, function () {
        //     console.log('CORS-enabled web server listening on port 80')
        //   })
        


        
        // app.get("/", connectToDB(req,res){
            //     const ClientData = 
            // })

// var server = app.listen(9000, function () {
//     var host = server.address().address
//     var port = server.address().port
//     console.log("Example app listening at http://%s:%s", host, port)
// })