class Invader {
    constructor({ position }) {
      this.velocity = {
        x: 0,
        y: 0
      };
  
      const image = new Image();
      image.src = "./img/invader.png";
      image.onload = () => {
        const scale = 1;
        this.image = image;
        this.width = image.width * scale;
        this.height = image.height * scale;
        this.position = {
          x: position.x,
          y: position.y
        };
      };
    }
    draw() {
      c.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }
    update() {
      if (this.image) {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
      }
    }
  
    shoot(InvaderProjectile) {
      audio.enemyShoot.play();
      InvaderProjectile.push(
        new InvaderProjectile({
          positon: {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height
          },
          velocity: {
            x: 0,
            y: 5
          }
        })
      );
    }
  }