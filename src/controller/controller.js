import Token from "../model/tokens";
let { Expo } = require("expo-server-sdk");
let expo = new Expo();
class Controller{
 static getPushTokens=async()=>{
    try{
        const token = await Token.find();
        return token;
    }
    catch(e){

    }
}


static storePushToken=async(request,response)=>{
    try{
        const token= new Token(request.body);
        await token.save();
        response.send('success')
    }
    catch(e){
console.log(e)
    }

}
static createMessages=(body, data, pushTokens)=>{
let messages = [];
for (let pushToken of pushTokens) {
messages.push({
    to: pushToken.token,
    sound: 'default',
    body: body,
    data: { withSome: 'data' },
  })
}
return messages;
}

static sendMessages=async(messages)=>{
let chunks = expo.chunkPushNotifications(messages);
for (let chunk of chunks) {
try {
await expo.sendPushNotificationsAsync(chunk);
} catch (error) {
console.error(error);
}
}
return 0;
}
}
export default Controller;