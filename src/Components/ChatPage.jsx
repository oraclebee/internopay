// ChatPage.js

import React, { useState } from 'react';
import '../Resources/ChatPage.css'; // Import custom CSS for styling

export default function ChatPage() {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const generateResponseFromChatGPT = async (userMessage) => {
        try {
            const response = await fetch('YOUR_CHATGPT_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: userMessage })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch response from ChatGPT');
            }

            const data = await response.json();
            return data.response; // Assuming the response structure is { response: "Generated Response" }
        } catch (error) {
            console.error('Error generating response from ChatGPT:', error);
            return 'Error generating response. Please try again.'; // Fallback response
        }
    };

    const handleSendMessage = async () => {
        if (inputText.trim() !== '') {
            setMessages([...messages, { text: inputText, sender: 'user' }]);
            setInputText('');
            const response = await generateResponseFromChatGPT(inputText);
            setMessages([...messages, { text: response, sender: 'chatbot' }]);
        }
    };

    return (
        <div className="chat-page">
            <div className="chat-container">
                <div className="messages">
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.sender}`}>
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={inputText}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}
