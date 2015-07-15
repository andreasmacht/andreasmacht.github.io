var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/SAWA_web-01.png') {
		myImage.setAttribute('src','images/1.png');
	} else {	
		myImage.setAttribute('src','images/SAWA_web-01.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'share all with all ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'share all with all ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}