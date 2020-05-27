const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})
















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





        
        

        
