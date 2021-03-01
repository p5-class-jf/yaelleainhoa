var gui = new dat.GUI();
var params = {
    Gaussian_Center: 5,
    Rotation: 0,
    Random_Seed: 0,
    taille: 50,
    N: 8,
    Alpha: 50,
    Rect_size: 100,
    Ellipse_Size: 60,
    Download_Image: function () { return save(); },
};
gui.add(params, "Gaussian_Center", 0, 9, 1);
gui.add(params, "Rotation", 0, 1, 0.00001);
gui.add(params, "Random_Seed", 0, 100, 1);
gui.add(params, "taille", 0, 500, 0.1);
gui.add(params, "N", 0, 1000, 1);
gui.add(params, "Alpha", 0, 255, 1);
gui.add(params, "Rect_size", 0, 100, 1);
gui.add(params, "Ellipse_Size", 0, 500, 1);
gui.add(params, "Download_Image");
function pseudoSquare(size, variation, randomseed) {
    randomSeed(randomseed);
    beginShape();
    vertex(random(-variation, variation), random(-variation, variation));
    vertex(random(size - variation, size + variation), random(-variation, variation));
    vertex(random(size - variation, size + variation), random(size - variation, size + variation));
    vertex(random(-variation, variation), random(size - variation, size + variation));
    endShape(CLOSE);
}
function draw() {
    background(255);
    noFill();
    for (var i_1 = 1; i_1 <= 9; i_1++) {
        for (var j = 1; j <= 6; j++) {
            push();
            translate(width * 0.02 * i_1 + params.taille * (i_1 - 1) * random(0.98, 1.02), height * 0.02 * j + params.taille * (j - 1) * random(0.98, 1.02));
            pseudoSquare(params.taille, 3, i_1 + j);
            pop();
        }
    }
    var i = int(randomGaussian(4.5, 4));
    randomSeed(params.Random_Seed);
    for (var n = 1; n <= params.N; n++) {
        for (var j = 1; j <= 6; j++) {
            push();
            i = int(randomGaussian(params.Gaussian_Center));
            while (i > 9 && i < 0) {
                i = int(randomGaussian(params.Gaussian_Center));
            }
            translate(width * 0.02 * i + params.taille * (i - 1) * random(0.98, 1.02), height * 0.02 * j + params.taille * (j - 1) * random(0.98, 1.02));
            beginShape();
            vertex(random(-3, 3), random(-3, 3));
            vertex(random(50 - 3, 50 + 3), random(-3, 3));
            vertex(random(50 - 3, 50 + 3), random(50 - 3, 50 + 3));
            vertex(random(-3, 3), random(50 - 3, 50 + 3));
            endShape(CLOSE);
            pop();
        }
    }
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
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