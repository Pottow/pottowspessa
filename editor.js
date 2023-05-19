
function FirstFunction(){
    console.log("hello world")
    document.getElementById("executeFirstFunction").style.background = "#4CAF50";
}

function embedWebglPlease (embedWebgl){
embedWebgl.style.height=embedWebgl.contentWindow.document.body.scrollHeight+"px";
}

function ifMobile(){

    const oneTimeMediaQuery = window.matchMedia('(hover: none), (max-width: 900px),(pointer:coarse)');
    //not actually one time, will repeat on refresh/resize, but not actively listening itself


    if (oneTimeMediaQuery.matches){

        thesisWebGL = document.getElementById("thesisWebGL");
        TTCTheory = document.getElementById("TTCTheory");
        BotressControlPanel = document.getElementById("BotressControlPanel");
        BotressInVoice = document.getElementById("BotressInVoice");
        BotressOnline = document.getElementById("BotressOnline");
        RandomCimNames = document.getElementById("RandomCimNames");
        LogoGraphic = document.getElementById("LogoGraphic");
        

        thesisWebGL.remove();

        // TTCTheory.height = window.innerHeight /12;
        TTCTheory.width = window.innerWidth /2.5;
    
        // BotressControlPanel.height = window.innerHeight /6;
        BotressControlPanel.width = window.innerWidth /1.1;
    
        // BotressInVoice.height = window.innerHeight /9;
        // BotressInVoice.width = window.innerWidth /1.85;
        BotressInVoice.remove();
    
        // BotressOnline.height = window.innerHeight /15.6;
        // BotressOnline.width = window.innerWidth /2.06;
        BotressOnline.remove();
    
        // RandomCimNames.height = window.innerHeight /6.5;
        RandomCimNames.width = window.innerWidth /1.11;

        if (window.innerWidth <= 400){
            LogoGraphic.remove();
        }
        
    }

}

function scaleImages(){

    const oneTimeMediaQuery = window.matchMedia('(hover: none), (max-width: 900px),(pointer:coarse)');
    if (!oneTimeMediaQuery.matches){

    thesisWebGL = document.getElementById("thesisWebGL");
    TTCTheory = document.getElementById("TTCTheory");
    BotressControlPanel = document.getElementById("BotressControlPanel");
    BotressInVoice = document.getElementById("BotressInVoice");
    BotressOnline = document.getElementById("BotressOnline");
    RandomCimNames = document.getElementById("RandomCimNames");
        
        thesisWebGL.height = window.innerHeight /1.15;
        thesisWebGL.width = window.innerWidth /1.92;

        TTCTheory.height = window.innerHeight /6.4;
        TTCTheory.width = window.innerWidth /2.5;
   
        BotressControlPanel.height = window.innerHeight /2.34;
        BotressControlPanel.width = window.innerWidth /2.34;
   
        BotressInVoice.height = window.innerHeight /9;
        BotressInVoice.width = window.innerWidth /7.85;
   
        BotressOnline.height = window.innerHeight /13.6;
        BotressOnline.width = window.innerWidth /8.06;
   
        RandomCimNames.height = window.innerHeight /3.5;
        RandomCimNames.width = window.innerWidth /2.5;
        
    }

}


window.onload = function(){
                scaleImages();
                ifMobile();
                }
window.onresize = scaleImages;
