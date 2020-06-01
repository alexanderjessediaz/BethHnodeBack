const app = require("./app")

const PORT = process.env.PORT || 5000
const cors = require('cors')
app.use(cors())


exports.handler = async (event, context) => {
    let statusCode = "200"
    
    if (event.httpMethod === "POST"){
        const sgMail = require("@sendgrid/mail")
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        
        const {email, message } = JSON.parse(event.body)
        try {
            await sgMail.send({
                from: "alexanderjessediaz@gmail.com",
                to: "alexanderjessediaz@gmail.com",
                reply_to: email,
                subject: "Inbound message",
                text: message,
            })
        } catch (err) {
            statusCode = "500"
        }
    }
    return {
        statusCode,
        headers: {
            "Access-Control-Allow_Origin": "https://localhost:3000",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "POST"
        },
    }
}

    
    app.listen(PORT, () => console.log(`Listening on... ${PORT}`))
    
    