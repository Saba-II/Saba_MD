// Creating variables
var myX = 10, myY = 480,updates=0;
var miX = 0, miY=673;
var distance = randomInteger(2000);
var distance2 = randomInteger(2000);
var distance3 = randomInteger(2000);
var distance4 = randomInteger(2000);
var distance5 = randomInteger(2000);
var distance6 = randomInteger(2000);
var distanceB = randomInteger(2000);
var distanceB1 = randomInteger(2000);
var red1=1920+distance, red2=650;
var red3=1920+distance2, red4=650;
var red5=1920+distance5, red6=650;
var blue1=1920+distance3, blue2=170;
var blue3=1920+distance4, blue4=170;
var blue5=1920+distance6, blue6=170;
var c1=0, c2=0, c3=0, c4=0, c5=0, c6=0;
var b1=5000+distanceB, b2=215;
var b3=5500+distanceB1, b4=695;
var score=0;
var speed1=1;
var speed2=1;
var life=3;
var back=1;
var limit=10;
var level=1;
var space=2;
var bonus1=0;
var bonus2=0;
var score1=0;
var score2=0;
var plus=0;
var m1=0, m2=0, m3=0, m4=0, m5=0, m6=0;
let name = prompt("What's your name?")
alert("Hello "+name+", you have to catch the more bonnus you can before losing your three life! if you have 75 point you can pass to the next level!")
alert("There is some pills ho give you bonus the red one is making lower the speed.");
alert("The blue one is giving you one more life.");
alert("but ho say bonus say malus so be carefull.");
function update() {
    red1 = red1-speed1;
    red3 = red3-speed1;
    blue1 = blue1-speed2;
    blue3 = blue3-speed2;
    if (plus == 1) {
    blue5=blue5-speed2;
    red5= red5-speed1;
    };
    b1=b1-1;
    b3=b3-1;
    distance = randomInteger(2000);
    distance2 = randomInteger(2000);
    distance3 = randomInteger(2000);
    distance4 = randomInteger(2000);
    distance5 = randomInteger(2000);
    distance6 = randomInteger(2000);
    if (speed1 > limit) {
        speed1 = limit;
    };
    if (speed2 > limit) {
        speed2 = limit;
    };
    if (blue1 <= 0) {
        blue1 = distance+1920;
        speed2 = speed2+1;
        life = life-1;
        console.log("dead");
        m1=1;
        if (c1==0 && m1==1) {
            blue2 = 650;
            c1=1;
            m1=0;
        };
        if (c1==1 && m1==1) {
            blue2=170;
            c1=0;
            m1=0;
        };
    };
    if (blue3 <= 0) {
        blue3 = distance2+1920;
        speed2 = speed2+1;
        life = life-1;
        console.log("dead");
        m2=1;
        if (c2==0 && m2==1) {
            blue4 = 650;
            c2=1;
            m2=0;
        };
        if (c2==1 && m2==1) {
            blue4=170;
            c2=0;
            m2=0;
        };
    };
    if (bonus1 == 1) {
        speed1=2;
        speed2=2;
        bonus1=0;
    };
    if (bonus2 == 1) {
        life=life+1;
        bonus2=0;
    };
    if (red1 <= 0) {
        red1 = distance3+1920;
        speed1 = speed1+1;
        life = life-1;
        console.log("dead");
        m3=1;
        if (c3==0 && m3==1) {
            red2 = 650;
            c3=1;
            m3=0;
        };
        if (c3==1 && m3==1) {
            red2=170;
            c3=0;
            m3=0;
        };
    };
    if (red5 <= 0) {
        red5 = distance4+1920;
        speed1 = speed1+1;
        life = life-1;
        console.log("dead");
        m4=1;
        if (c4==0 && m4==1) {
            red6 = 650;
            c4=1;
            m4=0;
        };
        if (41==1 && m4==1) {
            red6=170;
            c4=0;
            m4=0;
        };
    };
    if (blue5 <= 0) {
        blue5 = distance5+1920;
        speed2 = speed2+1;
        life = life-1;
        console.log("dead");
        m5=1;
        if (c5==0 && m5==1) {
            blue6 = 650;
            c5=1;
            m5=0;
        };
        if (c5==1 && m5==1) {
            blue6=170;
            c5=0;
            m5=0;
        };
    };
    if (red3 <= 0) {
        red3 = distance6+1920;
        speed1 = speed1+1;
        life = life-1;
        console.log("dead");
        m6=1;
        if (c6==0 && m6==1) {
            red4 = 650;
            c6=1;
            m6=0;
        };
        if (c6==1 && m6==1) {
            red4=170;
            c6=0;
            m6=0;
        };
    };
    if (areColliding(myX,myY,200,480, red1,red2,140,140)) {
        red1 = distance3+1920;
        score=score+1;
        speed1 = speed1+1;
        console.log(score);
        m3=1;
        if (c3==0 && m3==1) {
            red2 = 650;
            c3=1;
            m3=0;
        };
        if (c3==1 && m3==1) {
            red2=170;
            c3=0;
            m3=0;
        };
    };
    if (areColliding(myX,myY,200,480, blue1,blue2,140,140)) {
        blue1 = distance+1920;
        score=score+1;
        speed2 = speed2+1;
        console.log(score);
        m1=1;
        if (c1==0 && m1==1) {
            blue2 = 650;
            c1=1;
            m1=0;
        };
        if (c1==1 && m1==1) {
            blue2=170;
            c1=0;
            m1=0;
        };
    };
    if (areColliding(myX,myY,200,480, red3,red4,140,140)) {
        red3 = distance6+1920;
        score=score+1;
        speed1 = speed1+1;
        console.log(score);
        m6=1;
        if (c6==0 && m6==1) {
            red4 = 650;
            c6=1;
            m6=0;
        };
        if (c6==1 && m6==1) {
            red4=170;
            c6=0;
            m6=0;
        };
    };
    if (areColliding(myX,myY,200,480, blue3,blue4,140,140)) {
        blue3 = distance2+1920;
        score=score+1;
        speed2 = speed2+1;
        console.log(score);
        m2=1;
        if (c2==0 && m2==1) {
            blue4 = 650;
            c2=1;
            m2=0;
        };
        if (c2==1 && m2==1) {
            blue4=170;
            c2=0;
            m2=0;
        };
    };
    if (areColliding(myX,myY,200,480, blue5,blue6,140,140)) {
        blue5 = distance5+1920;
        score=score+1;
        speed2=speed2+1;
        console.log(score);
        m5=1;
        if (c5==0 && m5==1) {
            blue6 = 650;
            c5=1;
            m5=0;
        };
        if (c5==1 && m5==1) {
            blue6=170;
            c5=0;
            m5=0;
        };

    };
    if (areColliding(myX,myY,200,480, red5,red6,140,140)) {
        red5 = distance4+1920;
        score=score+1;
        speed1 = speed1+1;
        console.log(score);
        m4=1;
        if (c4==0 && m4==1) {
            red6 = 650;
            c4=1;
            m4=0;
        };
        if (41==1 && m4==1) {
            red6=170;
            c4=0;
            m4=0;
        };
    };
    if (areColliding(myX,myY,200,480, b1,b2,50,50)) {
        bonus1=1;
        distanceB=randomInteger(2000);
        b1=5000+distanceB;
    };
    if (areColliding(myX,myY,200,480, b3,b4,50,50)) {
        bonus2=1;
        distanceB1=randomInteger(2000);
        b3=5000+distanceB1;
    };
    if (life <= 0 && level == 1) {
        alert("You lose all your life "+name+"!");
        alert("You have "+score+"point!");
    if (score >= 75) {
        var reponse1 = prompt("Say GO to continue to level 2:");
    }else {
        score=score1+score2;
        alert("Presse ctrl+r or f5 to restart. You have "+score+"points.");
    };
    if (reponse1 == "GO") {
        score1=score;
        back = 2;
        life = 5;
        limit = 15;
        speed1 = 1;
        speed2 = 1;
        level = 2;
        red1=2120;
        red3=2520;
        blue1=1920;
        blue3=2320;
        score=0;
        plus=1;
        red1=1920+distance, red2=650;
        red3=1920+distance2, red4=650;
        red5=1920+distance5, red6=650;
        blue1=1920+distance3, blue2=170;
        blue3=1920+distance4, blue4=170;
        blue5=1920+distance6, blue6=170;
        b1=5000+distanceB, b2=215;
        b3=5500+distanceB1, b4=695;
        alert("Welcome to the level 2 "+name+" now you have 5 life but you need 125 more points to complete this level!!")
    }else {
        score=score1+score2;
        alert("Presse ctrl+r or f5 to restart. You have "+score+" points.");
    };
    };
    if (life <= 0 && level == 2) {
        alert("You lose all your life"+name+"!");
        alert("You have "+score+"point!");
    if(score >= 125){
        var reponse2 = prompt("Say GO to continue to level 2:");
    }else {
        score= score1+score2;
        alert("Presse ctrl+r or f5 to restart. You have "+score+" points.");
    };
    if (reponse2 == "GO") {
        score2=score;
        back = 2;
        life = 5;
        limit = 15;
        speed1 = 1;
        speed2 = 1;
        level = 2;
        red1=2120;
        red3=2520;
        blue1=1920;
        blue3=2320;
        score=0;
        plus=1;
        red1=1920+distance, red2=650;
        red3=1920+distance2, red4=650;
        red5=1920+distance5, red6=650;
        blue1=1920+distance3, blue2=170;
        blue3=1920+distance4, blue4=170;
        blue5=1920+distance6, blue6=170;
        b1=5000+distanceB, b2=215;
        b3=5500+distanceB1, b4=695;
        alert("Welcome to the level 2 "+name+" now you have 5 life but you need 125 more points to complete this level!!")
    }else {
        score=score1+score2;
        alert("Presse ctrl+r or f5 to restart. You have "+score+" points.");
    };
    }
    if (life <= 0 && level == 3) {
        score=score1+score2;
        alert(name+" you finished with "+score+"point!! But I am sure you can do better...")
        alert("Presse ctrl+r or f5 to restart.");
    };
}
function draw() {
    // tuk naprogramirai kakvo da se risuva
    if (back == 1) {
        drawImage(backClouds,0, 0, 1920, 960);
    };
    if (back == 2) {
        drawImage(backAlien,0,0,1920,960);
    };
    if (back == 3) {
        drawImage(backWaterfall,0,0,1920,960);
    };
    drawImage(explosion,miX,miY,90,90);
    drawImage(enemyRed1,myX,myY,200,480);
    drawImage(pillRed,b1,b2,50,50);
    drawImage(pillBlue,b3,b4,50,50);
    if (back == 1) {
        drawImage(boxItem,red1,red2,140,140);
        drawImage(boxItem,red3,red4,140,140);
        drawImage(boxItem,blue1,blue2,140,140);
        drawImage(boxItem,blue3,blue4,140,140);
    };
    if (back == 2) {
        drawImage(boxItemDisabled,red1,red2,140,140);
        drawImage(boxItemDisabled,red3,red4,140,140);
        drawImage(boxItemDisabled,blue1,blue2,140,140);
        drawImage(boxItemDisabled,blue3,blue4,140,140); 
        drawImage(boxItemDisabled,blue5,blue6,140,140); 
        drawImage(boxItemDisabled,red5,red6,140,140); 
    };
    if (back == 3) {
        drawImage(boxAlienYellowSquare,red1,red2,140,140);
        drawImage(boxAlienYellowSquare,red3,red4,140,140);
        drawImage(boxAlienYellowSquare,blue1,blue2,140,140);
        drawImage(boxAlienYellowSquare,blue3,blue4,140,140); 
        drawImage(boxAlienYellowSquare,blue5,blue6,140,140); 
        drawImage(boxAlienYellowSquared,red5,red6,140,140); 
    }
    
};
function keydown(key) {
    if (key == 38) {
        myY = 0;
    };
    if (key == 40) {
        myY = 480;
    };
    if (key == 38) {
        miY = 193;
    };
    if (key == 40) {
        miY = 673;
    };
};