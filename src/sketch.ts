// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    size_variation:6,
    size:56,
    Gaussian_Center:5,
    Random_Seed: 0,
    N:35,
    Download_Image: () => save(),
}
gui.add(params,"size_variation",0,50,1)
gui.add(params,"size",50,60,1)
gui.add(params,"Gaussian_Center",1,8,1)
gui.add(params, "Random_Seed", 0, 100, 1)
gui.add(params,"N",0,60,1)


// -------------------
//       Drawing
// -------------------


///Recoding



function pseudoSquare(size, variation, randomseed){
    randomSeed(randomseed)
    translate(-size/2,-size/2)
    beginShape();
        vertex(random(-variation,variation), random(-variation,variation));
        vertex(random(size-variation,size+variation), random(-variation,variation));
        vertex(random(size-variation,size+variation),random(size-variation,size+variation));
        vertex(random(-variation,variation),random(size-variation,size+variation));
    endShape(CLOSE);
}

function primaryMatrix(alea){
    for(let i=1; i<=9; i++){
        for(let j=1; j<=6; j++){
            push();
                translate(width*0.01*i+50*(i-1)*random(0.99,1.01), height * 0.02*j+50*(j-1)*random(0.98,1.02))
                strokeWeight(random(1))
                pseudoSquare(params.size, params.size_variation, i+j+alea);
            pop();
        }
    }
}

function canva(alea){
    let i=int(randomGaussian(4.5, 4))
    let variation = [0.5, 1., 0.5, 1., 1., 1., 1., 1., 1., 1., 1., 1., 1.]
    let variations=random(variation)
    let mid = params.Gaussian_Center
    randomSeed(params.Random_Seed+alea)
    for(let n=1; n<=params.N; n++){
        for(let j=1; j<=6; j++){
            push();
                variations=random(variation)
                i=int(randomGaussian(params.Gaussian_Center, variations))
                while (i>9 || i<1){
                    i=int(randomGaussian(params.Gaussian_Center, variations))
                }
                translate(-params.size/2,-params.size/2)
                translate(width*0.01*i+50*(i-1)*random(0.97,1.03), height * 0.02*j+50*(j-1)*random(0.98,1.02))
                strokeWeight(random(1))
                beginShape();
                    vertex(random(-params.size_variation,params.size_variation), random(-params.size_variation,params.size_variation));
                    vertex(random(params.size-params.size_variation,params.size+params.size_variation), random(-params.size_variation,params.size_variation));
                    vertex(random(params.size-params.size_variation,params.size+params.size_variation),random(params.size-params.size_variation,params.size+params.size_variation));
                    vertex(random(-params.size_variation,params.size_variation),random(params.size-params.size_variation,params.size+params.size_variation));
                endShape(CLOSE);
            pop();


        }
    }

        for(let j=1; j<=6; j++){
            push();
            translate(-params.size/2,-params.size/2)
            translate(width*0.01*mid+50*(mid-1)*random(0.97,1.03), height * 0.02*j+50*(j-1)*random(0.98,1.02))
            strokeWeight(random(1))
            for (let i=0; i<params.N/2; i++){
                beginShape();
                vertex(random(-params.size_variation,params.size_variation), random(-params.size_variation,params.size_variation));
                vertex(random(params.size-params.size_variation,params.size+params.size_variation), random(-params.size_variation,params.size_variation));
                vertex(random(params.size-params.size_variation,params.size+params.size_variation),random(params.size-params.size_variation,params.size+params.size_variation));
                vertex(random(-params.size_variation,params.size_variation),random(params.size-params.size_variation,params.size+params.size_variation));
            endShape(CLOSE);
            }
            if (mid*int(random(5))%2==0){
                mid = params.Gaussian_Center+1
            }
            else{
                mid = params.Gaussian_Center
            }
            pop();


        }
    }


function canvaBis(alea){
        let i=int(randomGaussian(4.5, 4))
        randomSeed(params.Random_Seed+alea)
        for(let n=1; n<=params.N; n++){
            for(let j=1; j<=6; j++){
                push();
                    i=int(randomGaussian(params.Gaussian_Center, 1.))
                    while (i>params.Gaussian_Center+1 || (i<params.Gaussian_Center-2 && i<1)){
                        i=int(randomGaussian(params.Gaussian_Center, 1.))
                    }
                    translate(-params.size/2,-params.size/2)
                    translate(width*0.01*i+50*(i-1)*random(0.97,1.03), height * 0.02*j+50*(j-1)*random(0.98,1.02))
                    strokeWeight(random(1))
                    beginShape();
                        vertex(random(-params.size_variation,params.size_variation), random(-params.size_variation,params.size_variation));
                        vertex(random(params.size-params.size_variation,params.size+params.size_variation), random(-params.size_variation,params.size_variation));
                        vertex(random(params.size-params.size_variation,params.size+params.size_variation),random(params.size-params.size_variation,params.size+params.size_variation));
                        vertex(random(-params.size_variation,params.size_variation),random(params.size-params.size_variation,params.size+params.size_variation));
                    endShape(CLOSE);
                pop();
    
    
            }
        }
        let lignes=int(random(2,6))
            for(let j=1; j<=lignes; j++){
                push();
                    translate(-params.size/2,-params.size/2)
                    translate(width*0.01*(params.Gaussian_Center)+50*(params.Gaussian_Center-1)*random(0.97,1.03), height * 0.02*j+50*(j-1)*random(0.98,1.02))
                    strokeWeight(random(1))
                    for (let i=0; i<params.N/3; i++){
                        beginShape();
                            vertex(random(-params.size_variation,params.size_variation), random(-params.size_variation,params.size_variation));
                            vertex(random(params.size-params.size_variation,params.size+params.size_variation), random(-params.size_variation,params.size_variation));
                            vertex(random(params.size-params.size_variation,params.size+params.size_variation),random(params.size-params.size_variation,params.size+params.size_variation));
                            vertex(random(-params.size_variation,params.size_variation),random(params.size-params.size_variation,params.size+params.size_variation));
                        endShape(CLOSE);
                    }
                pop();
    
    
        }
    }

let value=0
let colorStroke=0
let palette = ['#000000','#438bc3','#9ca6a9','#153238']

function draw(){
    background(255);
    translate(width/3,height/4)
    stroke(palette[colorStroke])
    noFill()
    primaryMatrix(1)
    push();
            if (value==1){
                canva(1)
            }
            else if(value==0){
                canvaBis(2)
            }
    pop();

}

function keyPressed() {
    if (keyCode === UP_ARROW) {
      value = 1;
    } else if (keyCode === DOWN_ARROW) {
      value = 0;
    }
  }

  function mouseClicked(){
      colorStroke=(colorStroke+1)%4
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