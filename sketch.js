var ship;
var invaders = [];
var bullets = [];

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
    for (var i = 0; i < 6; i++) {
    invaders[i] = new Invaders(i*80+80, 60);
  }
}


function draw() {
  background(0);
  ship.show();

  for (var i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
    for (var j = 0; j < invaders.length; j++) {
      if (bullets[i].hits(invaders[j])) {
        bullets[i].del();
      }
    }
  }

  var edge = false;

  for (var i = 0; i < invaders.length; i++) {
    invaders[i].show();
    invaders[i].move();
    if (invaders[i].x > width || invaders[i].x < 0) {
      edge = true;
    }
  }



  for (var i = bullets.length-1; i >= 0; i--) {
    if (bullets[i].toDelete) {
      bullets.splice(i, 1);
    }
  }


}


function keyReleased() {
  if (key != ' ') {
  }
}


function keyPressed() {
  if (key === ' ') {
    var bullet = new Bullet(ship.x, height);
    bullets.push(bullet);
  }

  if (keyCode === RIGHT_ARROW) {
  } else if (keyCode === LEFT_ARROW) {
  }
}



function Invaders(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;

  this.xdir = 1;



  this.move = function() {
    this.x = this.x + this.xdir;
  }

  this.show = function() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

}

function Ship() {
  this.x = width/2;

  this.show = function() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, height-30, 100, 30);
  }

 

}

function Bullet(x,  y) {
  this.x = x;
  this.y = y - 30;
  this.r = 8;
  this.toDelete = false;

  this.show = function() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.del = function() {
    this.toDelete = true;
  }
  
this.hits = function(invaders) {
    var d = dist(this.x, this.y, invaders.x, invaders.y);
    if (d < this.r + invaders.r) {
      return true;
    } else {
      return false;
    }
  }
  this.move = function() {
    this.y = this.y - 5;
  }

}
