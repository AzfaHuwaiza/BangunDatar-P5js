let  mainMenu = false;
let  playGame = false;

let persegiOn = false;
let lingkaranOn = false;
let segitigaOn = false;
let perpanOn = false;
let trapesiumOn = false;
let jargenOn = false;

let lingkaran, persegi, segitiga, perpan, trapesium, jargen;
let posisi_text = 220;

let fontViga, fontChicle;
let imgPemandangan;
let soundbackgroud;
let sound_l, sound_p, sound_s,sound_pp, sound_t, sound_jg;



function preload() {
    fontViga = loadFont('assets/font/Viga.ttf');
    fontChicle = loadFont('assets/font/Chicle.ttf');

    imgPemandangan = loadImage('assets/image/pemandangan.jpg');

    soundbackgroud = loadSound('assets/music/instrument.mp3')

    sound_l = loadSound('assets/sound/lingkaran.wav');
    sound_p = loadSound('assets/sound/persegi.wav');
    sound_s = loadSound('assets/sound/segitiga.wav');
    sound_pp = loadSound('assets/sound/perpan.wav');
    sound_t = loadSound('assets/sound/trapesium.wav');
    sound_jg = loadSound('assets/sound/jajar_genjang.wav');
}  

function setup() {
    createCanvas(1280, 720);
    textFont(fontViga); 
    textFont(fontChicle); 

    soundbackgroud.loop()

    
    lingkaran = new Lingkaran();
    persegi = new Persegi();
    segitiga = new Segitiga();
    perpan = new Persegi_panjang();
    trapesium = new Trapesium();
    jargen = new Jajar_genjang();
    
}

function draw() {
    background(imgPemandangan);
    
    stroke(0);
    fill(255, 136, 77);
    textFont(fontChicle); 
    textSize(75);
    textAlign(CENTER);
    text("NAMA - NAMA BANGUN DATAR", width / 2, posisi_text - 100);
    
    if ( mainMenu == false) {
        stroke(0);
        fill(225);
        strokeWeight(2);
        textFont(fontChicle); 
        textSize(50);
        textAlign(CENTER);
        text("Sentuh untuk Memulai", width / 2, height / 2)
    } else {
        playGame = true;
    }
    
    if ( playGame == true) {
        stroke(0);
        strokeWeight(2);
        textFont(fontViga); 
        fill(255, 255, 255);
        textSize(27);
        textAlign(CENTER);
        text("*tekan salah satu bentuk", width / 2, height - 25);

        lingkaran.show();
        persegi.show();
        segitiga.show();
        perpan.show();
        trapesium.show();
        jargen.show();

        

        if( lingkaranOn == true ){
            stroke(0);
            fill(lingkaran.warna);
            textSize(50);
            textAlign(CENTER);
            text(lingkaran.nama, width / 2, posisi_text);
            ellipse(width / 2, height / 2, 80 * 2);
        }
        
        if( persegiOn == true ){
            stroke(0);
            fill(persegi.warna);
            textSize(50);
            textAlign(CENTER);
            text(persegi.nama, width / 2, posisi_text);
            square(width / 2 - 80, height / 2 - 80, 80 * 2);
        }
        
        if( segitigaOn == true ){
            stroke(0);
            fill(segitiga.warna);
            textSize(50);
            textAlign(CENTER);
            text(segitiga.nama, width / 2, posisi_text);
            triangle(width / 2, height / 2 - 80, width /2 - 100, height / 2 + 80, width /2 + 100, height / 2 + 80);
        }
        
        if( perpanOn == true ){
            stroke(0);
            fill(perpan.warna);
            textSize(50);
            textAlign(CENTER);
            text(perpan.nama, width / 2, posisi_text);
            rect(width / 2 - 160, height / 2 - 80, 320, 160);
        }
        
        if( trapesiumOn == true ){
            stroke(0);
            fill(trapesium.warna);
            textSize(50);
            textAlign(CENTER);
            text(trapesium.nama, width / 2, posisi_text);
            quad(width / 2 - 80, height / 2 - 70, width / 2 + 80, height / 2 - 70, width / 2 + 160, height / 2 + 70, width / 2 - 160, height / 2 + 70);
        }
        
        if( jargenOn == true ){
            stroke(0);
            fill(jargen.warna);
            textSize(50);
            textAlign(CENTER);
            text(jargen.nama, width / 2, posisi_text);
            quad(width / 2 - 80, height / 2 - 70, width / 2 + 160, height / 2 - 70, width / 2 + 80, height / 2 + 70, width / 2 - 160, height / 2 + 70);
        }
    } 
    
    

  
    
}

function mouseClicked(){
    if ( mainMenu == true) {
        let d = dist(mouseX, mouseY, lingkaran.x, lingkaran.y);
        if( d < 60){
            lingkaranOn = !lingkaranOn;
            persegiOn = false;
            segitigaOn = false;
            perpanOn = false;
            trapesiumOn = false;
            jargenOn = false;

            if (lingkaranOn == true){
                sound_l.play();
            } else {
                sound_l.stop();
            }
            sound_p.stop();
            sound_s.stop();
            sound_pp.stop();
            sound_t.stop();
            sound_jg.stop();
        }
        
        if( mouseX > persegi.x && mouseY > persegi.y && mouseX < persegi.x + persegi.s && mouseY < persegi.y + persegi.s){
            persegiOn = !persegiOn;
            lingkaranOn = false;
            segitigaOn = false;
            perpanOn = false;
            trapesiumOn = false;
            jargenOn = false;

            if (persegiOn == true) { 
                sound_p.play();
            } else {
                sound_p.stop();
            }
            sound_l.stop();
            sound_s.stop();
            sound_pp.stop();
            sound_t.stop();
            sound_jg.stop();
        }
        
        let sgtg = dist(mouseX, mouseY, segitiga.x1, segitiga.y2 - 80);
        if( sgtg < 60){
            segitigaOn = !segitigaOn;
            persegiOn = false;
            lingkaranOn = false;
            perpanOn = false;
            trapesiumOn = false;
            jargenOn = false;

            if (segitigaOn == true) { 
                sound_s.play();
            } else {
                sound_s.stop();
            }
            sound_p.stop();
            sound_l.stop();
            sound_pp.stop();
            sound_t.stop();
            sound_jg.stop();
        }

        if (mouseX > perpan.x && mouseY > perpan.y && mouseX < perpan.x + perpan.width && mouseY < perpan.y + perpan.height) {
            perpanOn = !perpanOn;
            persegiOn = false;
            lingkaranOn = false;
            segitigaOn = false;
            trapesiumOn = false;
            jargenOn = false;

            if (perpanOn == true) { 
                sound_pp.play();
            } else {
                sound_pp.stop();
            }
            sound_s.stop();
            sound_p.stop();
            sound_l.stop();
            sound_t.stop();
            sound_jg.stop();
        }
        
        if (mouseX > trapesium.x4 && mouseY > trapesium.y4 - 100 && mouseX < trapesium.x1 + 200 && mouseY < trapesium.y1 + 100) {
            trapesiumOn = !trapesiumOn;
            persegiOn = false;
            lingkaranOn = false;
            segitigaOn = false;
            perpanOn = false;
            jargenOn = false;

            if (trapesiumOn == true) { 
                sound_t.play();
            } else {
                sound_t.stop();
            }
            sound_s.stop();
            sound_p.stop();
            sound_l.stop();
            sound_pp.stop();
            sound_jg.stop();
        }

        if (mouseX > jargen.x4 && mouseY > jargen.y2 && mouseX  < jargen.x4 + 200 && mouseY < jargen.y2 + 100) {
            jargenOn = !jargenOn;
            persegiOn = false;
            lingkaranOn = false;
            segitigaOn = false;
            perpanOn = false;
            trapesiumOn = false;
        
            if (jargenOn == true) { 
                sound_jg.play();
            } else {
                sound_jg.stop();
            }
            sound_s.stop();
            sound_p.stop();
            sound_l.stop();
            sound_t.stop();
            sound_pp.stop();
        }
    } else {
        if (mouseX, mouseY) {
            mainMenu = !mainMenu;
       }
    }


    

    
}


