var canvas = document.getElementById("canvas"),
	ctx = canvas.getContext("2d"),
	width = canvas.width,
	height = canvas.height,
	background = "#e9f28c";

var keyspressed = [];




function update(){

}

function draw(){
	ctx.fillStyle = background;
	ćtx.fillRect(0, 0, width, height);
}

function timestamp(){
	return new Date().getTime();
}


function frame(timestamp){
	update();
	draw();

	window.requestAnimationFrame(frame);
}

window.addEventListener("keydown", function(event) {
	keyPresses[event.keyCode] = true;
});

window.addEventListener("keyup", function(event){
	keyPresses[event.keyCode] = false;
});


window.requestAnimationFrame(frame);