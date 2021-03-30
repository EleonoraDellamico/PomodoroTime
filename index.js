let start = document.getElementById('start');
let reset = document.getElementById('reset');
let stop = document.getElementById('stop');

let wm = document.getElementById('w-minutes');
let ws = document.getElementById('w-seconds');

let bm = document.getElementById('b-minutes');
let bs = document.getElementById('b-seconds');

//store a reference to a timer varaiable

let startTimer;

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
}
