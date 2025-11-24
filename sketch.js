function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('#A0D7FF7F');
  

  
  stroke('#1A1A1B') // 검정 레인줄
  strokeWeight(3)
  line(150,0,150,400)
  line(310,0,310,400)
  line(480,0,480,400)
  
  stroke('#F44336') // 첫 번째 빨간 레인줄
  strokeWeight(8)
  line(150,10,150,50)
  line(150,100,150,150)
  line(150,200,150,250)
  line(150,300,150,350)
  line(150,390,150,450)

  
   // 두번째 레인 빨간색 입힌 것
  line(310,10,310,50)
  line(310,100,310,150)
  line(310,200,310,250)
  line(310,300,310,350)
  
  
   // 세번째 레인 빨간색 입힌 것
  line(480,10,480,50)
  line(480,100,480,150)
  line(480,200,480,250)
  line(480,300,480,350)
  
  
  
  fill('#3D3330')
  noStroke()
  ellipse(280,240,110,110) // 뒷 똥머리
  
  
  stroke('#1A1A1B')
  strokeWeight(1)
  fill('#FCEA4A')
  strokeWeight(1)
  ellipse(350,70,290,300) // 수영모
  
  fill('#4ECD53')
  ellipse(220,100,5,5) // 수영모 무늬 동그라미
  ellipse(220,100,10,35)
  ellipse(220,100,20,15)
  ellipse(245,50,10,35)
  ellipse(245,50,20,15)
  ellipse(280,20,10,35)
  ellipse(280,20,20,15)
  
  
  ellipse(430,20,10,35) // 오른쪽 상단 무늬
  ellipse(430,20,20,15)
  
  ellipse(460,50,10,35)
  ellipse(460,50,20,15) // 오른쪽 중앙 무늬
  
  ellipse(480,100,10,35)
  ellipse(480,100,20,15) // 오늘쪽 하단 무늬
  
  
  noStroke()
  fill('#F7F2DA')
  ellipse(350,400,290,200) // 몸통
  rect(330,280,50,60) // 목
  
  fill('#EAE5CC')
  ellipse(355,280,50,35) // 목 그림자
  
  
  fill('#FEFEE1')
  noStroke()
  ellipse(350,150,230,270) //얼굴
  ellipse(465,150,40,45) // 귀 오
  ellipse(235,150,40,45) //귀 왼
  
  
  fill('#2C2827') // 속눈썹
  stroke('#262526')
  strokeWeight(2)
  line(280,80,295,90) // 왼쪽
  line(270,90,285,100)
  line(403,90,406,80) // 오른쪽
  line(425,95,435,82)
  line(440,103,450,92)
  
  strokeWeight(3)
  noFill() // 눈썹
  arc(300, 85, 70, 30, radians(180), radians(0) );
  arc(405, 85, 70, 30, radians(180), radians(0) );
  

  noStroke()
  fill('#060606')
  ellipse(305,120,80,70) // 눈 밖 아이라이너
  ellipse(405,120,80,70)
  
  
  fill('#FFFFFF')
  ellipse(300,125,80,70) // 눈 가장 밖 하얀자
  ellipse(400,125,80,70)
  
  fill('#060606')
  ellipse(300,125,50,50) // 눈 검정동자
  ellipse(400,125,50,50)
  
  fill('#654337')
  ellipse(300,125,30,40) // 눈 갈색동자
  ellipse(400,125,30,40)
  

  fill('#FFFFFF')
  ellipse(300,125,10,10) // 눈 제일 안 흰색
  ellipse(400,125,10,10)
  
  
  
  fill('#5598B6')
  stroke('#3577AC')
  strokeWeight(2)
  rect(219,125,17,10) // 안경 줄
  rect(345,125,9,10)
  rect(465,125,18,10)
  fill('#5598B672')
  strokeWeight(5)
  ellipse(290,125,110,90) // 안경 눈알
  ellipse(410,125,110,90)
  

  
  stroke(0)
  strokeWeight(3)
  noFill();
  arc(350, 19, 60, 70, 0, HALF_PI); // 앞머리 오
  arc(340, 18, 60, 70, 0, HALF_PI); // 앞머리 중간
  arc(330, 17, 60, 70, 0, HALF_PI); // 앞머리 왼
  
  
  
  
  
  arc(335, 160, 30, 50, 0, HALF_PI); // 코

  fill('#7E384F')////////입
  arc(352, 210, 90, 90, radians(10), radians(190) );
  stroke('#1A1A1B')
  strokeWeight(3)
  line(308,202,397,217)

  stroke('#000000')
  strokeWeight(3)/////
  fill('#D63269')
  ellipse(350,238,60,30)
  
  
  
  
  stroke('#747373') //// 귀걸이
  fill('#E6E4E4')
  strokeWeight(2)
  ellipse(470,170,10,10)
  ellipse(230,170,10,10)
  
  noFill()          //// 목걸이
  stroke('#F9D774')
  arc(355, 302, 53, 80, radians(0), radians(180) );

  
  
  
  
  noStroke()
  stroke('#000000')////////////////////////////코 아래 
  noFill()
  line(335,185,360,180)
  
  
  noStroke()
  fill('#F86E9D7F')
  ellipse(270,190,50,30) // 볼터치
  ellipse(430,190,50,30)
  fill('#BEB9BB7F')
  ellipse(227,150,15,22)// 귀 속 음영
  ellipse(473,150,15,22)
  
  

  fill('#EAE5CC')
  ellipse(445,395,30,90) // 몸통 그림자
  
  
  fill('#FB578F') // 수영복
  ellipse(265,333,10,30)
  ellipse(445,339,10,30)
  
  rect(260,330,10,60)//끈
  rect(440,335,10,60)//끈
  rect(260,340,190,80)//몸통
  
  fill('#F9C1D5')
  triangle(260,400,300,400,280,340) //수영복 패턴
  triangle(310,400,350,400,330,340)
  triangle(360,400,400,400,380,340)
  triangle(410,400,450,400,430,340)
  
  
  

  
}