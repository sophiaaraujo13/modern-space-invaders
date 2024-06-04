function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  function createScoreLabel({ score = 100, object }) {
    const scoreLabel = document.createElement("Label");
  
    scoreLabel.innerHTML = score;
    scoreLabel.style.position = "absolute";
    scoreLabel.style.color = "white";
    scoreLabel.style.top = object.position.y + "px";
    scoreLabel.style.left = object.position.x + "px";
    scoreLabel.style.userSelect = "none";
  
    document.querySelectorAll("#parentDiv").appendChild(scoreLabel);
  
    gsap.to(scoreLabel, {
      opacity: 0,
      y: -30,
      duration: 0.75,
      onComplete: () => {}
    });
  }
  
  function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
      rectangle1.position.y + rectangle1.height >= rectangle2.position.y &&
      rectangle1.position.x + rectangle1.width > rectangle2.position.x &&
      rectangle1.position.x <= rectangle2.position.x + rectangle2.width
    );
  }
  
  function createParticles({ object, color, frades }) {
    for (let i = 0; i < 15; i++) {
      new Particle({
        position: {
          x: object.position.x + object.width / 2,
          y: object.position.y + object.height / 2
        },
        velocity: {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2
        },
        radius: Math.random() * 3,
        color: color || "#BAA0DE",
        fades: fades
      });
    }
  }