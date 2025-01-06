
export default class ChatBot {
    constructor() {
        this.API_KEY = 'AIzaSyCg0dD55MzZ9jVdAtl-cpKUsqOiIMKZJXE';
        this.API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.API_KEY}`;
    }

    async getResponse(prompt) {
        try {
            const response = await fetch(this.API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        role: 'user',
                        parts: [{
                            text: prompt.value
                        }]
                    }]
                }),
            });
    
            const result = await response.json();
    
            if (!response.ok) {
                console.error('Error response:', result);
                throw new Error(`HTTP ${response.status}: ${result.error.message}`);
            }
            
            return result;
    
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
}