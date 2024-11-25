/**
 * @author       Georgii Kharlampiiev <georgii@artcraft.games>
 * @copyright    2024 ArtCraft Supplies Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IAnimation } from "./IAnimation";

export class Animation implements IAnimation {
  image: HTMLImageElement;
  currentFrameIndex: number;
  frames: Frame[];
  showWidth: number;
  showHight: number;
  frameDuration: number; // Duration of each frame in seconds
  elapsedTime: number; // Time since last frame change

  constructor(
    imagePath: string,

    frameWidth: number,
    frameHight: number,
    frameCount: number,

    spriteStartX: number,
    spriteStartY: number,
    spriteWidth: number,
    spriteHight: number,

    showWidth: number,
    showHight: number,
    frameDuration: number = 0.3,
  ) {
    this.image = new Image();
    this.image.src = imagePath;
    this.currentFrameIndex = 0;
    this.showWidth = showWidth;
    this.showHight = showHight;
    this.frameDuration = frameDuration;
    this.elapsedTime = 0;
    this.frames = [];

    for (let i = 0; i < frameCount; i++) {
      const frame = {
        x: frameWidth * i + spriteStartX,
        y: spriteStartY,
        width: spriteWidth,
        hight: spriteHight,
      };
      this.frames.push(frame);
    }
  }

  update(deltaTime: number): void {
    this.elapsedTime += deltaTime;

    if (this.elapsedTime >= this.frameDuration) {
      this.currentFrameIndex++;
      if (this.currentFrameIndex >= this.frames.length) {
        this.currentFrameIndex = 0;
      }
      this.elapsedTime -= this.frameDuration;
    }
  }

  render(x: number, y: number, ctx: CanvasRenderingContext2D): void {
    const frame = this.frames[this.currentFrameIndex];
    ctx.drawImage(
      this.image,
      frame.x,
      frame.y,
      frame.width,
      frame.hight,
      x,
      y,
      this.showWidth,
      this.showHight,
    );
  }
}

interface Frame {
  x: number;
  y: number;
  width: number;
  hight: number;
}
