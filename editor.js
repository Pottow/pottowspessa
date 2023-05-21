$(function ifMobile(){

    const oneTimeMediaQuery = window.matchMedia('(hover: none), (max-width: 900px),(pointer:coarse)');
    //not actually one time, will repeat on refresh/resize, but not actively listening itself


    if (oneTimeMediaQuery.matches){

        ThesisPic = document.getElementById("ThesisPic");
        TTCTheory = document.getElementById("TTCTheory");
        BotressControlPanel = document.getElementById("BotressControlPanel");
        BotressInVoice = document.getElementById("BotressInVoice");
        BotressOnline = document.getElementById("BotressOnline");
        RandomCimNames = document.getElementById("RandomCimNames");
        LogoGraphic = document.getElementById("LogoGraphic");
        

        ThesisPic.remove();

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
);

$(function jQueryCallFunctions(){
    scaleImages();
    gridPositions();
});

function scaleImages(){

    const oneTimeMediaQuery = window.matchMedia('(hover: none), (max-width: 900px),(pointer:coarse)');
    if (!oneTimeMediaQuery.matches){
   
    navbarColour = document.getElementById("navbarColour")
    PageTitlePic = document.getElementById("PageTitlePic");
    ThesisPic = document.getElementById("ThesisPic");
    TTCTheory = document.getElementById("TTCTheory");
    BotressControlPanel = document.getElementById("BotressControlPanel");
    BotressInVoice = document.getElementById("BotressInVoice");
    BotressOnline = document.getElementById("BotressOnline");
    RandomCimNames = document.getElementById("RandomCimNames");
        
        // ThesisPic.height = window.innerHeight /1.15;
        ThesisPic.width = window.innerWidth /1.92;
        // ThesisPic.height = window.innerHeight;
        // ThesisPic.width = window.innerWidth;

        PageTitlePic.width = window.innerWidth / 8;

        navbarColour.height = window.inhe / 8;


        // TTCTheory.height = window.innerHeight /6.4;
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

function gridPositions(){

    var rowCounter = 1;
    var columnCounter = 1;
    

    $(".navbarColour").css("grid-row", rowCounter);
    $(".logo").css("grid-row", "'" + rowCounter + "'");
    $(".pageTitle").css("grid-row", "'" + rowCounter + "'");

    rowCounter ++;
    $(".section_1_text").css("grid-row-start", rowCounter);
    rowCounter ++;
    $(".section_1_graphic").css("grid-row", rowCounter);
    rowCounter ++;
    $(".section_2_text").css("grid-row", rowCounter);
    rowCounter ++;
    $(".section_2_graphic").css("grid-row",rowCounter);
    rowCounter ++;
    $(".section_3_text").css("grid-row", rowCounter);
    rowCounter ++;
    $(".section_3_graphic").css("grid-row", rowCounter);


   
    $(".navbarColour").css("grid-column-start", "1");
    $(".navbarColour").css("grid-column-end", "3");
    $(".pageTitle").css("grid-column-start", columnCounter);
    columnCounter ++;
   
   

    $(".section_1_text").css("grid-column", columnCounter);
    $(".section_2_text").css("grid-column", columnCounter);
    $(".section_1_graphic").css("grid-column", columnCounter);
    $(".section_2_graphic").css("grid-column", columnCounter);
    $(".section_3_text").css("grid-column", columnCounter);
    $(".section_3_graphic").css("grid-column", columnCounter);

    columnCounter ++;
    $(".logo").css("grid-column", columnCounter);

   
}


window.onresize = scaleImages;
window.on
