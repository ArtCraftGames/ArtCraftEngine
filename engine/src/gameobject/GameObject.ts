/**
 * @author       Georgii Kharlampiiev <georgii@artcraft.games>
 * @copyright    2024 ArtCraft Supplies Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IGameObject } from "./IGameObject";

export class GameObject implements IGameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  zIndex: number;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    zIndex: number = 0,
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.zIndex = zIndex;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(deltaTime: number): void {}

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
