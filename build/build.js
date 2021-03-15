var gui = new dat.GUI();
var params = {
    size_variation: 6,
    size: 56,
    Gaussian_Center: 5,
    Random_Seed: 0,
    N: 35,
    Download_Image: function () { return save(); },
};
gui.add(params, "size_variation", 0, 50, 1);
gui.add(params, "size", 50, 60, 1);
gui.add(params, "Gaussian_Center", 1, 8, 1);
gui.add(params, "Random_Seed", 0, 100, 1);
gui.add(params, "N", 0, 60, 1);
function pseudoSquare(size, variation, randomseed) {
    randomSeed(randomseed);
    translate(-size / 2, -size / 2);
    beginShape();
    vertex(random(-variation, variation), random(-variation, variation));
    vertex(random(size - variation, size + variation), random(-variation, variation));
    vertex(random(size - variation, size + variation), random(size - variation, size + variation));
    vertex(random(-variation, variation), random(size - variation, size + variation));
    endShape(CLOSE);
}
function primaryMatrix(alea) {
    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= 6; j++) {
            push();
            translate(width * 0.01 * i + 50 * (i - 1) * random(0.99, 1.01), height * 0.02 * j + 50 * (j - 1) * random(0.98, 1.02));
            strokeWeight(random(1));
            pseudoSquare(params.size, params.size_variation, i + j + alea);
            pop();
        }
    }
}
function canva(alea) {
    var i = int(randomGaussian(4.5, 4));
    var variation = [0.5, 1., 0.5, 1., 1., 1., 1., 1., 1., 1., 1., 1., 1.];
    var variations = random(variation);
    var mid = params.Gaussian_Center;
    randomSeed(params.Random_Seed + alea);
    for (var n = 1; n <= params.N; n++) {
        for (var j = 1; j <= 6; j++) {
            push();
            variations = random(variation);
            i = int(randomGaussian(params.Gaussian_Center, variations));
            while (i > 9 || i < 1) {
                i = int(randomGaussian(params.Gaussian_Center, variations));
            }
            translate(-params.size / 2, -params.size / 2);
            translate(width * 0.01 * i + 50 * (i - 1) * random(0.97, 1.03), height * 0.02 * j + 50 * (j - 1) * random(0.98, 1.02));
            strokeWeight(random(1));
            beginShape();
            vertex(random(-params.size_variation, params.size_variation), random(-params.size_variation, params.size_variation));
            vertex(random(params.size - params.size_variation, params.size + params.size_variation), random(-params.size_variation, params.size_variation));
            vertex(random(params.size - params.size_variation, params.size + params.size_variation), random(params.size - params.size_variation, params.size + params.size_variation));
            vertex(random(-params.size_variation, params.size_variation), random(params.size - params.size_variation, params.size + params.size_variation));
            endShape(CLOSE);
            pop();
        }
    }
    for (var j = 1; j <= 6; j++) {
        push();
        translate(-params.size / 2, -params.size / 2);
        translate(width * 0.01 * mid + 50 * (mid - 1) * random(0.97, 1.03), height * 0.02 * j + 50 * (j - 1) * random(0.98, 1.02));
        strokeWeight(random(1));
        for (var i_1 = 0; i_1 < params.N / 2; i_1++) {
            beginShape();
            vertex(random(-params.size_variation, params.size_variation), random(-params.size_variation, params.size_variation));
            vertex(random(params.size - params.size_variation, params.size + params.size_variation), random(-params.size_variation, params.size_variation));
            vertex(random(params.size - params.size_variation, params.size + params.size_variation), random(params.size - params.size_variation, params.size + params.size_variation));
            vertex(random(-params.size_variation, params.size_variation), random(params.size - params.size_variation, params.size + params.size_variation));
            endShape(CLOSE);
        }
        if (mid * int(random(5)) % 2 == 0) {
            mid = params.Gaussian_Center + 1;
        }
        else {
            mid = params.Gaussian_Center;
        }
        pop();
    }
}
function canvaBis(alea) {
    var i = int(randomGaussian(4.5, 4));
    randomSeed(params.Random_Seed + alea);
    for (var n = 1; n <= params.N; n++) {
        for (var j = 1; j <= 6; j++) {
            push();
            i = int(randomGaussian(params.Gaussian_Center, 1.));
            while (i > params.Gaussian_Center + 1 || (i < params.Gaussian_Center - 2 && i < 1)) {
                i = int(randomGaussian(params.Gaussian_Center, 1.));
            }
            translate(-params.size / 2, -params.size / 2);
            translate(width * 0.01 * i + 50 * (i - 1) * random(0.97, 1.03), height * 0.02 * j + 50 * (j - 1) * random(0.98, 1.02));
            strokeWeight(random(1));
            beginShape();
            vertex(random(-params.size_variation, params.size_variation), random(-params.size_variation, params.size_variation));
            vertex(random(params.size - params.size_variation, params.size + params.size_variation), random(-params.size_variation, params.size_variation));
            vertex(random(params.size - params.size_variation, params.size + params.size_variation), random(params.size - params.size_variation, params.size + params.size_variation));
            vertex(random(-params.size_variation, params.size_variation), random(params.size - params.size_variation, params.size + params.size_variation));
            endShape(CLOSE);
            pop();
        }
    }
    var lignes = int(random(2, 6));
    for (var j = 1; j <= lignes; j++) {
        push();
        translate(-params.size / 2, -params.size / 2);
        translate(width * 0.01 * (params.Gaussian_Center) + 50 * (params.Gaussian_Center - 1) * random(0.97, 1.03), height * 0.02 * j + 50 * (j - 1) * random(0.98, 1.02));
        strokeWeight(random(1));
        for (var i_2 = 0; i_2 < params.N / 3; i_2++) {
            beginShape();
            vertex(random(-params.size_variation, params.size_variation), random(-params.size_variation, params.size_variation));
            vertex(random(params.size - params.size_variation, params.size + params.size_variation), random(-params.size_variation, params.size_variation));
            vertex(random(params.size - params.size_variation, params.size + params.size_variation), random(params.size - params.size_variation, params.size + params.size_variation));
            vertex(random(-params.size_variation, params.size_variation), random(params.size - params.size_variation, params.size + params.size_variation));
            endShape(CLOSE);
        }
        pop();
    }
}
var value = 0;
var colorStroke = 0;
var palette = ['#000000', '#438bc3', '#9ca6a9', '#153238'];
function draw() {
    background(255);
    translate(width / 3, height / 4);
    stroke(palette[colorStroke]);
    noFill();
    primaryMatrix(1);
    push();
    if (value == 1) {
        canva(1);
    }
    else if (value == 0) {
        canvaBis(2);
    }
    pop();
}
function keyPressed() {
    if (keyCode === UP_ARROW) {
        value = 1;
    }
    else if (keyCode === DOWN_ARROW) {
        value = 0;
    }
}
function mouseClicked() {
    colorStroke = (colorStroke + 1) % 4;
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __MARGIN_SIZE = 0;
function __desiredCanvasWidth() {
    return windowWidth - __MARGIN_SIZE * 2;
}
function __desiredCanvasHeight() {
    return windowHeight - __MARGIN_SIZE * 2;
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map