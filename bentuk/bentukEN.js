//  Make Circle
class Circle {
    constructor(x, y, r) {
        this.x = 160;
        this.y = 570;
        this.r = 60;
        this.name = "CIRCLE";
        this.color = color(255,200,200);
    }

    show() {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.color);
        ellipse(this.x, this.y, this.r * 2);     
    }
}

//  Make Square
class Square {
    constructor(x, y, s){
        this.x = 420;
        this.y = 520;
        this.s = 120;
        this.name = "SQUARE";
        this.color = color(255, 80, 80);
    }

    show() {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.color);
        square(this.x, this.y, this.s);
    }
}

//  Make Triangle
class Triangle {
    constructor(x1, y1, x2, y2, x3, y3) {
        this.x1 = 800;
        this.y1 = 510;
        this.x2 = 720;
        this.y2 = 640;
        this.x3 = 880;
        this.y3 = 640;
        this.name = "TRIANGLE";
        this.color = color(255, 255, 102);
    }

    show() {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.color);
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    }
}

//  Make Rectangular
class Rectangular{
    constructor(x, y, s){
        this.x = 1040;
        this.y = 530;
        this.width = 200;
        this.height = 100;
        this.name = "RECTANGULAR";
        this.color = color(102, 255, 204);
    }

    show() {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
    }
}

//  Make Trapezoid
class Trapezoid{
    constructor(){
        this.x1 = 110;
        this.y1 = 330;
        this.x2 = 210;
        this.y2 = 330;
        this.x3 = 280;
        this.y3 = 430;
        this.x4 = 40;
        this.y4 = 430;
        this.name = "TRAPEZOID";
        this.color = color(191, 128, 255);
    }

    show(x1, y1, x2, y2, x3, y3, x4, y4) {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.color);
        quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
    }
}

//  Make Parallelogram
class Parallelogram{
    constructor(){
        this.x1 = 1080;
        this.y1 = 330;
        this.x2 = 1240;
        this.y2 = 330;
        this.x3 = 1200;
        this.y3 = 430;
        this.x4 = 1040;
        this.y4 = 430;
        this.name = "PALLELOGRAM";
        this.color = color(102, 204, 255);
    }

    show(x1, y1, x2, y2, x3, y3, x4, y4) {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.color);
        quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
    }
}

class ButtonLangEN {
    constructor(x, y, r) {
        this.x = 1200;
        this.y = 80;
        this.r = 35;
        this.name = "Button";
        this.color = color(255);
    }

    show() {
        stroke(102, 102, 102);
        strokeWeight(1);
        fill(this.color);
        ellipse(this.x, this.y, this.r * 2);
        fill(0);
        text("EN",this.x, this.y + 10)
    }
}
