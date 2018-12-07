var sq;
var feed = [];
var numFood = 10;

function setup() {
    createCanvas(740, 480);
    sq = new pup();

    for (var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function draw() {
    background(0, 255, 0);
    sq.display();

    for (var i = 0; i < feed.length; i++) {
        feed[i].display();
    }


}

function mousePressed() {
    sq.eat();
}


function Food(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    this.foodSize = 50;

    this.display = function () {

        fill(this.color);
        ellipse(this.x, this.y, this.foodSize, this.foodSize);
    }
}

function pup() {
    var x = mouseX;
    var y = mouseY;
    var diameter = 200;


    this.getDistance = function (other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    };
    this.eat = function () {
        for (var i = 0; i < feed.length; i++) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if (r1 + r2 > d) {
                feed.splice(i, 1);
            }
        }
    };


    this.display = function () {

        x = mouseX;
        y = mouseY;




        //face
        noStroke();
        fill('#FFDC05');
        ellipse(x, y, 250, 250);


        //nose
        fill('#E39A29');
        ellipse(x, y + 90, 130, 100);

        fill('#000000');
        ellipse(x - 12, y + 70, 15, 15);
        fill('#000000');
        ellipse(x + 12, y + 70, 15, 15);

        // eyeleft;
        fill('#FFFFFF');
        ellipse(x + 42, y - 26, 64, 64);

        // pupilleft;
        fill('#7FC35E');
        ellipse(x + 42, y - 26, 40, 40);

        // eyeright;
        fill('#FFFFFF');
        ellipse(x - 42, y - 26, 64, 64);

        // pupilright;
        fill('#7FC35E');
        ellipse(x - 42, y - 26, 40, 40);

        //earleft;
        fill('#52C5DC');
        push();
        translate(x - 100, y - 80);
        rotate(Math.PI / 4);
        ellipse(0, 0, 52, 92);
        pop();

        //earright;
        fill('#52C5DC');
        push();
        translate(x + 100, y - 80);
        rotate(Math.PI / 4);
        ellipse(0, 0, 52, 92);
        pop();

        //tongue
        fill('#EE3E36');
        arc(x, y + 100, 90, 20, 0, 2, 2)

    };

}
