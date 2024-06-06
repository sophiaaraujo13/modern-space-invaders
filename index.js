const scoreEL = document.querySelector("#scoreEL");
const canvas = document.querySelector("canvas");
const c = canvasEl.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

let projectiles = [];
let grids = [];
let invadersProjectiles = [];
let particles = [];
let bombs = [];
let powerUps = [];

let player = new Player();

let keys = {
  ArrowLeft: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  Space: {
    pressed: false
  }
};

let frames = 0;
let randomInterval = Math.floor(Math.random() * 500 + 500);

let game = {
  over: false,
  active: true
};

let score = 0;
let spawnBuffer = 500;
let fps = 60;
let fpsInterval = 1000 / fps;

let msPrev = window.performance.now();

function init() {
  player = new Player();
  projectiles = [];
  grids = [];
  invadersProjectiles = [];
  particles = [];
  bombs = [];
  powerUps = [];
  frames = 0;

  keys = {
    ArrowLeft: {
      pressed: false
    },
    ArrowRight: {
      pressed: false
    },
    Space: {
      pressed: false
    }
  };

  frames = 0;
  randomInterval = Math.floor(Math.random() * 500 + 500);

  game = {
    over: false,
    active: true
  };

  score = 0;

  for (let i = 0; i < 100; i++) {
    particles.push(
      new Particle({
        position: {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height
        },
        velocity: {
          x: 0,
          y: 0.3
        },
        radius: Math.random() * 2,
        color: "white"
      })
    );
  }
}