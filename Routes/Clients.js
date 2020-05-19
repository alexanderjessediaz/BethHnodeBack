// const express = require("express")
// const router = express.Router()
var harperdbConnect = require("harperdb-connect")
const db = new HarperDBConnect('admin', 'Password123!')



const connectToDB = async () => {
    let db;
    try {
        db = await new HarperDBConnect('Aj_Diaz','Jackie', 'http://localhost:9925')
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}

module.exports = 