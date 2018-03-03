var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/bubble.jpeg') {
		myImage.setAttribute ('src', 'images/peeking.PNG');
	} else {
		myImage.setAttribute ('src', 'images/bubble.jpeg');
	}
}
/*For more features to manipulate documents, read: 
* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
*/


//#####functions#####
function multiply(num1,num2) {
	//var result = num1 * num2;
	return num1 * num2;
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Some Sketching, ' + myName;
}
//~initialization:
if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Some Sketching, ' + storedName;
}
myButton.onclick = function() {
	setUserName();
}