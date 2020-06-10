window.addEventListener("load",function(){

//silde show
var imgBlock=document.querySelector("img");
var slideShowButton=document.querySelector("input[value='sildeShow']");
let counter=1;
let intervalId=0;
slideShowButton.onclick=function(){
   intervalId= setInterval(function(){
        if(counter>6){
            counter=1;
        }
        
        imgBlock.src=`images/${counter}.jpg`;
        counter++;
        
},1000);
};//silde show end


//stop button
var stopButton=document.querySelector("input[value='stop']");
stopButton.onclick=function(){
     clearInterval(intervalId);
};//stop button end


//next button
var nextButton=document.querySelector("input[value='next']");
 nextButton.onclick=function(){
    var num=parseInt(imgBlock.src.slice(29,30));
    num++;
    if(num>6){
        num=1;
    }
    imgBlock.src=`images/${num}.jpg`;  
 };//end of next button

 //preivous button
 var preivousButton=document.querySelector("input[value='previous']");
preivousButton.onclick=function(){
    var num=parseInt(imgBlock.src.slice(29,30));
    num--;
    if(num<1){
        num=6;
    }
    imgBlock.src=`images/${num}.jpg`;

};//end of preivous button




});//window load end






