// // import "./p5/p5";
// import "./p5/addons/p5.sound";



// export default function sketch(p) {
// 	let vol;
// 	let dots = [];
// 	let numDots = 250;
// 	let t = 0;
// 	let time = 0;
// 	let getT = [];
// 	let getTime = [];
// 	// eslint-disable-next-line
// 	let randNums = [];	
// 	// eslint-disable-next-line
// 	let song;

// 	p.preload = function () {
		
// 		song = p.loadSound("./hello.mp3");
// 	}

// 	p.setup = function () {
// 		p.createCanvas(p.windowWidth, p.windowHeight, 'p2d');
// 		p.background(0);
// 		p.frameRate(30);
// 		p.smooth();
// 		p.colorMode(p.HSB, 255, 255, 255, 255);

// 		for (var i = 0; i < numDots; i++) {
// 			dots[i] = new p.Dot(180, 0, 0.5 + p.random(0.95, 1), 0.5);
// 			t += 0.01;
// 			time += 0.001;
// 			getT[i] = t;
// 			getTime[i] = time;

// 		}
// 	}

// 	p.Dot = function (tempX, tempY, tempSpeed, tempSpeedY) {
// 		this.x = tempX;
// 		this.y = tempY;
// 		this.speed = tempSpeed;
// 		this.speedY = tempSpeedY;

// 		this.alph = p.random(120, 255);
// 		this.c = p.color(p.random(100, 255), 255, 255, this.alph);


// 		this.eleSize = p.random(2, 10);
// 	}


	

// 	var varRot = 0;

// 	p.draw = function () {

// 		// vol = analyzer.getLevel() * 10;
// // eslint-disable-next-line
// 		let numBands = numDots; //32768/2;
// 		// let spectrum = p.fft.analyze(256);

// 		p.push();
// 		p.translate(0, 0);
// 		p.noStroke();
// 		p.fill(0);
// 		p.rect(0, 0, p.width, p.height);
// 		p.pop();

// 		p.push();

// 		p.translate(p.width / 2, p.height / 2);
// 		p.rotate(varRot);
// 		// rotate(noise(varRot/10,time/a));
// 		//rotate(radians(a));
// 		// rotate(noise(varRot,a/10));
// 		for (var i = 0; i < dots.length; ++i) {
// 			p.rotate(p.radians(360 / numDots));
// 			p.push();
// 			// for (var j = i; j < dots.length; j += 10) {
// 			// 	dots[i].this.intersect(dots[j]);
// 			// }
// 			p.pop();
// 			dots[i].display();
// 			dots[i].move(vol); //*randNums[i]



// 		}
// 		varRot = varRot + vol / 100;
// 		time = time + 0.0001;
// 		//noLoop();
// 		p.pop();

// 		// console.log(varRot);

// 	}


// 	p.Dot = function (tempX, tempY, tempSpeed, tempSpeedY) {
// 		this.x = tempX;
// 		this.y = tempY;
// 		this.speed = tempSpeed;
// 		this.speedY = tempSpeedY;

// 		this.alph = p.random(120, 255);
// 		this.c = p.color(p.random(100, 255), 255, 255, this.alph);


// 		this.eleSize = p.random(2, 10);
// 	}

// 	p.Dot.prototype.display = function () {
// 		p.noStroke();
// 		p.fill(this.c); //random(60,255)

// 		if (p.random(1) > 0.995) {
// 			this.vol2 = vol * 3;

// 			if (p.analyzer.getLevel() > 0.3) {
// 				p.ellipse(this.x, this.y, this.vol2 * 2, this.vol2 * 2);
// 			} else {

// 				p.ellipse(this.x, this.y, this.vol2, this.vol2);
// 			}

// 		} else {
// 			p.ellipse(this.x, this.y, this.eleSize - 3, this.eleSize - 3);
// 		}
// 	}


// 	p.Dot.prototype.move = function (tempA) {
// 		this.ranSize = tempA * 10;
// 		p.constrain(this.ranSize, 0, 3);

// 		this.x = this.x + this.speed * (tempA / 1);


// 		if (this.y > 100) {
// 			this.speedY = -this.speedY;
// 		} else if (this.y < -100) {
// 			this.speedY = -this.speedY;
// 		}


// 		if (this.x > 180) {
// 			this.speed = -this.speed;
// 		} else if (this.x < 110) { //* tempA
// 			this.speed = -this.speed;
// 		}
// 	}

// 	p.Dot.prototype.intersect = function (other) {
// 		var d = p.dist(this.x, this.y, other.x, other.y);

// 		if (d < 8) {
// 			p.stroke(this.c);
// 			p.noFill();
// 			p.strokeWeight(.5);
// 			p.line(other.x, other.x, this.x, this.x);
// 		}

// 	}



// 	p.windowResized = function () {
// 		p.resizeCanvas(p.windowWidth, p.windowHeight);
// 	}

// };