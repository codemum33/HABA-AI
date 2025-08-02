
document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.createElement('div');
    chatBox.className = 'chat-box';
    chatBox.innerHTML = '<p>Hello! I am CODE MUM AI. How can I assist you?</p>';
    document.body.appendChild(chatBox);
});
function sendMessage() {
    const input = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');
    
    const userMsg = document.createElement('div');
    userMsg.textContent = "You: " + input;
    chatBox.appendChild(userMsg);

    const botMsg = document.createElement('div');
    botMsg.textContent = "CODE MUM: " + "This is a static reply!";
    chatBox.appendChild(botMsg);

    document.getElementById('user-input').value = '';
}
function sendMessage() {
  const input = document.getElementById('user-input').value;
  const chatBox = document.getElementById('chat-box');
  
  const userMsg = document.createElement('div');
  userMsg.textContent = "You: " + input;
  chatBox.appendChild(userMsg);
  
  const botMsg = document.createElement('div');
  botMsg.textContent = "CODE MUM: " + "This is a static reply!";
  chatBox.appendChild(botMsg);
  
  document.getElementById('user-input').value = '';
}
async function sendMessage() {
    const input = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    const userMsg = document.createElement('div');
    userMsg.textContent = "You: " + input;
    chatBox.appendChild(userMsg);

    // Show "Thinking..." while waiting
    const botMsg = document.createElement('div');
    botMsg.textContent = "CODE MUM: Thinking...";
    chatBox.appendChild(botMsg);

    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: input }]
        })
    });

    const data = await response.json();
    botMsg.textContent = "CODE MUM: " + data.choices[0].message.content;

    document.getElementById('user-input').value = "";
}
async function sendMessage() {
    const input = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    const userMsg = document.createElement('div');
    userMsg.textContent = "You: " + input;
    chatBox.appendChild(userMsg);

    // API Call to OpenAI
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: input }]
        })
    });

    const data = await response.json();
    const botReply = data.choices[0].message.content;

    const botMsg = document.createElement('div');
    botMsg.textContent = "CODE MUM: " + botReply;
    chatBox.appendChild(botMsg);

    document.getElementById('user-input').value = "";
}
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';

function startListening() {
    recognition.start();
}

function stopListening() {
    recognition.stop();
}

recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById('user-input').value = transcript;
    sendMessage();
};

function speak(text) {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
}

// Update your sendMessage function to also speak reply
function sendMessage() {
    const input = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    const userMsg = document.createElement('div');
    userMsg.textContent = "You: " + input;
    chatBox.appendChild(userMsg);

    // Static AI Reply
    const botReply = "This is CODE MUM's Voice Reply!";
    const botMsg = document.createElement('div');
    botMsg.textContent = "CODE MUM: " + botReply;
    chatBox.appendChild(botMsg);

    speak(botReply); // Speak the reply

    document.getElementById('user-input').value = "";
}
