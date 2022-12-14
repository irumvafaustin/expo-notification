import express, { response } from 'express'
import Controller from '../controller/controller';
const tokenRouter = express.Router()
tokenRouter.post('/send', async(request,response)=>{
    try{
        let push_tokens = await Controller.getPushTokens();
        let body = request.body.message;
        let messages = Controller.createMessages(body,
            {
            body,
            },
            push_tokens);
        await Controller.sendMessages(messages);
        response.send('done')
         }
    catch(e)
         {
        response.send(e);
            }
} ) 

tokenRouter.post('/send/:token', async(request,response)=>{
    try{
        let push_tokens = [{token: request.params.token}]
        let body = request.body.message;
        let messages = Controller.createMessages(body,
            {
            body,
            },
            push_tokens);
        await Controller.sendMessages(messages);
        response.send('done')
         }
    catch(e)
         {
        response.send(e);
            }
} ) 

tokenRouter.post('/savetoken', Controller.storePushToken)

export default tokenRouter