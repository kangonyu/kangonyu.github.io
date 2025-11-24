let dayColor;
let nightColor;
let transitionDuration = 900;
// 보트 위치
let boatX = 0; 


function setup(){
  createCanvas(600,400)
  noStroke();
  background('#0A1658') // 바다 색상
  colorMode(RGB);

}

function draw(){
  background('#0A1658');
  noStroke()
  dayColor = color(100, 150, 255); // 낮 색상
  nightColor = color('#1E2E7F'); // 밤 색상
  let amount = map(frameCount, 0, transitionDuration, 0.0, 1.0);
  amount = constrain(amount, 0.0, 1.0);

  let newBgColor = lerpColor(dayColor, nightColor, amount);
  
  // 배경
  noStroke();
  fill(newBgColor);
  rect(0, 0, 600, 300);
  
  
  
  let time = frameCount * 0.05; // 속도
  let sizeVariationRange = 1.5;
  
  
  //// 별 그리기
  fill(255);     

  ellipse(3, 3, 3, 3);
  ellipse(8, 30, 3, 3);
  ellipse(10, 20, 2, 2);
  ellipse(20, 3, 2, 2);
  ellipse(90, 40, 5, 5);
  ellipse(20, 40, 5, 5);
  ellipse(300, 40, 5, 5);
  ellipse(70, 50, 5, 5);
  ellipse(20, 25, 5, 5);
  ellipse(30, 10, 5, 5);
  ellipse(45, 50, 5, 5);
  ellipse(80, 10, 4, 4);
  ellipse(100, 25, 5, 5);
  ellipse(110, 10, 3, 3);
  ellipse(120, 15, 4, 4);
  ellipse(130, 50, 5, 5);
  ellipse(230, 50, 5, 5);
  ellipse(430, 50, 5, 5);
  ellipse(360, 50, 5, 5);
  ellipse(140, 15, 5, 5);
  ellipse(150, 5, 5, 5);
  ellipse(160, 10, 5, 5);
  ellipse(170, 5, 4, 4);
  ellipse(180, 15, 5, 5);
  ellipse(200, 3, 5, 5);
  ellipse(90, 25, 3, 3);
  ellipse(40, 25, 3, 3);          
  ellipse(70, 25, 3, 3);
  ellipse(60, 15, 3, 3);
  ellipse(90, 25, 3, 3);
  ellipse(100, 25, 3, 3);
  ellipse(150, 25, 3, 3);
  ellipse(190, 25, 3, 3);
  ellipse(220, 25, 3, 3);
  ellipse(250, 25, 3, 3);
  ellipse(270, 25, 3, 3);
  ellipse(290, 25, 3, 3);
  ellipse(210, 10, 3, 3);
  ellipse(230, 14, 3, 3);
  ellipse(240, 10, 3, 3);
  ellipse(280, 8, 3, 3);
  ellipse(300, 8, 3, 3);
  ellipse(305, 20, 3, 3);
  ellipse(310, 8, 3, 3);
  ellipse(330, 8, 4, 4);
  ellipse(340, 14, 3, 3);
  ellipse(355, 8, 3, 3);
  ellipse(365, 15, 4, 4);
  ellipse(400, 8, 3, 3);
  ellipse(450, 8, 3, 3);
  ellipse(500, 20, 3, 3);
  ellipse(520, 8, 3, 3);
  ellipse(535, 8, 4, 4);
  ellipse(550, 14, 3, 3);
  ellipse(575, 8, 3, 3);
  ellipse(600, 15, 4, 4);
  ellipse(540, 14, 3, 3);
  ellipse(440, 14, 5, 5);
  ellipse(480, 8, 5, 5);
  ellipse(550, 30, 2, 2);
  ellipse(500, 30, 5, 5);
  ellipse(470, 25, 4, 4);
  ellipse(420, 30, 3, 3);
  

  
  // 별똥별 1
  let shootingStarSpeed1 = 5;
  let tailLength1 = 20;
  let starTime1 = (frameCount * shootingStarSpeed1) % 800; 

  let startX1 = 700 - starTime1 * 1.5;
  let startY1 = -100 + starTime1 * 0.5;

  let angle1 = radians(45);
  let endX1 = startX1 - tailLength1 * cos(angle1);
  let endY1 = startY1 + tailLength1 * sin(angle1);

  stroke(255);
  strokeWeight(2);
  line(startX1, startY1, endX1, endY1);


  //별똥별 2
  let shootingStarSpeed2 = 5;
  let tailLength2 = 20;

  let starTime2 = ((frameCount + 200) * shootingStarSpeed2) % 800; 

  let startX2 = 650 - starTime2 * 1.5; 
  let startY2 = -50 + starTime2 * 0.5;

  let angle2 = radians(45);
  let endX2 = startX2 - tailLength2 * cos(angle2);
  let endY2 = startY2 + tailLength2 * sin(angle2);

  stroke(255);
  strokeWeight(2);
  line(startX2, startY2, endX2, endY2);

  //별똥별 3
  let shootingStarSpeed3 = 5;
  let tailLength3 = 20;

  let starTime3 = ((frameCount + 400) * shootingStarSpeed3) % 800; 

  let startX3 = 1000 - starTime3 * 1.5;
  let startY3 = -150 + starTime3 * 0.5;

  let angle3 = radians(45);
  let endX3 = startX3 - tailLength3 * cos(angle3);
  let endY3 = startY3 + tailLength3 * sin(angle3);

  stroke(255);
  strokeWeight(2);
  line(startX3, startY3, endX3, endY3);
  

  // 보트 위치를 마우스 X 좌표로 설정 (마우스 인터랙션)
  boatX = mouseX;
  
  push();
  translate(boatX, 0); //위치 이동 

  // 보트
  noStroke();
  fill('#FFFFFF')
  rect(0,250,100,50)
  fill('#C0C0C0')
  rect(0,270,150,30)
  
  stroke(255)
  fill('#9B0D0D')
  strokeWeight(2)
  line(20,250,20,200)
  triangle(20,110,20,239,70,239)
  
  
  stroke('#0080FF') //보트유리
  strokeWeight(2)
  fill('#CCFFFF')
  rect(10,255,10,10)
  rect(30,255,10,10)
  rect(50,255,10,10)
  rect(70,255,10,10)
  
  pop(); // 보트 애니메이션 끝
  
  

//물고기 1
  let sizeScale1 = map(sin(frameCount * 0.04), -1, 1, 0.9, 1.1);

  push();
  translate(328, 200); 
  scale(sizeScale1); 
  translate(-328, -200);
  
  noStroke()
  fill('#FFC0FF')
  arc(328, 200, 200, 70, radians(45), radians(270 + 45));
  triangle(190,150,190,250,230,200)
  fill(0)
  ellipse(310,180,10,10)
  fill('#D171D1')
  triangle(195,170,195,230,220,200)
  
  pop(); // 종료
  
// 물고기 2,3
  let colorAmount1 = (sin(frameCount * 0.08) + 1) / 2;
  let colorAmount2 = (sin(frameCount * 0.06 + 1.5) + 1) / 2; 

  let startColor1 = color('#FFE0FF'); // 원래 색
  let endColor1 = color(100, 200, 255); 

  let startColor2 = color('#FFCCE5'); // 원래 색
  let endColor2 = color(200, 150, 255); 

  let newFishColor2 = lerpColor(startColor1, endColor1, colorAmount1);
  let newFishColor3 = lerpColor(startColor2, endColor2, colorAmount2);

// 물고기 2
noStroke();
fill(newFishColor2)
  arc(150, 350, 100, 50, radians(45), radians(270 + 45));
 triangle(75,320,75,370,100,345);
  fill(0)
  ellipse(140,345,6,6)
  
// 물고기 3
fill(newFishColor3)
  arc(340, 320, 100, 50, radians(45), radians(270 + 45));
  triangle(250,295,250,345,300,320);
  fill(0)
  ellipse(330,310,6,6)
  

  
  fill('#663300')
  rect(550,100,60,300)
  fill('#804000')
  rect(570,100,60,300)
  fill('#994C00')
  rect(590,100,60,300)
  
  fill('#3C5E6E')
  ellipse(590,400,300,300)
  
  
  fill('#80C080')
  ellipse(500,100,100,50)
  ellipse(520,70,100,50)
  ellipse(550,120,100,50)
  ellipse(590,80,100,50)
  ellipse(600,50,100,50)
  ellipse(590,120,100,50)
  
  stroke(0)
  strokeWeight(1)
  fill('#C2E2E2')
  ellipse(480,270,20,30)
  ellipse(470,280,20,30)
  fill('#B4B4C7')
  ellipse(510,270,50,30)
  ellipse(500,280,50,30)
  
  fill('#FFFFE5');
  circle(500,240,10)
  fill(0)
  triangle(500,240,515,230,515,250)
  
  fill('#80C0FF')
  rect(530,220,10,20);
  ellipse(530,250,40,60)
    fill('#FFFFE5');
  circle(530,200,50);

  fill(0);
  ellipse(520,200,5);
  triangle(530,240,515,260,540,260);
  fill('#FFFFE5');
  circle(515,260,10)

  
  noStroke()
  fill('#FFFFA0')
  ellipse(530,185,70,10);
  ellipse('#FFFFC0');
  rect(504,165,55,20);

  
  fill('#FF3333')
  ellipse(500,100,30,20)
  ellipse(580,60,40,30)
  ellipse(550,130,30,20)
  
  stroke(0);
  strokeWeight(1);
  line(500, 85, 500, 95);
  line(580, 40, 580, 53);
  line(550, 115, 550, 130);
  

  line(540,290,510,320);
  line(540,290,570,320);
  line(570,320,600,290);
  
  line(450,380,480,350);
  line(480,350,510,380);
  line(510,380,540,350);
  line(540,350,570,380);
  line(570,380,600,350);
  
  stroke(225)
  strokeWeight(3)
  line(510,260,480,230);
  line(480,230,330,200);

  
  stroke('#FF8080')
    fill('#FFC0C0')
  ellipse(535,210,20,10);
  
  stroke(0)
  strokeWeight(3)
  line(290,180,320,160)
  
  

  stroke(0)
  strokeWeight(1)
    noFill();
  arc(512, 208, 20, 20, 0, HALF_PI);
}
  
function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 10);
  }
}