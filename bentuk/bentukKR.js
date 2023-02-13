class KotakKR {
    constructor(x, y, s){
        this.x = 420;
        this.y = 520;
        this.s = 120;
        this.nama = "KotakKR";
        this.warna = color(255, 115, 115);
    }

    show() {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.warna);
        square(width / 2 + 345, height / 2 + 60, 60 * 2);
        stroke(0);
        textSize(30);
        text("Comming Soon", width / 2 + 405, this.y / 2 + 320)
        textSize(90);
        fill(color(255, 255, 255));
        text("?", width / 2 + 405, this.y / 2 + 250)
    }
}