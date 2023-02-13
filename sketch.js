// let Utama
let mainMenu = true;
let selectLang = false; 
let playGameID = false;
let playGameEN = false;
let playGameJP = false;
let playGameTH = false;
let backtoSelectLang = false;
let buttonlangID, buttonlangEN, buttonlangJP; //buttonlangTH;

// let ID
let lingkaranOn = false;
let persegiOn = false;
let segitigaOn = false;
let perpanOn = false;
let trapesiumOn = false;
let jargenOn = false;

let lingkaran, persegi, segitiga, perpan, trapesium, jargen;
let kotakindo;
let sound_l, sound_p, sound_s,sound_pp, sound_t, sound_jg;


// let EN
let circlesOn = false;
let squaresOn = false;
let trianglesOn = false;
let rectangularOn = false;
let trapezoidOn = false;
let parallelogramOn = false;

let circles, squares, triangles, rectangular, trapezoid, parallelogram;
let kotaking;
let sound_cir, sound_squ, sound_tri,sound_rec, sound_trap, sound_par;


// let JP
let sākuruOn = false;
let shikakkeiOn = false;
let sankakkeiOn = false;
let chōhōkeiOn = false;
let daikeiOn = false;
let heikōshihenkeiOn = false;

let sākuru, shikakkei, sankakkei, chōhōkei, daikei, heikōshihenkei;
let kotakjep;
let sound_sākuru, sound_shikakkei, sound_sankakkei, sound_chōhōkei, sound_daikei, sound_heikōshihenkei;

// let KR
// let sākuruOn = false;
// let shikakkeiOn = false;
// let sankakkeiOn = false;
// let chōhōkeiOn = false;
// let daikeiOn = false;
// let heikōshihenkeiOn = false;

// let sākuru, shikakkei, sankakkei, chōhōkei, daikei, heikōshihenkei;
let kotakkor;
// let sound_sākuru, sound_shikakkei, sound_sankakkei, sound_chōhōkei, sound_daikei, sound_heikōshihenkei;


// let Lain Lain
let posisi_text = 220;
let fontViga, fontChicle, fontJapanese;
let imgPemandangan;
let soundbackgroud;



function preload() {
    // Load Font
    fontViga = loadFont('assets/font/Viga.ttf');
    fontChicle = loadFont('assets/font/Chicle.ttf');
    fontJapanese = loadFont('assets/font/Japanese.ttf');

    // Load IMG
    imgPemandangan = loadImage('assets/image/pemandangan.jpg');

    // Load Music
    soundFormats('mp3', 'wav');
    soundbackgroud = loadSound('assets/music/instrument.mp3')

    // Load sound ID
    sound_l = loadSound('assets/sound/id/lingkaran.wav');
    sound_p = loadSound('assets/sound/id/persegi.wav');
    sound_s = loadSound('assets/sound/id/segitiga.wav');
    sound_pp = loadSound('assets/sound/id/perpan.wav');
    sound_t = loadSound('assets/sound/id/trapesium.wav');
    sound_jg = loadSound('assets/sound/id/jajar_genjang.wav');

    // Load sound EN
    sound_cir = loadSound('assets/sound/en/circles.wav')
    sound_squ = loadSound('assets/sound/en/squares.wav')
    sound_tri = loadSound('assets/sound/en/triangles.wav')
    sound_rec = loadSound('assets/sound/en/rectangular.wav')
    sound_trap = loadSound('assets/sound/en/trapezoid.wav')
    sound_par = loadSound('assets/sound/en/parallelogram.wav')
    
    // Load sound EN
    sound_sākuru = loadSound('assets/sound/jp/sākuru.wav')
    sound_shikakkei = loadSound('assets/sound/jp/shikakkei.wav')
    sound_sankakkei = loadSound('assets/sound/jp/sankakkei.wav')
    sound_chōhōkei = loadSound('assets/sound/jp/chōhōkei.wav')
    sound_daikei = loadSound('assets/sound/jp/daikei.wav')
    sound_heikōshihenkei = loadSound('assets/sound/jp/heikōshihenkei.wav')
}  

function setup() {
    soundbackgroud.loop();
    createCanvas(1280, 720);
    textFont(fontViga); 
    textFont(fontChicle); 
    textFont(fontJapanese); 

    // ID
    lingkaran = new Lingkaran();
    persegi = new Persegi();
    segitiga = new Segitiga();
    perpan = new Persegi_panjang();
    trapesium = new Trapesium();
    jargen = new Jajar_genjang();
    buttonlangID = new ButtonLangID();
    
    // EN
    circles = new Circle();
    squares = new Square();
    triangles = new Triangle();
    rectangular = new Rectangular();
    trapezoid = new Trapezoid();
    parallelogram = new Parallelogram();
    buttonlangEN = new ButtonLangEN();
    
    // JP
    sākuru = new Sākuru();
    shikakkei = new Shikakkei();
    sankakkei = new Sankakkei();
    chōhōkei = new Chōhōkei();
    daikei = new Daikei();
    heikōshihenkei = new Heikōshihenkei();
    buttonlangJP = new ButtonLangJP();

    // Pilih Language
    kotakindo = new KotakID();
    kotaking = new KotakEN();
    kotakjep = new KotakJP();
    kotakkor = new KotakKR();

}

function draw() {
    background(imgPemandangan);
    stroke(0);
    fill(255, 136, 77);
    textFont(fontChicle); 
    textSize(75);
    textAlign(CENTER);
    text("SHAPE FOR KIDZ", width / 2, posisi_text - 100);
    
    if ( mainMenu == true) {
        stroke(0);
        fill(225);
        strokeWeight(2);
        textFont(fontChicle); 
        textSize(50);
        textAlign(CENTER);
        text("Sentuh untuk Memulai", width / 2, height / 2)
    } 

    if ( selectLang == true ) {
        background(imgPemandangan);

        stroke(0);
        fill(255, 136, 77);
        textFont(fontChicle); 
        textSize(75);
        textAlign(CENTER);
        text("PILIH BAHASA", width / 2, posisi_text * 2 - 70);

        kotakindo.show();
        kotaking.show();
        kotakjep.show();
        kotakkor.show();
    } 
    
    // Play Game ID
    if ( playGameID == true) {
        background(imgPemandangan);
    
        stroke(0);
        fill(255, 136, 77);
        textFont(fontChicle); 
        textSize(75);
        textAlign(CENTER);
        text("NAMA - NAMA BANGUN DATAR", width / 2, posisi_text - 100);
        
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
        buttonlangID.show();

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

    // Play Game EN
    if ( playGameEN == true) {

        background(imgPemandangan);
        stroke(0);
        fill(255, 136, 77);
        textFont(fontChicle); 
        textSize(75);
        textAlign(CENTER);
        text("SHAPE FLAT WAKE NAMES", width / 2, posisi_text - 100);
        
        stroke(0);
        strokeWeight(2);
        textFont(fontViga); 
        fill(255, 255, 255);
        textSize(27);
        textAlign(CENTER);
        text("*press a shape", width / 2, height - 25);

        circles.show();
        squares.show();
        triangles.show();
        rectangular.show();
        trapezoid.show();
        parallelogram.show();
        buttonlangEN.show();

        if( circlesOn == true ){
            stroke(0);
            fill(circles.color);
            textSize(50);
            textAlign(CENTER);
            text(circles.name, width / 2, posisi_text);
            ellipse(width / 2, height / 2, 80 * 2);
        }
        
        if( squaresOn == true ){
            stroke(0);
            fill(squares.color);
            textSize(50);
            textAlign(CENTER);
            text(squares.name, width / 2, posisi_text);
            square(width / 2 - 80, height / 2 - 80, 80 * 2);
        }
        
        if( trianglesOn == true ){
            stroke(0);
            fill(triangles.color);
            textSize(50);
            textAlign(CENTER);
            text(triangles.name, width / 2, posisi_text);
            triangle(width / 2, height / 2 - 80, width /2 - 100, height / 2 + 80, width /2 + 100, height / 2 + 80);
        }
        
        if( rectangularOn == true ){
            stroke(0);
            fill(rectangular.color);
            textSize(50);
            textAlign(CENTER);
            text(rectangular.name, width / 2, posisi_text);
            rect(width / 2 - 160, height / 2 - 80, 320, 160);
        }
        
        if( trapezoidOn == true ){
            stroke(0);
            fill(trapezoid.color);
            textSize(50);
            textAlign(CENTER);
            text(trapezoid.name, width / 2, posisi_text);
            quad(width / 2 - 80, height / 2 - 70, width / 2 + 80, height / 2 - 70, width / 2 + 160, height / 2 + 70, width / 2 - 160, height / 2 + 70);
        }
        
        if( parallelogramOn == true ){
            stroke(0);
            fill(parallelogram.color);
            textSize(50);
            textAlign(CENTER);
            text(parallelogram.name, width / 2, posisi_text);
            quad(width / 2 - 80, height / 2 - 70, width / 2 + 160, height / 2 - 70, width / 2 + 80, height / 2 + 70, width / 2 - 160, height / 2 + 70);
        }
    } 
    // Play Game JP
    if ( playGameJP == true) {

        background(imgPemandangan);
        stroke(0);
        fill(255, 136, 77);
        textFont(fontJapanese); 
        textSize(75);
        textAlign(CENTER);
        text("ウェイク名を形にする", width / 2, posisi_text - 100);
        
        stroke(0);
        strokeWeight(2);
        textFont(fontJapanese); 
        fill(255, 255, 255);
        textSize(27);
        textAlign(CENTER);
        text("*形を押す", width / 2, height - 25);

        sākuru.show();
        shikakkei.show();
        sankakkei.show();
        chōhōkei.show();
        daikei.show();
        heikōshihenkei.show();
        buttonlangJP.show();

        if( sākuruOn == true ){
            stroke(0);
            fill(sākuru.warna);
            textSize(50);
            textAlign(CENTER);
            text(sākuru.nama, width / 2, posisi_text);
            textSize(25);
            text(sākuru.as, width / 2, posisi_text + 40);
            ellipse(width / 2, height / 2, 80 * 2);
        }
        
        if( shikakkeiOn == true ){
            stroke(0);
            fill(shikakkei.warna);
            textSize(50);
            textAlign(CENTER);
            text(shikakkei.nama, width / 2, posisi_text);
            textSize(25);
            text(shikakkei.as, width / 2, posisi_text + 40);
            square(width / 2 - 80, height / 2 - 80, 80 * 2);
        }
        
        if( sankakkeiOn == true ){
            stroke(0);
            fill(sankakkei.warna);
            textSize(50);
            textAlign(CENTER);
            text(sankakkei.nama, width / 2, posisi_text);
            textSize(25);
            text(sankakkei.as, width / 2, posisi_text + 40);
            triangle(width / 2, height / 2 - 80, width /2 - 100, height / 2 + 80, width /2 + 100, height / 2 + 80);
        }
        
        if( chōhōkeiOn == true ){
            stroke(0);
            fill(chōhōkei.warna);
            textSize(50);
            textAlign(CENTER);
            text(chōhōkei.nama, width / 2, posisi_text);
            textSize(25);
            text(chōhōkei.as, width / 2, posisi_text + 40);
            rect(width / 2 - 160, height / 2 - 80, 320, 160);
        }
        
        if( daikeiOn == true ){
            stroke(0);
            fill(daikei.warna);
            textSize(50);
            textAlign(CENTER);
            text(daikei.nama, width / 2, posisi_text);
            textSize(25);
            text(daikei.as, width / 2, posisi_text + 40);
            quad(width / 2 - 80, height / 2 - 70, width / 2 + 80, height / 2 - 70, width / 2 + 160, height / 2 + 70, width / 2 - 160, height / 2 + 70);
        }
        
        if( heikōshihenkeiOn == true ){
            stroke(0);
            fill(heikōshihenkei.warna);
            textSize(50);
            textAlign(CENTER);
            text(heikōshihenkei.nama, width / 2, posisi_text);
            textSize(25);
            text(heikōshihenkei.as, width / 2, posisi_text + 40);
            quad(width / 2 - 80, height / 2 - 70, width / 2 + 160, height / 2 - 70, width / 2 + 80, height / 2 + 70, width / 2 - 160, height / 2 + 70);
        }
    } 
}

function mouseClicked(){
    if ( mainMenu == true) {
        mainMenu = !mainMenu;
        selectLang = true;
        playGameID = false;
        playGameEN = false;
        playGameJP = false;
    }

    if (playGameID == true){ 
        let langID = dist(mouseX, mouseY, buttonlangID.x, buttonlangID.y);
            if( langID < 60){
                selectLang = !selectLang;
                playGameID = false;
            }
    }

    if (playGameEN == true) {
        let langEN = dist(mouseX, mouseY, buttonlangEN.x, buttonlangEN.y);
            if( langEN < 60){
                selectLang = !selectLang;
                playGameEN = false;
            } 
    }
    
    if (playGameJP == true) {
        let langJP = dist(mouseX, mouseY, buttonlangJP.x, buttonlangJP.y);
            if( langJP < 60){
                selectLang = !selectLang;
                playGameJP = false;
            } 
    }

    if ( playGameID == true ) {
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
    }
    
    if ( playGameEN == true ) {
        let d = dist(mouseX, mouseY, circles.x, circles.y);
        if( d < 60){
            circlesOn = !circlesOn;
            squaresOn = false;
            trianglesOn = false;
            rectangularOn = false;
            trapezoidOn = false;
            parallelogramOn = false;

            if (circlesOn == true){
                sound_cir.play();
            } else {
                sound_cir.stop();
            }
            sound_squ.stop();
            sound_tri.stop();
            sound_rec.stop();
            sound_trap.stop();
            sound_par.stop();
        }
        
        if( mouseX > squares.x && mouseY > squares.y && mouseX < squares.x + squares.s && mouseY < squares.y + squares.s){
            squaresOn = !squaresOn;
            circlesOn = false;
            trianglesOn = false;
            rectangularOn = false;
            trapezoidOn = false;
            parallelogramOn = false;

            if (squaresOn == true) { 
                sound_squ.play();
            } else {
                sound_squ.stop();
            }
            sound_cir.stop();
            sound_tri.stop();
            sound_rec.stop();
            sound_trap.stop();
            sound_par.stop();
        }
        
        let trngls = dist(mouseX, mouseY, triangles.x1, triangles.y2 - 80);
        if( trngls < 60){
            trianglesOn = !trianglesOn;
            squaresOn = false;
            circlesOn = false;
            rectangularOn = false;
            trapezoidOn = false;
            parallelogramOn = false;

            if (trianglesOn == true) { 
                sound_tri.play();
            } else {
                sound_tri.stop();
            }
            sound_squ.stop();
            sound_cir.stop();
            sound_rec.stop();
            sound_trap.stop();
            sound_par.stop();
        }

        if (mouseX > rectangular.x && mouseY > rectangular.y && mouseX < rectangular.x + rectangular.width && mouseY < rectangular.y + rectangular.height) {
            rectangularOn = !rectangularOn;
            squaresOn = false;
            circlesOn = false;
            trianglesOn = false;
            trapezoidOn = false;
            parallelogramOn = false;

            if (rectangularOn == true) { 
                sound_rec.play();
            } else {
                sound_rec.stop();
            }
            sound_tri.stop();
            sound_squ.stop();
            sound_cir.stop();
            sound_trap.stop();
            sound_par.stop();
        }
        
        if (mouseX > trapezoid.x4 && mouseY > trapezoid.y4 - 100 && mouseX < trapezoid.x1 + 200 && mouseY < trapezoid.y1 + 100) {
            trapezoidOn = !trapezoidOn;
            squaresOn = false;
            circlesOn = false;
            trianglesOn = false;
            rectangularOn = false;
            parallelogramOn = false;

            if (trapezoidOn == true) { 
                sound_trap.play();
            } else {
                sound_trap.stop();
            }
            sound_tri.stop();
            sound_squ.stop();
            sound_cir.stop();
            sound_rec.stop();
            sound_par.stop(); 
        }

        if (mouseX > parallelogram.x4 && mouseY > parallelogram.y2 && mouseX  < parallelogram.x4 + 200 && mouseY < parallelogram.y2 + 100) {
            parallelogramOn = !parallelogramOn;
            squaresOn = false;
            circlesOn = false;
            trianglesOn = false;
            rectangularOn = false;
            trapezoidOn = false;
        
            if (parallelogramOn == true) { 
                sound_par.play();
            } else {
                sound_par.stop();
            }
            sound_tri.stop();
            sound_squ.stop();
            sound_cir.stop();
            sound_trap.stop();
            sound_rec.stop();
        }
    }

    if ( playGameJP == true ) {
        let d = dist(mouseX, mouseY, sākuru.x, sākuru.y);
        if( d < 60){
            sākuruOn = !sākuruOn;
            shikakkeiOn = false;
            sankakkeiOn = false;
            chōhōkeiOn = false;
            daikeiOn = false;
            heikōshihenkeiOn = false;

            if (sākuruOn == true){
                sound_sākuru.play();
            } else {
                sound_sākuru.stop();
            }
            sound_shikakkei.stop();
            sound_sankakkei.stop();
            sound_chōhōkei.stop();
            sound_daikei.stop();
            sound_heikōshihenkei.stop();
        }
        
        if( mouseX > shikakkei.x && mouseY > shikakkei.y && mouseX < shikakkei.x + shikakkei.s && mouseY < shikakkei.y + shikakkei.s){
            shikakkeiOn = !shikakkeiOn;
            sākuruOn = false;
            sankakkeiOn = false;
            chōhōkeiOn = false;
            daikeiOn = false;
            heikōshihenkeiOn = false;

            if (shikakkeiOn == true) { 
                sound_shikakkei.play();
            } else {
                sound_shikakkei.stop();
            }
            sound_sākuru.stop();
            sound_sankakkei.stop();
            sound_chōhōkei.stop();
            sound_daikei.stop();
            sound_heikōshihenkei.stop();
        }
        
        let sgtg = dist(mouseX, mouseY, sankakkei.x1, sankakkei.y2 - 80);
        if( sgtg < 60){
            sankakkeiOn = !sankakkeiOn;
            shikakkeiOn = false;
            sākuruOn = false;
            chōhōkeiOn = false;
            daikeiOn = false;
            heikōshihenkeiOn = false;

            if (sankakkeiOn == true) { 
                sound_sankakkei.play();
            } else {
                sound_sankakkei.stop();
            }
            sound_shikakkei.stop();
            sound_sākuru.stop();
            sound_chōhōkei.stop();
            sound_daikei.stop();
            sound_heikōshihenkei.stop();
        }

        if (mouseX > chōhōkei.x && mouseY > chōhōkei.y && mouseX < chōhōkei.x + chōhōkei.width && mouseY < chōhōkei.y + chōhōkei.height) {
            chōhōkeiOn = !chōhōkeiOn;
            shikakkeiOn = false;
            sākuruOn = false;
            sankakkeiOn = false;
            daikeiOn = false;
            heikōshihenkeiOn = false;

            if (chōhōkeiOn == true) { 
                sound_chōhōkei.play();
            } else {
                sound_chōhōkei.stop();
            }
            sound_shikakkei.stop();
            sound_sākuru.stop();
            sound_sankakkei.stop();
            sound_daikei.stop();
            sound_heikōshihenkei.stop();
        }
        
        if (mouseX > daikei.x4 && mouseY > daikei.y4 - 100 && mouseX < daikei.x1 + 200 && mouseY < daikei.y1 + 100) {
            daikeiOn = !daikeiOn;
            shikakkeiOn = false;
            sākuruOn = false;
            sankakkeiOn = false;
            chōhōkeiOn = false;
            heikōshihenkeiOn = false;

            if (daikeiOn == true) { 
                sound_daikei.play();
            } else {
                sound_daikei.stop();
            }
            sound_shikakkei.stop();
            sound_sākuru.stop();
            sound_sankakkei.stop();
            sound_chōhōkei.stop();
            sound_heikōshihenkei.stop();
        }

        if (mouseX > heikōshihenkei.x4 && mouseY > heikōshihenkei.y2 && mouseX  < heikōshihenkei.x4 + 200 && mouseY < heikōshihenkei.y2 + 100) {
            heikōshihenkeiOn = !heikōshihenkeiOn;
            shikakkeiOn = false;
            sākuruOn = false;
            sankakkeiOn = false;
            chōhōkeiOn = false;
            daikeiOn = false;
        
            if (heikōshihenkeiOn == true) { 
                sound_heikōshihenkei.play();
            } else {
                sound_heikōshihenkei.stop();
            }
            sound_shikakkei.stop();
            sound_sākuru.stop();
            sound_sankakkei.stop();
            sound_chōhōkei.stop();
            sound_daikei.stop();
        }
    }
}

function mousePressed(){
    if ( selectLang == true) {
        if (mouseX > 0 && mouseY > 0 && mouseX < 0 + width / 2 && mouseY < 0 + height / 2) {
            selectLang = !selectLang;
            playGameID = true;
        }

        if (mouseX > width / 2 && mouseY > 0 && mouseX < width && mouseY < 0 + height / 2) {
            selectLang = !selectLang;
            playGameEN = true;
        }

        if (mouseX > 0 && mouseY > 0 + height / 2 && mouseX < 0 + width / 2 && mouseY < 0 + height) {
            selectLang = !selectLang;
            playGameJP = true;
        }
    }
}