//preloader_function

var id1 = document.getElementById('header')
var navtext = document.getElementById('nav-text')
var navbar = document.getElementById('nav-bar')
var close = document.getElementById('close')
var score1 = document.getElementById('score-1');
var score2 = document.getElementById('score-2');
var score3 = document.getElementById('score-3');
var score4 = document.getElementById('score-4');
var loader=document.getElementById('preloader');


function pre_loader(){
setTimeout(function () {
		loader.classList.add('ctn-preloader')
	},);
setTimeout(function () {
		loader.classList.add('pre_loader-hide')
	},2000);
}
pre_loader();


//menu_bar
var mobileMenu = document.getElementById('mobile-menu')
mobileMenu.addEventListener("click", menuBar);
var menu=document.getElementById("menu");

var menu_show=0;

function menuBar(){
if(menu_show===0)
{
	menu.classList.add("show_nav")
	menu.classList.remove("hide_nav")

	menu_show=1;
}
else{
	menu.classList.remove("show_nav")
	menu.classList.add("hide_nav")
	menu_show=0;

	}
}

//data_count
function data_count(){
var value1=0;
inc_val1("value1",value1);
function inc_val1(ele,value1){
	if(value1<=20){
			document.getElementById("value1").innerHTML=value1;
	value1++;
	setTimeout(function(){
inc_val1("value1",value1);
},50)	
	}
}
var value2=0;
inc_val2("value2",value2);
function inc_val2(ele,value2){
	if(value2<=100){
			document.getElementById("value2").innerHTML=value2;
	value2++;
	setTimeout(function(){
inc_val2("value2",value2);
},30)	
	}
}
var value3=0;
inc_val3("value3",value3);
function inc_val3(ele,value3){
	if(value3<=25){
			document.getElementById("value3").innerHTML=value3;
	value3++;
	setTimeout(function(){
inc_val3("value3",value3);
},50)	
	}
}
var value4=0;
inc_val4("value4",value4);
function inc_val4(ele,value4){
	if(value4<=500){
			document.getElementById("value4").innerHTML=value4;
	value4++;
	setTimeout(function(){
inc_val4("value4",value4);
},10)	
	}
}
}
		
// //scrolling function	

var update_scroll_iteration=0;
function updateScroll() {

	if(update_scroll_iteration<1)
	{
	 if(window.scrollY >= document.getElementById('section4').offsetTop){
	  data_count();	
	 update_scroll_iteration=1;
	}
}
}
window.addEventListener('scroll', updateScroll);


document.addEventListener('scroll', function(){
  animate(document.getElementById('progress_val1'))
  animate(document.getElementById('progress_val2'))
  animate(document.getElementById('progress_val3'))
  animate(document.getElementById('progress_val4'))
  animate(document.getElementById('progress_val5'))
  animate(document.getElementById('progress_val6'))
  animate(document.getElementById('progress_val7'))
  animate(document.getElementById('progress_val8'))
  animate(document.getElementById('progress_val9'))
  animate(document.getElementById('progress_val10'))
  animate(document.getElementById('progress_val11'))
  animate(document.getElementById('progress_val12'))
});

// check if element is in view
function inView(element) {
  var elementHeight = element.clientHeight;
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;

  }
  return false;


}

// animate element when it is in view
function animate(element) {
  // is element in view?


  if (inView(element)) {
      // element is in view, add class to element
  document.getElementById('progress_val1').classList.add('progress_val1');
  document.getElementById('progress_val2').classList.add('progress_val2');
  document.getElementById('progress_val3').classList.add('progress_val3');
  document.getElementById('progress_val4').classList.add('progress_val4');
  document.getElementById('progress_val5').classList.add('progress_val5');
  document.getElementById('progress_val6').classList.add('progress_val6');
  document.getElementById('progress_val7').classList.add('progress_val7');
  document.getElementById('progress_val8').classList.add('progress_val8');
  document.getElementById('progress_val9').classList.add('progress_val9');
  document.getElementById('progress_val10').classList.add('progress_val10');
  document.getElementById('progress_val11').classList.add('progress_val11');
  document.getElementById('progress_val12').classList.add('progress_val12');
  }
  
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var screenWidth = screen.width - 100;
var face1 = document.getElementById("face1");
var face2 = document.getElementById("face2");
var faces = document.getElementById("faces");
face1.style.width = screenWidth/4;
face2.style.width = screenWidth/4;
var bodyElement = document.querySelector("body");
bodyElement.addEventListener("mousemove",changeFace, false);
var prevX=0;
var maxWidth = screenWidth/2;
function changeFace(e){
  var xDirection = getMouseDirection(e);
  var face1Width = face1.offsetWidth;
  var face2Width = face2.offsetWidth;
  if (xDirection =="left") {
    moveLeft(face1Width, face2Width);
  }
  else{
    moveRight(face1Width, face2Width);
  }
}
function moveLeft(face1Width, face2Width){
  if (face2Width<maxWidth) {
    face2.style.width = face2Width+23+"px";
    face1.style.width = face1Width-23+"px";

    //change opacity 
    var percentage = getPercentage(face1Width, screenWidth/4)/100; 
    document.getElementById("text1").style.opacity =percentage>0.2?percentage:0;

    var percentage = getPercentage(face2Width, screenWidth/4)/100; 
    document.getElementById("text2").style.opacity =percentage>0.2?percentage:0;

    var picPos = faces.offsetLeft;
    maxLeft =150;
    if(picPos>maxLeft){
      faces.style.left = picPos-4+"px";
    }
  }
}
function moveRight(face1Width, face2Width){
  if (face1Width<maxWidth) {
    face1.style.width = face1Width+23+"px";
    face2.style.width = face2Width-23+"px";

    //change opacity 
    var percentage = getPercentage(face1Width, screenWidth/4)/100; 
    document.getElementById("text1").style.opacity =percentage>0.2?percentage:0;

    var percentage = getPercentage(face2Width, screenWidth/4)/100; 
    document.getElementById("text2").style.opacity =percentage>0.2?percentage:0;

    var picPos = faces.offsetLeft;
    maxRight =screenWidth/2-150;
    if(picPos<maxRight){
      faces.style.left = picPos+4+"px";
    }
  }
}
function getPercentage(width, total){
  return (width*100)/total;
}
function getMouseDirection(e){
  var dir;
  currentX = e.pageX;
  if (prevX<currentX) {
    dir = "right";
  }
  else{
    dir = "left";
  }
  prevX = currentX;
  return dir;
} 