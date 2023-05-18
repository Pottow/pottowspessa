
function FirstFunction(){
    console.log("hello world")
    document.getElementById("executeFirstFunction").style.background = "#4CAF50";
}

function embedWebglPlease (embedWebgl){
embedWebgl.style.height=embedWebgl.contentWindow.document.body.scrollHeight+"px";
}

function ifMobile(){
                $(".grid-container").css("grid-template-columns","50% 50%");
                $(".grid-container").css("grid-template-rows","auto");
                $(".grid-container").css("padding","10px");

                $(".pageTitle").css("grid-column-start","1");
                $(".pageTitle").css("grid-column-end","3");
                $(".pageTitle").css("text-align","center");

                $(".navbarColour").css("grid-column-start","1");
                $(".navbarColour").css("grid-column-end","3");

                $(".logo").css("grid-column","1");
                $(".logo").css("grid-row","1");
                $(".logo").css("position","relative");
                $(".logo").css("margin","5px");
                $(".section_1_text").css("justify-content","left");

                $(".section_1_text").css("margin-left","0cm");
                $(".section_1_text").css("grid-column-start","1");
                $(".section_1_text").css("grid-column-end","3");
                $(".section_1_text").css("grid-row-start","2");
                $(".section_1_text").css("grid-row-end","3");
                $(".section_1_text").css("width","1fr");
                $(".section_1_text").css("text-align","center");
                
                $(".section_1_graphic").css("margin-left","0cm");
                $(".section_1_graphic").css("grid-column-start","1");
                $(".section_1_graphic").css("grid-column-end","3");
                $(".section_1_graphic").css("grid-row-start","3");
                $(".section_1_graphic").css("grid-row-end","4");
                $(".section_1_graphic").css("flex-direction","column");     
                $(".section_1_graphic").css("flex-grow","1fr");
                $(".section_1_graphic").css("flex-wrap","wrap");
                $(".section_1_graphic").css("flex-basis","10%");
                $(".section_1_graphic").css("align-items","center");
                $(".section_1_graphic").css("display","flex");
        
    
                $(".section_2_text").css("margin-left","0cm");
                $(".section_2_text").css("grid-column-start","1");
                $(".section_2_text").css("grid-column-end","3");
                $(".section_2_text").css("grid-row-start","4");
                $(".section_2_text").css("grid-row-end","5");
                $(".section_2_text").css("width","1fr");
                $(".section_2_text").css("text-align","center");

                $(".section_2_graphic").css("margin-left","0cm");
                $(".section_2_graphic").css("margin-top","-30px");
                $(".section_2_graphic").css("grid-column-start","1");
                $(".section_2_graphic").css("grid-column-end","3");
                $(".section_2_graphic").css("grid-row-start","5");
                $(".section_2_graphic").css("grid-row-end","6");
                $(".section_2_graphic").css("text-align","center");
                $(".section_2_graphic").css("display","flex");

                $(".section_3_text").css("margin-left","0cm");
                $(".section_3_text").css("grid-column-start","1");
                $(".section_3_text").css("grid-column-end","3");
                $(".section_3_text").css("grid-row-start","6");
                $(".section_3_text").css("grid-row-end","7");
                $(".section_3_text").css("width","1fr");
                $(".section_3_text").css("text-align","center");
                $(".section_3_text").css("list-style-position","inside");
                $("#ExampleNamesListIntro").css("text-align","left");
                $("#ExampleNamesList").css("text-align","left");
                $("#ExampleNamesList").css("margin","0cm");
                $("#ExampleNamesList").css("padding-left","5px");
                
                $(".section_3_graphic").css("margin-left","0cm");
                $(".section_3_graphic").css("grid-column-start","1");
                $(".section_3_graphic").css("grid-column-end","3");
                $(".section_3_graphic").css("grid-row-start","7");
                $(".section_3_graphic").css("grid-row-end","8");
                $(".section_3_graphic").css("position","relative");
                $(".section_3_graphic").css("margin","0cm");
                $(".section_3_graphic").css("text-align","center");
                $(".section_3_graphic").css("display","flex");

                thesisWebGL = document.getElementById("thesisWebGL");
                TTCTheory = document.getElementById("TTCTheory");
                BotressControlPanel = document.getElementById("BotressControlPanel");
                BotressInVoice = document.getElementById("BotressInVoice");
                BotressOnline = document.getElementById("BotressOnline");
                RandomCimNames = document.getElementById("RandomCimNames");
                LogoGraphic = document.getElementById("LogoGraphic");
                
             
                thesisWebGL.width = 0;
                thesisWebGL.height = 0;
                // thesisWebGL.remove();

                // TTCTheory.height = window.innerHeight /12;
                TTCTheory.width = window.innerWidth /2.5;
           
                // BotressControlPanel.height = window.innerHeight /6;
                BotressControlPanel.width = window.innerWidth /1.0;
           
                // BotressInVoice.height = window.innerHeight /9;
                // BotressInVoice.width = window.innerWidth /1.85;
                BotressInVoice.height = 0;
                BotressInVoice.width = 0;
                // BotressInVoice.remove();
           
                // BotressOnline.height = window.innerHeight /15.6;
                // BotressOnline.width = window.innerWidth /2.06;
                BotressOnline.height = 0;
                BotressOnline.width = 0;
                // BotressOnline.remove();
           
                // RandomCimNames.height = window.innerHeight /6.5;
                RandomCimNames.width = window.innerWidth /1.1;

                if (window.innerWidth <= 390){
                    LogoGraphic.width = 35;
                    LogoGraphic.height = 35;
                }
}

function scaleImages(){

    thesisWebGL = document.getElementById("thesisWebGL");
    TTCTheory = document.getElementById("TTCTheory");
    BotressControlPanel = document.getElementById("BotressControlPanel");
    BotressInVoice = document.getElementById("BotressInVoice");
    BotressOnline = document.getElementById("BotressOnline");
    RandomCimNames = document.getElementById("RandomCimNames");
    

    if (document.documentElement.clientWidth < 800 || document.documentElement.clientWidth < document.documentElement.clientHeight
        || navigator.userAgent.indexOf("Mobi") > -1  || /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)){
        ifMobile();
    }
    else{
        
        // thesisWebGL.height = window.innerHeight /1.4625;
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


window.onload = scaleImages;
window.onresize = scaleImages;
