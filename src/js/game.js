const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

const square = new Image();

square.src = 'square.png';

const squarePos = {
	x: 200,
	y: 200
};

const pipes = [
	{
		x: 400,
		y: 200, // 400
		mY: 0 // 200
	}
];

const items = [
	200, 400
];

const gravity = 1;
let lineSpeed = 1; // the problem - if it more than 1 - we not catch if

document.addEventListener('keydown', squareMove);

function draw() {
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, 400, 400);

	ctx.drawImage(square, squarePos.x, squarePos.y);

	ctx.beginPath();
	ctx.moveTo(0, 200);
	ctx.lineTo(1600, 200);
	ctx.stroke();

	for(let i = 0; i < pipes.length; i++) {
		ctx.beginPath();
		ctx.moveTo(pipes[i].x, pipes[i].mY);
		ctx.lineTo(pipes[i].x, pipes[i].y);
		ctx.stroke();

		pipes[i].x -= lineSpeed;
		if(pipes[i].x === 200) {
			let itm =  items[Math.floor(Math.random()*items.length)];
			pipes.push({
				x : cvs.width,
				y : 600 - itm,
				mY: 400 - itm
			});
		}

		if (pipes[i].x === (squarePos.x + 20)) { // 20 is the width of square
			let difference = pipes[i].y - squarePos.y;
			if (difference === 20 || difference === 200) {
				location.reload();
			} else {

			}
		}
	}

	requestAnimationFrame(draw);
}


square.onload = draw;

function squareMove() {
	squarePos.y = squarePos.y === 180 ? 200 : 180;
}