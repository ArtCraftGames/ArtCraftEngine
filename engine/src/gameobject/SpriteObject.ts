/**
 * @author       Georgii Kharlampiiev <georgii@artcraft.games>
 * @copyright    2024 ArtCraft Supplies Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IAnimation } from "../animation/IAnimation";
import { IGameObject } from "./IGameObject";

export class SpriteObject implements IGameObject {
  x: number;
  y: number;
  currentAnimation: IAnimation;

  constructor(x: number, y: number, currentAnimation: IAnimation) {
    this.x = x;
    this.y = y;
    this.currentAnimation = currentAnimation;
  }

  update(deltaTime: number): void {
    this.currentAnimation.update(deltaTime);
  }

  render(ctx: CanvasRenderingContext2D): void {
    this.currentAnimation.render(this.x, this.y, ctx);
  }
}
