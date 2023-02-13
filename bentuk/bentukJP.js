// Membuat Lingkaran
class Sākuru {
    constructor(x, y, r) {
        this.x = 160;
        this.y = 570;
        this.r = 60;
        this.nama = "サークル";
        this.as = "(Sa~kuru)";
        this.warna = color(255,200,200);
    }

    show() {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.warna);
        ellipse(this.x, this.y, this.r * 2);
    }
}

// Membuat Persegi
class Shikakkei {
    constructor(x, y, s){
        this.x = 420;
        this.y = 520;
        this.s = 120;
        this.nama = "四角形";
        this.as = "(Shikakkei)";
        this.warna = color(255, 80, 80);
    }

    show() {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.warna);
        square(this.x, this.y, this.s);

    }
}

// Membuat Segitiga
class Sankakkei {
    constructor(x1, y1, x2, y2, x3, y3) {
        this.x1 = 800;
        this.y1 = 510;
        this.x2 = 720;
        this.y2 = 640;
        this.x3 = 880;
        this.y3 = 640;
        this.nama = "三角形";
        this.as = "(Sankakkei)";
        this.warna = color(255, 255, 102);
    }

    show() {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.warna);
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    }
}

// Membuat Persegi Panjang
class Chōhōkei{
    constructor(x, y, s){
        this.x = 1040;
        this.y = 530;
        this.width = 200;
        this.height = 100;
        this.nama = "長方形";
        this.as = "(Cho~ho~kei)";
        this.warna = color(102, 255, 204);
    }

    show() {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.warna);
        rect(this.x, this.y, this.width, this.height);
    }
}

// Membuat Trapesium
class Daikei{
    constructor(){
        this.x1 = 110;
        this.y1 = 330;
        this.x2 = 210;
        this.y2 = 330;
        this.x3 = 280;
        this.y3 = 430;
        this.x4 = 40;
        this.y4 = 430;
        this.nama = "台形";
        this.as = "(Daikei)";
        this.warna = color(191, 128, 255);
    }

    show(x1, y1, x2, y2, x3, y3, x4, y4) {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.warna);
        quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
    }
}

// Membuat Jajar Genjang
class Heikōshihenkei{
    constructor(){
        this.x1 = 1080;
        this.y1 = 330;
        this.x2 = 1240;
        this.y2 = 330;
        this.x3 = 1200;
        this.y3 = 430;
        this.x4 = 1040;
        this.y4 = 430;
        this.nama = "平行四辺形";
        this.as = "(Heiko~shihenkei)";
        this.warna = color(102, 204, 255);
    }

    show(x1, y1, x2, y2, x3, y3, x4, y4) {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.warna);
        quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
    }
}

// Kotak Bahasa JP
class KotakJP {
    constructor(x, y, s){
        this.x = 420;
        this.y = 520;
        this.s = 120;
        this.nama = "KotakJP";
        this.warna = color(255, 255, 255);
    }

    show() {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.warna);
        square(width / 2 / 3.5, height / 2 + 60, 60 * 2);
        stroke(0);
        textSize(30);
        text("JEPANG", this.x / 2 + 30, this.y / 2 + 320)
    }
}

class ButtonLangJP {
    constructor(x, y, r) {
        this.x = 1200;
        this.y = 80;
        this.r = 35;
        this.nama = "Button";
        this.warna = color(255);
    }

    show() {
        stroke(102, 102, 102);
        strokeWeight(1);
        fill(this.warna);
        ellipse(this.x, this.y, this.r * 2);
        fill(0);
        text("JP",this.x, this.y + 10)
    }
}

