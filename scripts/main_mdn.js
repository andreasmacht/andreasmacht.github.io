var myImage = document.querySelector('img');

myImage.onclick = function {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/SAWA_web-01.png') {
		myImage.setAttribute('src','images/1.png');
	} else {	
		myImage.setAttribute('src','images/SAWA_web-01.png');
	}
}

