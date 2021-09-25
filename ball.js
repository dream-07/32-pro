class Ball {
    constructor(x, y) {
      var options = {
        restitution: 0.8,
        density: 0.001,
      };
      this.r = 30;
      this.body = Bodies.circle(x, y, this.r, options);
      World.add(world, this.body);
    }
  
    show() {
      var pos = this.body.position;
      push();
      ellipseMode(RADIUS)
      translate(pos.x, pos.y);
     // rotate(angle);
      noStroke();
    fill("white");
    ellipse(0,0, this.r,this.r)
      pop();
  
    }
  }
  