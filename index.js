const express = require('expess')
const cors = require("cors")
app.use(cors)
const bodyParser = require("body-parser")
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser())

const createUser = (req, res) => {
    res.json({
        user: "something"
    })
}



app.listen(PORT, () => console.log(`Listening on... ${PORT}`))