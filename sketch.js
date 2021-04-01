function setup() {
  createCanvas(700,600);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  hr = hour();
  mn = minute();
  sc = second();
  textSize(50);
  if(hr>11)
  {
    tx="pm";
  }
  else
  {
    tx="am";
  }

  text(hr%12+":"+mn+":"+sc+" "+tx,220,550);

    /*fill("white");
    text("12", 325,120);

    noStroke();
    fill("white");
    text("3", 480,255);

    noStroke();
    fill("white");
    text("9", 190,255);

    noStroke();
    fill("white");
    text("6", 330,400);
    */
     
    translate(350,250);
    rotate(-90);

    noFill();
    scAngle = map(sc, 0, 60, 0, 360);
    strokeWeight(8);
    stroke(154, 234, 101);
    mnAngle = map(mn,0,60,0,360);
    strokeWeight(8);
    stroke(137, 96, 253);
    hrAngle = map(hr % 12,0,12,0,360);
 
    push();
    rotate(scAngle); 
    stroke(255,0,0);
    strokeWeight(5);
    line(0,0,150,0);
    pop()


    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(7.5);
    line(0,0,115,0);
    pop();

    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(10);
    line(0,0,75,0);
    pop();

    strokeWeight(5);
    noFill();
    //Seconds
    stroke(255,0,0);
    arc(0,0,400,400,0,scAngle);
    //Minutes
    strokeWeight(7.5);
    stroke(0,255,0);
    arc(0,0,370,370,0,mnAngle);
    //Hour
    strokeWeight(10);
    stroke(0,0,255);
    arc(0,0,340,340,0,hrAngle);

 


    drawSprites();
}