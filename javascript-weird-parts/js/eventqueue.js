function waitThreeSeconds() {
	var ms = 3000 + new Date().getTime();
	while (new Date() < ms){}
	console.log('finished function');
}

function clickHandler() {
	console.log('click event!');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');

// The above code will have to run line by line, 
// any event due to trigger before it has been
// reached in the code will be added to the event
// queue. E.g

// The above code will always output:
// finished function
// finished execution
// click event (if clicked)

// As the click event will be added to the event 
// queue