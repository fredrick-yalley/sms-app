const dotenv = require('dotenv');
dotenv.config({ path: './config.env'});
const credentials = {
    apiKey: process.env.API_KEY,
    username: process.env.API_USERNAME,
}

const AfricasTalking = require('africastalking')(credentials);
const sms = AfricasTalking.SMS;

module.exports.SendMessage = (sender, recipient, message) => {
   
        const options = {
            to: recipient,
            message: message,
            from: sender
        }
        sms.send(options).then(console.log).catch(console.log());
    
}

