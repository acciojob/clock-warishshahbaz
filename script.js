//your JS code here. If required.
function timerFn(){
	let text = document.getElementById("timer");
	let data = new Date();
	text.innerHTML = date
	let t = setTimeout(function(){ timerFn() }, 1000);
}
timerFn();