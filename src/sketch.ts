// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Gaussian_Center:5,
    Random_Seed: 0,
    N:8,
    Download_Image: () => save(),
}
gui.add(params,"Gaussian_Center",0,9,1)
gui.add(params, "Random_Seed", 0, 100, 1)
gui.add(params,"N",0,1000,1)

// -------------------
//       Drawing
// -------------------


///Recoding
function pseudoSquare(size, variation, randomseed){
    randomSeed(randomseed)
    beginShape();
        vertex(random(-variation,variation), random(-variation,variation));
        vertex(random(size-variation,size+variation), random(-variation,variation));
        vertex(random(size-variation,size+variation),random(size-variation,size+variation));
        vertex(random(-variation,variation),random(size-variation,size+variation));
    endShape(CLOSE);
}
function draw(){
    background(255)
    noFill()
    for(let i=1; i<=9; i++){
        for(let j=1; j<=6; j++){
            push();
                translate(width*0.02*i+params.taille*(i-1)*random(0.98,1.02), height * 0.02*j+params.taille*(j-1)*random(0.98,1.02))
                pseudoSquare(params.taille, 3, i+j);
            pop();
        }
    }
    let i=int(randomGaussian(4.5, 4))
    randomSeed(params.Random_Seed)
    for(let n=1; n<=params.N; n++){
        for(let j=1; j<=6; j++){
            push();
                i=int(randomGaussian(params.Gaussian_Center))
                while (i>9 && i<0){
                    i=int(randomGaussian(params.Gaussian_Center))
                }
                translate(width*0.02*i+params.taille*(i-1)*random(0.98,1.02), height * 0.02*j+params.taille*(j-1)*random(0.98,1.02))
                beginShape();
                    vertex(random(-3,3), random(-3,3));
                    vertex(random(50-3,50+3), random(-3,3));
                    vertex(random(50-3,50+3),random(50-3,50+3));
                    vertex(random(-3,3),random(50-3,50+3));
                endShape(CLOSE);
            pop();
        }
    }
}
}
// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}