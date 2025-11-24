////제어용 변수
let offsetX = 0;
let offsetY = 0;

//// 볼터치 색상
let cheekColor = '#F86E9D7F';

////눈 깜박임
let blink = 1;
let blinkSpeed = 0.05;
let blinking = false;
let browMove = 0; // 눈썹도 움직이게

////앞머리 좌우이동
let hairOffset = 0;
let hairDir = 1;

////수경 이동
let gogglesY;
let gogglesTopY = 85;
let gogglesBottomY = 125;
let gogglesMoving = false;
let gogglesDown = true;
let gogglesDir = 1; // 1: 내려감, -1: 올라감

function setup() {
  createCanvas(600, 400);
  gogglesY = gogglesBottomY;
}

////배경색상의 변화주기
function draw() {
  background('#A0D7FF7F');
  let bgColor = color((frameCount/2) % 255, 200, 255, 120);
background(bgColor);
  
  fill('#FF4B6E');
  noStroke();
  ellipse(mouseX, mouseY, 15, 15);

  
  stroke('#1A1A1B'); strokeWeight(3);
  line(150,0,150,400);
  line(310,0,310,400);
  line(480,0,480,400);

  stroke('#F44336'); strokeWeight(8);
  // 첫 번째 레인
  line(150,10,150,50);
  line(150,100,150,150);
  line(150,200,150,250);
  line(150,300,150,350);
  line(150,390,150,450);

  // 두 번째 레인
  line(310,10,310,50);
  line(310,100,310,150);
  line(310,200,310,250);
  line(310,300,310,350);

  // 세 번째 레인
  line(480,10,480,50);
  line(480,100,480,150);
  line(480,200,480,250);
  line(480,300,480,350);

  
  ////인물 이동

  push();
  translate(offsetX, offsetY);

 ////눈 깜박임과 눈썹

if (!blinking && frameCount % 200 === 0) {
  blinking = true;
}

// 깜박이는 동안(눈 감았다 열기)
if (blinking) {
  blink = blink - blinkSpeed;

  browMove = (1 - blink) * 5; //// 눈썹의 이동

  if (blink <= 0) {
    blinkSpeed = -blinkSpeed;  //// 눈 방향의 전환
  }

  //// 깜박임 종료
  if (blink >= 1) {
    blink = 1;                // 고정
    blinkSpeed = Math.abs(blinkSpeed); 
    blinking = false;         // 깜박임 끝
    browMove = 0;             //  위치로 복귀
  }
}

  ////앞머리 좌우로
  hairOffset += 0.04 * hairDir;
  if (hairOffset > 1.2 || hairOffset < -0.7) hairDir *= -1;

  ////수경 이동 ===
if (gogglesMoving) {

  ////수경 위아래 움직임
  gogglesY = gogglesY + gogglesDir * 2;

  //// 수경 눈 위치에 도착
  if (gogglesDir === 1 && gogglesY >= gogglesBottomY) {
    gogglesY = gogglesBottomY;     // 위치 고정
    gogglesMoving = false;         // 이동 멈춤
    gogglesDown = true;           
  }

  //// 수경 이미에 위치함
  if (gogglesDir === -1 && gogglesY <= gogglesTopY) {
    gogglesY = gogglesTopY;        // 위치 고정
    gogglesMoving = false;         // 이동 멈춤
    gogglesDown = false;           
  }
}

  //// 마우스로 눈 위치 이동
  let moveX = (mouseX - width / 2) / 100;   
  let moveY = (mouseY - height / 2) / 100;  

  ////캐릭터
  noStroke();
  fill('#3D3330')
  ellipse(280,240,110,110); // 뒷머리
  
  stroke('#1A1A1B');
  strokeWeight(1);
  fill('#FCEA4A');
  ellipse(350,70,290,300); // 수영모
  
  fill('#4ECD53');
  ellipse(220,100,5,5);
  ellipse(220,100,10,35);
  ellipse(220,100,20,15);
  ellipse(245,50,10,35);
  ellipse(245,50,20,15);
  ellipse(280,20,10,35);
  ellipse(280,20,20,15);
  ellipse(430,20,10,35);
  ellipse(430,20,20,15);
  ellipse(460,50,10,35);
  ellipse(460,50,20,15);
  ellipse(480,100,10,35);
  ellipse(480,100,20,15);  //// 수영모의 패턴
  
  noStroke();
  fill('#F7F2DA');
  ellipse(350,400,290,200); //몸통
  rect(330,280,50,60); //목
  
  fill('#EAE5CC');
  ellipse(355,280,50,35);  // 목 그림자
  
  fill('#FEFEE1');
  noStroke();
  ellipse(350,150,230,270); //얼굴
  ellipse(465,150,40,45);  // 귀 오
  ellipse(235,150,40,45);  //귀 왼

  // 눈썹
  fill('#2C2827');
  stroke('#262526');
  strokeWeight(2);
  line(280,80+browMove,295,90+browMove);
  line(270,90+browMove,285,100+browMove);
  line(403,90+browMove,406,80+browMove);
  line(425,95+browMove,435,82+browMove);
  line(440,103+browMove,450,92+browMove);

  strokeWeight(3);
  noFill();  // 눈썹
  arc(300, 85+browMove, 70, 30, radians(180), radians(0));
  arc(405, 85+browMove, 70, 30, radians(180), radians(0));

  noStroke();
  fill('#060606');
  ellipse(305,120,80,70*blink);  //눈 가장 밖
  ellipse(405,120,80,70*blink);
  fill('#FFFFFF');  // 눈 큰 흰자
  ellipse(300,125,80,70*blink);
  ellipse(400,125,80,70*blink);
  fill('#060606'); // 눈 속 검정동자
  ellipse(300,125,50,50*blink);
  ellipse(400,125,50,50*blink);
  fill('#654337'); /// 눈 갈색동자
  ellipse(300,125,30,40*blink);
  ellipse(400,125,30,40*blink);

  fill('#FFFFFF'); //눈 가장 안 흰동자 마우스 이동에 따른 움직임 줌
  ellipse(300 + moveX, 125 + moveY, 10, 10 * blink);
  ellipse(400 + moveX, 125 + moveY, 10, 10 * blink);
  
  fill('#5598B6');
  stroke('#3577AC');
  strokeWeight(2);
  rect(219,gogglesY,17,10); // 안경 줄
  rect(345,gogglesY,9,10);
  rect(465,gogglesY,18,10);
  fill('#5598B672');
  strokeWeight(5); /// 안경알
  ellipse(290,gogglesY,110,90);
  ellipse(410,gogglesY,110,90);

  stroke(0);
  strokeWeight(3);
  noFill();
  arc(350+hairOffset,19,60,70,0,HALF_PI);  //앞머리 오
  arc(340+hairOffset,18,60,70,0,HALF_PI);   /// 앞머리 중간
  arc(330+hairOffset,17,60,70,0,HALF_PI);  ///앞머리 왼

  arc(335,160,30,50,0,HALF_PI);
  // 코
  
  ////입
  fill('#7E384F');      arc(352,210,90,90,radians(10),radians(190));
  stroke('#1A1A1B');
  strokeWeight(3);
  line(308,202,397,217);
  stroke(0);
  strokeWeight(3);
  fill('#D63269');
  ellipse(350,238,60,30);

  
  ///귀걸이
  stroke('#747373');
  fill('#E6E4E4');
  strokeWeight(2);
  ellipse(470,170,10,10);
  ellipse(230,170,10,10);

  
  ///목걸이
  noFill();
  stroke('#F9D774');
  arc(355,302,53,80,radians(0),radians(180));

  
  //코 아래
  noStroke();
  stroke(0);
  noFill();
  line(335,185,360,180);
  
  noStroke();
  fill(cheekColor);
  ellipse(270,190,50,30);
  ellipse(430,190,50,30);
  fill('#BEB9BB7F');
  ellipse(227,150,15,22);
  ellipse(473,150,15,22);
  //귀 음영
  
  
  //몸통 그림자
  fill('#EAE5CC');
  ellipse(445,395,30,90);

  
  //수영복
  fill('#FB578F');
  ellipse(265,333,10,30);
  ellipse(445,339,10,30);
  rect(260,330,10,60);
  rect(440,335,10,60);
  rect(260,340,190,80);

  
  //수영복 패턴
  fill('#F9C1D5');
  triangle(260,400,300,400,280,340);
  triangle(310,400,350,400,330,340);
  triangle(360,400,400,400,380,340);
  triangle(410,400,450,400,430,340);
  

  pop(); // 캐릭터 이동 종료


}


// 마우스로 수경 이동, 볼터치 색 변경
function mousePressed() {
  // 볼터치 색 바꾸기
  if (cheekColor === '#F86E9D7F') {
    cheekColor = '#D24C7A';
  } else {
    cheekColor = '#F86E9D7F';
  }

  // 수경 이동
  if (!gogglesMoving) {
    gogglesDir = gogglesDown ? -1 : 1;
    gogglesMoving = true;
  }
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}

/// 키보드로 캐릭터만 이동주기

function keyPressed() {
  if (keyCode === LEFT_ARROW) offsetX -= 10;
  else if (keyCode === RIGHT_ARROW) offsetX += 10;
  else if (keyCode === UP_ARROW) offsetY -= 10;
  else if (keyCode === DOWN_ARROW) offsetY += 10;
  
  // 's' 키를 누르면 gif 저장
  if (key === 's' || key === 'S') {
    saveGif('mySketch', 10);
  }
}

