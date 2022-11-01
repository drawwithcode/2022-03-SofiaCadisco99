let z = 0;
let angle = 0;
let mySong;
let mySong2;
let mySong3;
let mySong4;
let mySong5;
let mySong6;
let mySong7;
let mySong8;
let mySong9;

let title = "FLԐURS³";
let author = "FRANCO BATTIATO";
let canzone = "";
let istruzioni =
  "Seleziona il numero corrispondente alla canzone che vuoi ascoltare e premi il tasto sinistro; \ninterrompi la canzone, sempre con il tasto sinistro, prima di selezionarne un'altra. \nMuovi il mouse a destra per alzare il volume e a sinistra per abbassarlo";
let titoli =
  "1. Perduto amor      2. Impressioni di settembre      3. Se mai      4. Ritornerai      5. Col tempo sai      \n6. Insieme a te non ci sto più      7. Il cielo in una stanza      8. Le tue radici      9. Se tu sapessi";

function preload() {
  mySong = loadSound("./assets/1.mp3");
  mySong2 = loadSound("./assets/2.mp3");
  mySong3 = loadSound("./assets/3.mp3");
  mySong4 = loadSound("./assets/4.mp3");
  mySong5 = loadSound("./assets/5.mp3");
  mySong6 = loadSound("./assets/6.mp3");
  mySong7 = loadSound("./assets/7.mp3");
  mySong8 = loadSound("./assets/8.mp3");
  mySong9 = loadSound("./assets/9.mp3");

  myImage1 = loadImage("./assets/1.png");
  myImage2 = loadImage("./assets/2.png");
  myImage3 = loadImage("./assets/3.png");
  myImage4 = loadImage("./assets/4.png");
  myImage5 = loadImage("./assets/5.png");
  myImage6 = loadImage("./assets/6.png");
  myImage7 = loadImage("./assets/7.png");
  myImage8 = loadImage("./assets/8.png");
  myImage9 = loadImage("./assets/9.png");
  myImage10 = loadImage("./assets/10.png");
  myImage11 = loadImage("./assets/11.png");
  myImage12 = loadImage("./assets/12.png");
  myImage13 = loadImage("./assets/13.png");
  myImage14 = loadImage("./assets/14.png");
  myImage15 = loadImage("./assets/15.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);
  rectMode(CORNER);
  angleMode(DEGREES);

  frameRate(60);

  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
}

function draw() {
  background(255);

  let volume = map(mouseX, 0, width, 0, 2);
  volume = constrain(volume, 0, 1);
  mySong.amp(volume);
  mySong2.amp(volume);
  mySong3.amp(volume);
  mySong4.amp(volume);
  mySong5.amp(volume);
  mySong6.amp(volume);
  mySong7.amp(volume);
  mySong8.amp(volume);
  mySong9.amp(volume);

  //   let speed = map(mouseY, 0.7, height, 0, 2);
  //   speed = constrain(speed, 0.7, 1.5);
  //   mySong.rate(speed);

  textFont("Helvetica");
  textSize(20);
  fill(216, 69, 50);
  textAlign(CENTER);
  text(canzone, width / 2, height / 2);

  angle += 0.02;
  z++;

  let x = constrain(mouseX, 0, width);

  if (z > width) {
    z = z * -1;
  }
  for (let y = 0; y < height; y += height) {
    image(myImage1, sin(angle * 2) * x + width / 2, 100, 600, 40);
    image(myImage2, -sin(angle * 2.1) * x + width / 2, 140, 600, 40);
    image(myImage3, sin(angle * 2.5) * x + width / 2, 180, 600, 40);
    image(myImage4, -sin(angle * 1.6) * x + width / 2, 220, 600, 40);
    image(myImage5, sin(angle * 4) * x + width / 2, 260, 600, 40);
    image(myImage6, -sin(angle * 3.5) * x + width / 2, 300, 600, 40);
    image(myImage7, sin(angle * 1.7) * x + width / 2, 340, 600, 40);
    image(myImage8, -sin(angle * 2) * x + width / 2, 380, 600, 40);
    image(myImage9, sin(angle * 2.4) * x + width / 2, 420, 600, 40);
    image(myImage10, -sin(angle * 4.1) * x + width / 2, 460, 600, 40);
    image(myImage11, sin(angle * 2.3) * x + width / 2, 500, 600, 40);
    image(myImage12, -sin(angle * 2.6) * x + width / 2, 540, 600, 40);
    image(myImage13, sin(angle * 1.4) * x + width / 2, 580, 600, 40);
    image(myImage14, -sin(angle * 1.8) * x + width / 2, 620, 600, 40);
    image(myImage15, sin(angle * 2) * x + width / 2, 660, 600, 40);
    console.log(sin(angle));
  }

  textFont("Helvetica");
  textSize(40);
  fill(204, 180, 137);
  textAlign(RIGHT, TOP);
  text(author, 834, 30);

  textSize(40);
  fill(216, 69, 50);
  textAlign(RIGHT, TOP);
  text(title, 1025, 30);

  textFont("Garamond");
  textSize(12);
  fill(216, 69, 50);
  textAlign(LEFT);
  text(istruzioni, 10, 700);

  textFont("Garamond");
  textSize(15);
  fill(216, 69, 50);
  textAlign(LEFT);
  text(titoli, 600, 700);
}

function mousePressed() {
  if (key === "1") {
    canzone = "PERDUTO AMORE";
    if (mySong.isPlaying()) {
      mySong9.pause();
      mySong8.pause();
      mySong7.pause();
      mySong6.pause();
      mySong5.pause();
      mySong4.pause();
      mySong3.pause();
      mySong2.pause();
      mySong.pause();
    } else {
      mySong9.stop();
      mySong8.stop();
      mySong7.stop();
      mySong6.stop();
      mySong5.stop();
      mySong4.stop();
      mySong3.stop();
      mySong2.stop();
      mySong.play();
    }
  }

  if (key === "2") {
    canzone = "IMPRESSIONI DI SETTEMBRE";
    if (mySong2.isPlaying()) {
      mySong9.pause();
      mySong8.pause();
      mySong7.pause();
      mySong6.pause();
      mySong5.pause();
      mySong4.pause();
      mySong3.pause();
      mySong2.pause();
      mySong.pause();
    } else {
      mySong9.stop();
      mySong8.stop();
      mySong7.stop();
      mySong6.stop();
      mySong5.stop();
      mySong4.stop();
      mySong3.stop();
      mySong2.play();
      mySong.stop();
    }
  }

  if (key === "3") {
    canzone = "SE MAI";
    if (mySong3.isPlaying()) {
      mySong9.pause();
      mySong8.pause();
      mySong7.pause();
      mySong6.pause();
      mySong5.pause();
      mySong4.pause();
      mySong3.pause();
      mySong2.pause();
      mySong.pause();
    } else {
      mySong9.stop();
      mySong8.stop();
      mySong7.stop();
      mySong6.stop();
      mySong5.stop();
      mySong4.stop();
      mySong3.play();
      mySong2.stop();
      mySong.stop();
    }
  }

  if (key === "4") {
    canzone = "RITORNERAI";
    if (mySong4.isPlaying()) {
      mySong9.pause();
      mySong8.pause();
      mySong7.pause();
      mySong6.pause();
      mySong5.pause();
      mySong4.pause();
      mySong3.pause();
      mySong2.pause();
      mySong.pause();
    } else {
      mySong9.stop();
      mySong8.stop();
      mySong7.stop();
      mySong6.stop();
      mySong5.stop();
      mySong4.play();
      mySong3.stop();
      mySong2.stop();
      mySong.stop();
    }
  }

  if (key === "5") {
    canzone = "COL TEMPO SAI";
    if (mySong5.isPlaying()) {
      mySong9.pause();
      mySong8.pause();
      mySong7.pause();
      mySong6.pause();
      mySong5.pause();
      mySong4.pause();
      mySong3.pause();
      mySong2.pause();
      mySong.pause();
    } else {
      mySong9.stop();
      mySong8.stop();
      mySong7.stop();
      mySong6.stop();
      mySong5.play();
      mySong4.stop();
      mySong3.stop();
      mySong2.stop();
      mySong.stop();
    }
  }

  if (key === "6") {
    canzone = "INSIEME A TE NON CI STO PIU'";
    if (mySong6.isPlaying()) {
      mySong9.pause();
      mySong8.pause();
      mySong7.pause();
      mySong6.pause();
      mySong5.pause();
      mySong4.pause();
      mySong3.pause();
      mySong2.pause();
      mySong.pause();
    } else {
      mySong9.stop();
      mySong8.stop();
      mySong7.stop();
      mySong6.play();
      mySong5.stop();
      mySong4.stop();
      mySong3.stop();
      mySong2.stop();
      mySong.stop();
    }
  }

  if (key === "7") {
    canzone = "IL CIELO IN UNA STANZA";
    if (mySong7.isPlaying()) {
      mySong9.pause();
      mySong8.pause();
      mySong7.pause();
      mySong6.pause();
      mySong5.pause();
      mySong4.pause();
      mySong3.pause();
      mySong2.pause();
      mySong.pause();
    } else {
      mySong9.stop();
      mySong8.stop();
      mySong7.play();
      mySong6.stop();
      mySong5.stop();
      mySong4.stop();
      mySong3.stop();
      mySong2.stop();
      mySong.stop();
    }
  }

  if (key === "8") {
    canzone = "LE TUE RADICI";
    if (mySong8.isPlaying()) {
      mySong9.pause();
      mySong8.pause();
      mySong7.pause();
      mySong6.pause();
      mySong5.pause();
      mySong4.pause();
      mySong3.pause();
      mySong2.pause();
      mySong.pause();
    } else {
      mySong9.stop();
      mySong8.play();
      mySong7.stop();
      mySong6.stop();
      mySong5.stop();
      mySong4.stop();
      mySong3.stop();
      mySong2.stop();
      mySong.stop();
    }
  }

  if (key === "9") {
    canzone = "SE TU SAPESSI";
    if (mySong9.isPlaying()) {
      mySong9.pause();
      mySong8.pause();
      mySong7.pause();
      mySong6.pause();
      mySong5.pause();
      mySong4.pause();
      mySong3.pause();
      mySong2.pause();
      mySong.pause();
    } else {
      mySong9.play();
      mySong8.stop();
      mySong7.stop();
      mySong6.stop();
      mySong5.stop();
      mySong4.stop();
      mySong3.stop();
      mySong2.stop();
      mySong.stop();
    }
  }
}
