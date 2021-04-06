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

function timer() {
	updateWorkTimer();
	ringTheBell();
	updateBreakTimer();
	incrementBreakCounter();
}

function updateWorkTimer() {
	if (domElementWorkSeconds.innerText != 0) {
		domElementWorkSeconds.innerText--;
	} else if (domElementWorkMinutes.innerText != 0 && domElementWorkSeconds.innerText == 0) {
		domElementWorkSeconds.innerText = 59;
		domElementWorkMinutes.innerText--;
	}
}

function ringTheBell() {
	if (domElementWorkMinutes.innerText == 0 && domElementWorkSeconds.innerText == 0 && bm.innerText == 1 && bs.innerText == 0) {
		bell.play();
	}
}

function updateBreakTimer() {
	if (!isWorkTimerZero()) {
		return;
	}

	if (bs.innerText != 0) {
		bs.innerText--;
		return;
	}

	if (bm.innerText != 0 && bs.innerText == 0) {
		bs.innerText = 59;
		bm.innerText--;
		return;
	}
}

function isWorkTimerZero() {
	return (domElementWorkMinutes.innerText == 0 && domElementWorkSeconds.innerText == 0);
}

function incrementBreakCounter() {
	if (! isTimersValuesZero()) {
		return
	}

	initTimerDomElements();
	bell.play();
	document.getElementById('counter').innerText++;
}

function isTimersValuesZero() {
	return (isWorkTimerZero() &&
			bm.innerText == 0 &&
			bs.innerText == 0);
}
