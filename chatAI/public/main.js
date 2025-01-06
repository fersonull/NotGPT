import * as hlpr from './js/helper.js';
import ChatBot from './js/Gemini.js';

const gemini = new ChatBot();

const prompt = hlpr.getter('input-prompt');
const sendBtn = hlpr.getter('send-prompt');
const chatWrapper = hlpr.getter('chat-wrapper');

let idLoader;
async function getResponse() {
    try {
        sendBtn.disabled = true;
        prompt.disabled = true;
        
        hlpr.createUserChat(chatWrapper, prompt.value);
        idLoader = hlpr.showLoader(chatWrapper);
        
        const data = await gemini.getResponse(prompt);
        hlpr.clearForm(prompt);

        const result = await data.candidates[0].content.parts[0].text;

        hlpr.createResponse(chatWrapper, result);
        
    } catch(e) {
        hlpr.createResponse(chatWrapper, 'Error, Please check your internet connection and try again.');
    } finally {
        sendBtn.disabled = false;
        prompt.disabled = false;
        hlpr.getter(idLoader).style.display = 'none';
    }
}

hlpr.clickEvent(sendBtn, async () => {
    
    if(!prompt.value) return;

    getResponse();

})

hlpr.enterSubmit(prompt, async () => {

    if(!prompt.value) return;

    getResponse();
})