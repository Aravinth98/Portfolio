var slide_1 = document.getElementById("shoe-1");
var slide_2 = document.getElementById("bg-color");
var slide_3 = document.getElementById("head");
var slide_4 = document.getElementById("rt-1");
var slide_5 = document.getElementById("rt-2");
var slide_6 = document.getElementById("rt-3");
var slide_7 = document.getElementById("para");
var slide_8 = document.getElementById("slide-2");
var slide_9 = document.getElementById("shoe-2");
var slide_10 = document.getElementById("head-2");
var slide_11 = document.getElementById("para-2");
var slide_12 = document.getElementById("btn");


var animate_1 = slide_1.className;
var animate_2 = slide_2.className;
var animate_3 = slide_3.className;
var animate_4 = slide_4.className;
var animate_5 = slide_5.className;
var animate_6 = slide_6.className;
var animate_7 = slide_7.className;
var animate_8 = slide_8.className;
var animate_9 = slide_9.className;
var animate_10 = slide_10.className;
var animate_11 = slide_11.className;
var animate_12 = slide_12.className;


function animate() {
 
  setTimeout(function(){
    slide_1.className = animate_1 + " shoe-1-animate";
  },500);

  setTimeout(function(){
    slide_2.className = animate_2 + " bg-color-animate";
  },500);

  setTimeout(function(){
    slide_3.className = animate_3 + " head-animate";
  },1500);

  setTimeout(function(){
    slide_4.className = animate_4 + " rt-1-animate";
  },2000);

  setTimeout(function(){
    slide_5.className = animate_5 + " rt-2-animate";
  },2250);

  setTimeout(function(){
    slide_6.className = animate_6 + " rt-3-animate";
  },2500);

  setTimeout(function(){
    slide_7.className = animate_7 + " para-animate";
  },3000);

  setTimeout(function(){
    slide_8.className = animate_8 + " slide-2-animate";
  },5000);

  setTimeout(function(){
    slide_9.className = animate_9 + " shoe-2-animate";
  },6000);

  setTimeout(function(){
    slide_10.className = animate_10 + " head-2-animate";
  },7000);

  setTimeout(function(){
    slide_11.className = animate_11 + " para-2-animate";
  },8000);

  setTimeout(function(){
    slide_12.className = animate_12 + " btn-animate";
  },9000);

  setTimeout(function(){
    slide_9.className = animate_9 + " shoe-2-left-animate";
  },10000);

  setTimeout(function(){
    slide_10.className = animate_10 + " head-2-right-animate";
  },10300);

  setTimeout(function(){
    slide_11.className = animate_11 + " para-2-right-animate";
  },10600);

  setTimeout(function(){
    slide_12.className = animate_12 + " btn-right-animate";
  },10900);

  setTimeout(remove,12000);
}


animate();

function remove() {

  slide_1.classList.remove('shoe-1-animate');
  slide_2.classList.remove('bg-color-animate');
  slide_3.classList.remove('head-animate');
  slide_4.classList.remove('rt-1-animate');
  slide_5.classList.remove('rt-2-animate');
  slide_6.classList.remove('rt-3-animate');
  slide_7.classList.remove('para-animate');
  slide_8.classList.remove('slide-2-animate');
  slide_9.classList.remove('shoe-2-animate');
  slide_10.classList.remove('head-2-animate');
  slide_11.classList.remove('para-2-animate');
  slide_12.classList.remove('btn-animate');

  animate();
}