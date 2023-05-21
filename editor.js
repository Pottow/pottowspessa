$(function ifMobile(){

    const oneTimeMediaQuery = window.matchMedia('(hover: none), (max-width: 900px),(pointer:coarse)');
    //not actually one time, will repeat on refresh/resize, but not actively listening itself

    if (oneTimeMediaQuery.matches){

        outOfOrderDisplay = document.getElementById("outOfOrderDisplay")

        outOfOrderDisplay.height = window.innerHeight /3.5;
        outOfOrderDisplay.width = window.innerWidth /2.5     
    }
}
);

$(function jQueryCallFunctions(){
    scaleImages();
});

function scaleImages(){

    const oneTimeMediaQuery = window.matchMedia('(hover: none), (max-width: 900px),(pointer:coarse)');
    if (!oneTimeMediaQuery.matches){
   
    outOfOrderDisplay = document.getElementById("outOfOrderDisplay")

    outOfOrderDisplay.height = window.innerHeight /3.5;
    outOfOrderDisplay.width = window.innerWidth /2.5;
        
    }

}



window.onresize = scaleImages;
