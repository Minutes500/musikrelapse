// import "react-p5-wrapper/node_modules/p5/lib/addons/p5.dom";
// import "react-p5-wrapper/node_modules/p5/lib/addons/p5.sound";

// import "../../Libraries/addons/p5.dom";
// // import "../../Libraries/addons/p5.sound";
// import song from "./hello.mp3"

export default function sketch(p) {
    // // p.preload = function() {
    // // 	song = p.loadSound({song}); 
    // // }
        let vol;
        
        let dots = [];
        let numDots = 250;
        
        let t = 0;
        let time = 0;
        let getT = [];
        let getTime = [];
        
        let randNums = [];
    
    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight, 'p2d');
        // song = p.loadSound({song});
        p.background(0);
        p.frameRate(30);
        p.smooth();
        p.colorMode(p.HSB, 255, 255, 255, 255);
    
    
        
        // p.analyzer = new p.p5.AudioIn();
        // p.analyzer.p.setInput(song);
        // p.fft = new p.p5.FFT();
        // p.fft.setInput(song);
    
        // song.loop();
    
    
    
     
        // add an object inside array	
        for (var i = 0; i < numDots; i++) {
            dots[i] = new p.Dot(180,0, 0.5+p.random(0.95,1), 0.5);
            t += 0.01;
            time += 0.001;
            getT[i] = t;
            getTime[i] = time;
    
    
            if (p.random(1) > 0.5) {
                randNums[i] = p.random(1,2);
            } else {
                randNums[i] = p.random(-2,-1);
            }
        }
    
    
    }
    
    var varRot = 0;
    
    p.draw = function() {
    
        vol = p.analyzer.getLevel() * 10;
    
        let numBands = numDots; //32768/2;
        let spectrum = p.fft.analyze(256);
    
        p.push();
            p.translate(0,0);
            p.noStroke(); p.fill(0);
            p.rect(0,0,p.width,p.height);
        p.pop();
    
        p.push();
    
            p.translate(p.width/2, p.height/2);
            p.rotate(varRot);
            // rotate(noise(varRot/10,time/a));
            //rotate(radians(a));
            // rotate(noise(varRot,a/10));
            for (var i = 0; i < dots.length; ++i) {
                p.rotate(p.radians(360/numDots));
                p.push();
                // for (var j = i; j < dots.length; j+= 10 )  {
                //   dots[i].intersect(dots[j]);
                // }
                p.pop();
                dots[i].display(); 	
                dots[i].move(vol); //*randNums[i]
    
    
                
            }
            varRot = varRot + vol/100;
            time = time + 0.0001;
            //noLoop();
        p.pop();
    
        // console.log(varRot);
      
    }
    
    
    
    p.Dot = function(tempX, tempY, tempSpeed, tempSpeedY) {
        this.x = tempX;
        this.y = tempY;
        this.speed = tempSpeed;
        this.speedY = tempSpeedY;
    
        this.alph = p.random(120,255);
        this.c = p.color(p.random(100,255),255,255, this.alph);
        
    
        this.eleSize = p.random(2,10);
    }
    
    p.Dot.prototype.display = function() {
        p.noStroke(); p.fill( this.c );//random(60,255)
    
        if (p.random(1) > 0.995) {
            this.vol2 = vol * 3;
    
    
            if (p.analyzer.getLevel() > 0.3) {
                p.ellipse(this.x,this.y,this.vol2*2, this.vol2*2);
            } else {
                
                p.ellipse(this.x,this.y,this.vol2, this.vol2);
            }
    
        } else {
            p.ellipse(this.x,this.y,this.eleSize-3,this.eleSize-3);
        }
    }
    
    
    p.Dot.prototype.move = function(tempA) {
        this.ranSize = tempA * 10;
        p.constrain(this.ranSize, 0, 3);
    
        this.x = this.x + this.speed * (tempA/1);
    
    
        if ( this.y > 100 ) {
            this.speedY = -this.speedY ;
        } else if ( this.y < -100) {
            this.speedY = -this.speedY;
        }
    
    
        if ( this.x > 180 ) {
            this.speed = -this.speed ;
        } else if ( this.x < 110 ) { //* tempA
            this.speed = -this.speed;
        }
    }
    
    p.Dot.prototype.intersect = function(other) {
        var d  = p.dist(this.x, this.y, other.x, other.y);
    
        if ( d < 8 ) {
            p.stroke(this.c); p.noFill(); p.strokeWeight(.5);
            p.line(other.x, other.x, this.x, this.x);
        }
    
    }
    
    
    
    p.windowResized= function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
    
    }
    
    // export default function sketch (p) {
    // 	let rotation = 0;
      
    // 	p.setup = function () {
    // 	  p.createCanvas(1920, 1080, p.WEBGL);
    // 	};
      
    // 	p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    // 	  if (props.rotation){
    // 		rotation = props.rotation * Math.PI / 180;
    // 	  }
    // 	};
      
    // 	p.draw = function () {
    // 	  p.background(100);
    // 	  p.noStroke();
      
    // 	  p.push();
    // 	  p.translate(-150, 100);
    // 	  p.rotateY(rotation);
    // 	  p.rotateX(-0.9);
    // 	  p.box(100);
    // 	  p.pop();
      
    // 	  p.noFill();
    // 	  p.stroke(255);
    // 	  p.push();
    // 	  p.translate(500, p.height*0.35, -200);
    // 	  p.sphere(300);
    // 	  p.pop();
    // 	};
    //   };