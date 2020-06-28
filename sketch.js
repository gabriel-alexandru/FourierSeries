var quadra = (sketch) => {

    sketch.wave = [];
    sketch.angle = 0;
    sketch.slider = createSlider(2, 51, 2, 1);
    sketch.p = createP();

    sketch.setup = function () {
        sketch.canvas = sketch.createCanvas(windowWidth / 2 - 10, 400);
        sketch.canvas.position(0, 0);
        sketch.slider.position(0, sketch.height + 50);
        sketch.p.position(0, sketch.height + 75);
    }

    sketch.draw = function () {
        sketch.translate(175, sketch.height / 2);
        sketch.background(51);

        sketch.ondaQuadra();

        sketch.translate(275, 0);
        sketch.stroke(255, 0, 0);
        sketch.line(sketch.x - 275, sketch.y, 0, sketch.wave[0]);
        sketch.stroke(255);
        sketch.fill(255);
        sketch.ellipse(0, sketch.wave[0], 8, 8);
        sketch.beginShape();
        sketch.noFill();
        for (var i = 0; i < sketch.wave.length; i++) {
            sketch.vertex(i, sketch.wave[i]);
        }
        sketch.endShape();

        if (sketch.wave.length > 500) {
            sketch.wave.pop();
        }

        sketch.angle -= 0.05;
        sketch.p.html(sketch.slider.value() - 1 + " sine function");
    }

    sketch.ondaQuadra = function () {
        sketch.x = 0;
        sketch.y = 0;
        var aP = 75;

        for (var i = 1; i < sketch.slider.value(); i++) {
            var n = i;
            var r = 0;
            if (n % 2 == 1) {
                r = 4 / (n * PI);
            }

            r *= aP;
            sketch.stroke(255);
            sketch.noFill();
            sketch.ellipse(sketch.x, sketch.y, r * 2, r * 2);

            sketch.x = sketch.x + r * sketch.cos(n * sketch.angle);
            sketch.y = sketch.y + r * sketch.sin(n * sketch.angle);
            sketch.fill(255);
            sketch.ellipse(sketch.x, sketch.y, 8, 8);
        }
        sketch.wave.unshift(sketch.y);
    }
}

var sawtooth = (sketch) => {
    sketch.wave = [];
    sketch.angle = 0;
    sketch.slider = createSlider(2, 51, 2, 1);
    sketch.p = createP();

    sketch.setup = function () {
        sketch.canvas = sketch.createCanvas(windowWidth / 2 - 10, 400);
        sketch.canvas.position(windowWidth / 2 + 10, 0);
        sketch.slider.position(windowWidth / 2 + 10, sketch.height + 50);
        sketch.p.position(windowWidth / 2 + 10, sketch.height + 75);
    }

    sketch.draw = function () {
        sketch.translate(175, sketch.height / 2);
        sketch.background(51);

        sketch.ondaDenteSega();

        sketch.translate(275, 0);
        sketch.stroke(255, 0, 0);
        sketch.line(sketch.x - 275, sketch.y, 0, sketch.wave[0]);
        sketch.stroke(255);
        sketch.fill(255);
        sketch.ellipse(0, sketch.wave[0], 8, 8);
        sketch.beginShape();
        sketch.noFill();
        for (var i = 0; i < sketch.wave.length; i++) {
            sketch.vertex(i, sketch.wave[i]);
        }
        sketch.endShape();

        if (sketch.wave.length > 500) {
            sketch.wave.pop();
        }

        sketch.angle -= 0.05;
        sketch.p.html(sketch.slider.value() - 1 + " sine function");
    }

    sketch.ondaDenteSega = function () {
        sketch.x = 0;
        sketch.y = 0;
        var aP = 100;

        for (var i = 1; i < sketch.slider.value(); i++) {
            var n = i;
            var r = 0;
            if (n % 2 == 0) {
                r = 2 / (n * PI);
            } else {
                r = 2 / (-n * PI);
            }

            r *= aP;
            sketch.stroke(255);
            sketch.noFill();
            sketch.ellipse(sketch.x, sketch.y, r * 2, r * 2);

            sketch.x = sketch.x + r * sketch.cos(n * sketch.angle);
            sketch.y = sketch.y + r * sketch.sin(n * sketch.angle);
            sketch.fill(255);
            sketch.ellipse(sketch.x, sketch.y, 8, 8);
        }
        sketch.wave.unshift(sketch.y);
    }
}

function setup() {
    var q = new p5(quadra);
    var s = new p5(sawtooth);
  
    var p = createP("Representation of the Fourier Series. On the left side a Square Wave is approximated. On the right side a Sawtooth Wave is approximated. Use the slider for a better approximation.");
  p.position(0, height + 400);
}