//create variables
var bannerbg = document.getElementById('banner');
var logo = document.getElementById('logo');
var person = document.getElementById('person');
var heading_1 = document.getElementById('text_1');
var heading_centre = document.getElementById('text_2');
var heading_2 = document.getElementById('text_3');
var text_entry_1 = document.getElementById('text_4');
var text_entry_2 = document.getElementById('text_5');
var text_entry_3 = document.getElementById('text_6');
var text_entry_4 = document.getElementById('text_7');
var button_entry = document.getElementById('click');

//get class from Id

var bannerbg_class = bannerbg.className;
var logo_class = logo.className;
var person_class = person.className;
var heading_1_class = heading_1.className;
var heading_centre_class = heading_centre.className;
var heading_2_class = heading_2.className;
var text_entry_1_class = text_entry_1.className;
var text_entry_2_class = text_entry_2.className;
var text_entry_3_class = text_entry_3.className;
var text_entry_4_class = text_entry_4.className;
var button_entry_class = button_entry.className;

//settimeout function for animation

function animate() {
	setTimeout(function(){
		logo.className = logo_class + " animate-3";
	}, 200)
	setTimeout(function(){
		person.className = person_class + " animate-2";
	}, 500)
	setTimeout(function(){
		bannerbg.className = bannerbg_class + " animate-1";
	}, 1500)
	setTimeout(function(){
		heading_1.className = heading_1_class + " animate-4";
	}, 1500)
	setTimeout(function(){
		heading_centre.className = heading_centre_class + " animate-5";
	}, 2000)
	setTimeout(function(){
		heading_2.className = heading_2_class + " animate-6";
	}, 2500)
	setTimeout(function(){
		text_entry_1.className = text_entry_1_class + " animate-7";
	}, 3500)
	setTimeout(function(){
		text_entry_2.className = text_entry_2_class + " animate-8";
	}, 3500)
	setTimeout(function(){
		text_entry_3.className = text_entry_3_class + " animate-9";
	}, 6500)
	setTimeout(function(){
		text_entry_4.className = text_entry_4_class + " animate-10";
	}, 6700)
	setTimeout(function(){
		button_entry.className = button_entry_class + " animate-11";
	}, 9000)
	setTimeout(remove, 12000)
}
animate();

function remove() {
	bannerbg.classlist.remove('animate-1');
	logo.classlist.remove('animate-3');
	person.classlist.remove('animate-2');
	heading_1.classlist.remove('animate-4');
	heading_centre.classlist.remove('animate-5');
	heading_2.classlist.remove('animate-6');
	text_entry_1.classlist.remove('animate-7');
	text_entry_2.classlist.remove('animate-8');
	text_entry_3.classlist.remove('animate-9');
	text_entry_4.classlist.remove('animate-10');
	button_entry.classlist.remove('animate-11');
	animate();
}