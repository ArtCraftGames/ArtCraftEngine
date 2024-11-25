/**
 * @author       Georgii Kharlampiiev <georgii@artcraft.games>
 * @copyright    2024 ArtCraft Supplies Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IAnimation } from "./IAnimation";

export class Static implements IAnimation {
  image: HTMLImageElement;
  showWidth: number;
  showHight: number;
  spriteStartX: number;
  spriteStartY: number;
  spriteWidth: number;
  spriteHight: number;

  constructor(
    imagePath: string,
    spriteStartX: number,
    spriteStartY: number,
    spriteWidth: number,
    spriteHight: number,

    showWidth: number,
    showHight: number,
  ) {
    this.image = new Image();
    this.image.src = imagePath;
    this.showWidth = showWidth;
    this.showHight = showHight;
    this.spriteStartX = spriteStartX;
    this.spriteStartY = spriteStartY;
    this.spriteWidth = spriteWidth;
    this.spriteHight = spriteHight;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(deltaTime: number): void {}

  render(x: number, y: number, ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(
      this.image,
      this.spriteStartX,
      this.spriteStartY,
      this.spriteWidth,
      this.spriteHight,
      x,
      y,
      this.showWidth,
      this.showHight,
    );
  }
}
