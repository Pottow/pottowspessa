
function FirstFunction(){
    console.log("hello world")
    document.getElementById("executeFirstFunction").style.background = "#4CAF50";
}

function embedWebglPlease (embedWebgl){
embedWebgl.style.height=embedWebgl.contentWindow.document.body.scrollHeight+"px";
}



function scaleImages(){
     thesisWebGL = document.getElementById("thesisWebGL");
     thesisWebGL.height = window.innerHeight /1.4625;
     thesisWebGL.width = window.innerWidth /1.92;

BotressControlPanel = document.getElementById("BotressControlPanel");
BotressControlPanel.height = window.innerHeight /2.34;
BotressControlPanel.width = window.innerWidth /2.34;


BotressInVoice = document.getElementById("BotressInVoice");
BotressInVoice.height = window.innerHeight /9;
BotressInVoice.width = window.innerWidth /7.85;

BotressOnline = document.getElementById("BotressOnline");
BotressOnline.height = window.innerHeight /13.6;
BotressOnline.width = window.innerWidth /8.06;


}


window.onload = scaleImages();
