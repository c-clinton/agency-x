$(document).foundation();

// JavaScript Document

(function() {
"use strict";
console.log("Ready to go, boss!");

var buttons = document.querySelectorAll('.but');
var contact = document.querySelector('#contact');
var bg = document.querySelector('.bg');

var list = [document.querySelector('.listitem1'), document.querySelector('.listitem2'), document.querySelector('.listitem3'), document.querySelector('.listitem4'), document.querySelector('.listitem5'), document.querySelector('.listitem6'), document.querySelector('.listitem7'), document.querySelector('.listitem8'),document.querySelector('.listitem9')];	

var headline = document.querySelector('.sectionTitle');
var upperText = document.querySelector('.text-top');
var lowerText = document.querySelector('.text-bottom');

var image = document.querySelector('.lowerimg');
var contactform = document.querySelector('.form');

//the contact form proved challenging, since it's not as easily edited through changing the nodevalue, and I didn't want to mix too much html into my JS object. I opted for toggling visibility instead. -C

function showform(){

contactform.classList.toggle('hidden');
contactform.classList.toggle('visible');
console.log("work you piece of shit");
	
}

function changeInfo(evt){
	
//used innerHTML here because it was less fussy and less code to write overall. Seemed the better option. -C
	
evt.preventDefault();
headline.innerHTML = content[evt.target.id].sectionTitle;
upperText.innerHTML = content[evt.target.id].textTop;	
lowerText.innerHTML = content[evt.target.id].textBottom;
image.innerHTML = content[evt.target.id].lowerimg;

bg.style.backgroundColor = content[evt.target.id].bgcol;
bg.style.color = content[evt.target.id].textcol;

contactform.classList.add('hidden');
contactform.classList.remove('visible');

for (var i = 0; i < list.length; i++) {
   list[i].innerHTML = content[evt.target.id].listitem[i];
}

//So I tried to replicate what this forloop does using forEach and it did not end well. I'm probably missing something. -C

//content.listitem.forEach.call(listitem, function(listitem) {list.innerHTML = content[evt.target.id].listitem};);

}

[].forEach.call(buttons, function(buttons) {buttons.addEventListener('click', changeInfo, false);});

contact.addEventListener('click', showform, false);
	
})();