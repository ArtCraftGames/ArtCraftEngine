// game/FallingLetter.ts

import { IGameObject } from "../../../engine/src/gameobject/IGameObject";
import { mouseState } from "../../../engine/src//input/Input";

const htmlStandardColors: string[] = [
  'black', 'white', 'red', 'green', 'blue', 'yellow', 'cyan', 'magenta',
  'gray', 'silver', 'maroon', 'olive', 'lime', 'aqua', 'teal', 'navy',
  'purple', 'fuchsia', 'orange', 'brown', 'pink', 'gold', 'beige', 'ivory',
  'khaki', 'lavender', 'indigo', 'violet', 'tan', 'coral', 'turquoise',
  'salmon', 'plum', 'orchid', 'peachpuff', 'seashell', 'slateblue',
  'skyblue', 'springgreen', 'steelblue', 'tomato', 'wheat', 'yellowgreen',
  'darkred', 'darkgreen', 'darkblue', 'darkgray', 'darkcyan', 'darkmagenta',
  'darkorange', 'darkorchid', 'darksalmon', 'darkviolet', 'darkolivegreen',
  'darkslategray', 'darkturquoise', 'darkkhaki', 'darkgoldenrod'
];

export class FallingLetter implements IGameObject {
  letter: string;
  speed: number;
  sound: HTMLAudioElement;
  x: number;
  y: number;
  zIndex?: number | undefined;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  destroy: Function;
  color: string

  constructor(
    letter: string,
    x: number,
    y: number,
    speed: number,
    soundPath: string,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    destroy: Function,
  ) {
    this.x = x;
    this.y = y;
    this.letter = letter;
    this.speed = speed;
    this.destroy = destroy;
    // Load sound
    this.sound = new Audio(soundPath);
    this.color = htmlStandardColors[Math.floor(Math.random() * htmlStandardColors.length)];
  }

  update(deltaTime: number): void {
    // Move letter down the screen
    this.y += this.speed * deltaTime;

    // Remove if off-screen
    if (this.y > 600) {
      this.destroy(this);
    }
    if (mouseState.clicked) {
      const withinX =
        mouseState.x >= this.x - 50 && mouseState.x <= this.x + 50;
      const withinY =
        mouseState.y >= this.y - 50 && mouseState.y <= this.y + 50;
      if (withinX && withinY) {
        this.playSound();
        this.destroy(this);
      }
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.font = "60px Arial";
    ctx.fillText(this.letter, this.x, this.y);
  }

  playSound(): void {
    this.sound.play();
  }
}
