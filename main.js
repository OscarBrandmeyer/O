function setup() {
    createCanvas(640, 480);
}

function draw() {
    
    var x = width/2;
    var y = height/2;
    //face
    noStroke();
    fill('#FFDC05');
    ellipse(x, y, 250, 250);
    
    
    //nose
    fill('#E39A29');
    ellipse(x, y+90, 130, 100);
    
    fill('#000000');
    ellipse(x-12, y+70, 15, 15);
    fill('#000000');
    ellipse(x+12, y+70, 15, 15);
    
    // eyeleft;
    fill('#FFFFFF');
    ellipse(x+42, y-26, 64, 64);
    
    // pupilleft;
    fill('#7FC35E');
    ellipse(x+42, y-26, 40, 40);
    
    // eyeright;
    fill('#FFFFFF');
    ellipse(x-42, y-26, 64, 64);
    
    // pupilright;
    fill('#7FC35E');
    ellipse(x-42, y-26, 40, 40);
    
    //earleft;
    fill('#52C5DC');
    push();
    translate(x-100,y-80);
    rotate(Math.PI / 4);
    ellipse(0,0, 52, 92);
    pop();
    
    //earright;
    fill('#52C5DC');
    push();
    translate(x+100,y-80);
    rotate(Math.PI / 4);
    ellipse(0,0, 52, 92);
    pop();
    
    //tongue
    fill('#EE3E36');
    arc(x, y+100, 90, 20, 0, 2, 2)
 
}
  