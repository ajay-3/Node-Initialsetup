const config = require('config');

const client = require('twilio')(config.get('twilio.accountSid'), config.get('twilio.authToken'));

async function sendMsg(toContact,OTP){
    client.messages
    .create({
       body: `Your Dhathu App verification code is ${OTP}`,
       from: '+12058272300',
       to: toContact
     })
    .then(message => console.log(message.sid));
}

module.exports = sendMsg