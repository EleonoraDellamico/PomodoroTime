const buttonStart = document.getElementById('start');
const buttonReset = document.getElementById('reset');
const buttonPause = document.getElementById('stop');

const domElementWorkMinutes = document.getElementById('w-minutes');
const domElementWorkSeconds = document.getElementById('w-seconds');

const bm = document.getElementById('b-minutes');
const bs = document.getElementById('b-seconds');
const bell = new Audio('bell.mp3');

//store a reference to a timer varaiable
let startTimer; //if we don`t give it a value is automatically undefined

//2 step after setting the function timer we setting the addEventListener
buttonStart.addEventListener('click', function() {
	if (startTimer === undefined) {
		startTimer = setInterval(timer, 1000);
		bell.play();
	} else {
		alert('Timer is already running');
	}
});

buttonReset.addEventListener('click', function() {
	initTimerDomElements();
	document.getElementById('counter').innerText = 0;
	resetPomodoTimer();
});

function initTimerDomElements() {
	domElementWorkMinutes.innerText = 25;
	domElementWorkSeconds.innerText = '00';
	bm.innerText = 5;
	bs.innerText = '00';
}

function resetPomodoTimer() {
	clearInterval(startTimer);
	startTimer = undefined;
}

buttonPause.addEventListener('click', function() {
	resetPomodoTimer();
});

//1 step setting the start function Timer
function timer() {
	//Work Timer CountDown
	if (domElementWorkSeconds.innerText != 0) {
		domElementWorkSeconds.innerText--;
	} else if (domElementWorkMinutes.innerText != 0 && domElementWorkSeconds.innerText == 0) {
		domElementWorkSeconds.innerText = 59;
		domElementWorkMinutes.innerText--;
	}
	if (domElementWorkMinutes.innerText == 0 && domElementWorkSeconds.innerText == 0 && bm.innerText == 1 && bs.innerText == 0) {
		bell.play();
	}
	//Break Timer CountDown
	if (domElementWorkMinutes.innerText == 0 && domElementWorkSeconds.innerText == 0) {
		if (bs.innerText != 0) {
			bs.innerText--;
		} else if (bm.innerText != 0 && bs.innerText == 0) {
			bs.innerText = 59;
			bm.innerText--;
		}
	}
	//Increment Counter by one if one full cycle is completed
	if (domElementWorkMinutes.innerText == 0 && domElementWorkSeconds.innerText == 0 && bm.innerText == 0 && bs.innerText == 0) {
		domElementWorkMinutes.innerText = 25;
		domElementWorkSeconds.innerText = '00';

		bm.innerText = 5;
		bs.innerText = '00';
		bell.play();

		document.getElementById('counter').innerText++;
	}
}

