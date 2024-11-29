// game/LetterGame.ts

import { Engine } from "../../../engine/src/Engine";
import { Scene } from "../../../engine/src/scene/Scene";
import { FallingLetter } from "./FallingLetter";

export class LetterGame {
  private engine: Engine;
  private scene: Scene;
  private letters: string[];
  private lastSpawnTime: number;
  private spawnInterval: number;

  constructor(engine: Engine, scene: Scene) {
    this.engine = engine;
    this.scene = scene;
    this.letters = "abcdefghijklmnopqrstuvwxyz".split("");
    this.lastSpawnTime = 0;
    this.spawnInterval = 3; // Spawn every second
  }

  start() {
    this.engine.addCallback((deltaTime: number) => this.update(deltaTime));
  }

  update(deltaTime: number) {
    this.lastSpawnTime += deltaTime;
    // console.log('Letter game Update')
    if (this.lastSpawnTime >= this.spawnInterval) {
      this.spawnLetter();
      this.lastSpawnTime = 0;
    }
  }

  spawnLetter() {
    const randomLetter =
      this.letters[Math.floor(Math.random() * this.letters.length)];
    const randomX = Math.random() * (800 - 50); // Random x position within canvas width
    const speed = 50 + Math.random() * 60;
    const soundPath = `assets/sounds/${randomLetter}.mp3`;

    const letter = new FallingLetter(
      randomLetter,
      randomX,
      0,
      speed,
      soundPath,
      (r: FallingLetter) => this.scene.removeGameObject(r),
    );

    this.scene.addGameObject(letter);
  }
}
