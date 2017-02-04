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

var logo = document.querySelector('#logo');

//the contact form proved challenging, since it's not as easily edited through changing the nodevalue, and I didn't want to mix too much html into my JS object. I opted for toggling visibility instead. -C

function showform(){

contactform.classList.toggle('hidden');
contactform.classList.toggle('visible');
	
}

function introanim() {

TweenMax.from(logo, 2, { opacity: 0, delay: 0.5});
TweenMax.to(logo, 3, { opacity: 0});

}

function changeInfo(evt){
	
//used innerHTML here because it was less fussy and less code to write overall. Seemed the better option. -C
	
evt.preventDefault();
headline.innerHTML = content[evt.target.id].sectionTitle;
upperText.innerHTML = content[evt.target.id].textTop;	
lowerText.innerHTML = content[evt.target.id].textBottom;
image.innerHTML = content[evt.target.id].lowerimg;

contactform.classList.add('hidden');
contactform.classList.remove('visible');

//So I tried to replicate what this forloop does using forEach and it did not end well. I'm probably missing something. -C

//content.listitem.forEach.call(listitem, function(listitem) {list.innerHTML = content[evt.target.id].listitem};);	

for (var i = 0; i < list.length; i++) {
   list[i].innerHTML = content[evt.target.id].listitem[i];

scrollbgchange();

}

function scrollbgchange(){

TweenMax.to(window, 1, {scrollTo:{y:"#page",offsetY:50}});	
TweenMax.from(bg, 0.2, {opacity: 0.9});
TweenMax.to(bg, 0.2, {opacity: 1, backgroundColor: content[evt.target.id].bgcol});
bg.style.color = content[evt.target.id].textcol;

}

}

[].forEach.call(buttons, function(buttons) {buttons.addEventListener('click', changeInfo, false);});

contact.addEventListener('click', showform, false);

window.addEventListener('load', introanim, false);
	
})();