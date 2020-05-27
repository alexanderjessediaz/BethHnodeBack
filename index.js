const app = require("./app")

const PORT = process.env.PORT || 5000
const cors = require('cors')
app.use(cors())
// app.get('/products/:id', function (req, res, next) {
//     res.json({msg: 'This is CORS-enabled for all origins!'})
// })

// app.listen(80, function () {
//     console.log('CORS-enabled web server listening on port 80')
// })


// const clientEmail = require("./Routes/emailSenderService")
// app.use("/emailSenderService", clientEmail)

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

// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
    //   to: 'test@example.com',
    //   from: 'test@example.com',
    //   subject: 'Sending with Twilio SendGrid is Fun',
    //   text: 'and easy to do anywhere, even with Node.js',
    //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    // };
    // sgMail.send(msg);

    // var server = app.listen(9000, function () {
    //     var host = server.address().address
    //     var port = server.address().port
    //     console.log("Example app listening at http://%s:%s", host, port)
    // })
    
    app.listen(PORT, () => console.log(`Listening on... ${PORT}`))
    
    