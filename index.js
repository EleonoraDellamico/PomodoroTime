let start = document.getElementById('start');
let reset = document.getElementById('reset');
let stop = document.getElementById('stop');

let wm = document.getElementById('w-minutes');
let ws = document.getElementById('w-seconds');

let bm = document.getElementById('b-minutes');
let bs = document.getElementById('b-seconds');
let bell = new Audio('bell.mp3');

//store a reference to a timer varaiable
let startTimer; //if we don`t give it a value is automatically undefined

//2 step after setting the function timer we setting the addEventListener
start.addEventListener('click', function() {
	if (startTimer === undefined) {
		startTimer = setInterval(timer, 1000);
	} else {
		alert('Timer is already running');
	}
});

reset.addEventListener('click', function() {
	wm.innerText = 25;
	ws.innerText = '00';

	bm.innerText = 5;
	bs.innerText = '00';
	document.getElementById('counter').innerText = 0;
	stopInterval();
	startTimer = undefined;
});

stop.addEventListener('click', function() {
	stopInterval();
	startTimer = undefined;
});

//1 step setting the start function Timer
function timer() {
	//Work Timer CountDown
	if (ws.innerText != 0) {
		ws.innerText--;
	} else if (wm.innerText != 0 && ws.innerText == 0) {
		ws.innerText = 59;
		wm.innerText--;
	}
	//Break Timer CountDown
	if (wm.innerText == 0 && ws.innerText == 0) {
		if (bs.innerText != 0) {
			bs.innerText--;
		} else if (bm.innerText != 0 && bs.innerText == 0) {
			bs.innerText = 59;
			bm.innerText--;
		}
	}
	//Increment Counter by one if one full cycle is completed
	if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0) {
		wm.innerText = 25;
		ws.innerText = '00';

		bm.innerText = 5;
		bs.innerText = '00';

		document.getElementById('counter').innerText++;
		bell.play();
	}
}

//3 step setting the stop timer function
function stopInterval() {
	clearInterval(startTimer);
}
