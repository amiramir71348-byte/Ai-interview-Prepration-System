/*=========================================
 chatbot.js
 AI Interview Preparation
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const clearChat = document.getElementById("clearChat");
const voiceBtn = document.getElementById("voiceBtn");
const typingIndicator = document.getElementById("typingIndicator");
const suggestions = document.querySelectorAll(".suggestion");

/*==============================
 Hide Typing Indicator
==============================*/

typingIndicator.style.display = "none";

/*==============================
 Send Message
==============================*/

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function(e){

if(e.key==="Enter"){

sendMessage();

}

});

function sendMessage(){

const text=userInput.value.trim();

if(text==="") return;

addUserMessage(text);

userInput.value="";

typingIndicator.style.display="flex";

setTimeout(()=>{

typingIndicator.style.display="none";

const reply=getBotReply(text);

addBotMessage(reply);

saveHistory(text);

},1000);

}

/*==============================
 User Message
==============================*/

function addUserMessage(msg){

chatBox.innerHTML+=`

<div class="user-message">

${msg}

</div>

`;

chatBox.scrollTop=chatBox.scrollHeight;

}

/*==============================
 Bot Message
==============================*/

function addBotMessage(msg){

chatBox.innerHTML+=`

<div class="bot-message">

${msg}

</div>

`;

chatBox.scrollTop=chatBox.scrollHeight;

}

/*==============================
 Demo AI Reply
==============================*/

function getBotReply(message){

const text=message.toLowerCase();

if(text.includes("java"))

return "Practice OOPs, Collections, Exception Handling and Multithreading for Java interviews.";

if(text.includes("python"))

return "Focus on Python basics, OOP, File Handling, DSA and Flask.";

if(text.includes("resume"))

return "Keep your resume one page long and add projects, skills and achievements.";

if(text.includes("dsa"))

return "Learn Arrays, Strings, Linked List, Stack, Queue, Trees, Graph and Dynamic Programming.";

if(text.includes("hr"))

return "Prepare Tell Me About Yourself, Strengths, Weaknesses and Why Should We Hire You.";

if(text.includes("project"))

return "Explain your project architecture, technologies used and your contribution.";

return "That's a great question. Once Gemini AI backend is connected, I'll provide intelligent interview answers.";

}

/*==============================
 Suggestion Buttons
==============================*/

suggestions.forEach(btn=>{

btn.addEventListener("click",()=>{

userInput.value=btn.innerText;

sendMessage();

});

});

/*==============================
 Clear Chat
==============================*/

clearChat.addEventListener("click",()=>{

chatBox.innerHTML=`

<div class="bot-message">

Hello 👋<br>

I am your AI Career Assistant.

</div>

`;

localStorage.removeItem("chatHistory");

});

/*==============================
 Save Chat
==============================*/

function saveHistory(msg){

let history=

JSON.parse(localStorage.getItem("chatHistory"))||[];

history.push(msg);

localStorage.setItem(

"chatHistory",

JSON.stringify(history)

);

}

/*==============================
 Voice Input
==============================*/

voiceBtn.addEventListener("click",()=>{

const SpeechRecognition=

window.SpeechRecognition||

window.webkitSpeechRecognition;

if(!SpeechRecognition){

alert("Voice Recognition Not Supported");

return;

}

const recognition=

new SpeechRecognition();

recognition.lang="en-US";

recognition.start();

recognition.onresult=function(event){

userInput.value=

event.results[0][0].transcript;

};

});

/*==============================
 Gemini AI Placeholder
==============================*/

// Future API Call

// fetch("/chat",{
// method:"POST",
// headers:{
// "Content-Type":"application/json"
// },
// body:JSON.stringify({
// message:userInput.value
// })
// });

});