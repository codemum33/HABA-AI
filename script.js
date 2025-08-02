
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
