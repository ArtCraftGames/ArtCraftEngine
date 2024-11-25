/**
 * @author       Georgii Kharlampiiev <georgii@artcraft.games>
 * @copyright    2024 ArtCraft Supplies Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { Scene } from "../scene/Scene";

export class Camera {
  x: number = 0;
  y: number = 0;
  width: number;
  height: number;
  scene: Scene;

  constructor(viewportWidth: number, viewportHeight: number, scene: Scene) {
    this.width = viewportWidth;
    this.height = viewportHeight;
    this.scene = scene;
  }

  public focusOn(
    targetX: number,
    targetY: number,
    sceneWidth: number,
    sceneHeight: number,
  ): void {
    // Center the camera on the target
    this.x = targetX - this.width / 2;
    this.y = targetY - this.height / 2;

    // Clamp the camera within the scene bounds
    this.x = Math.max(0, Math.min(this.x, sceneWidth - this.width));
    this.y = Math.max(0, Math.min(this.y, sceneHeight - this.height));
  }

  public updateAndRender(
    deltaTime: number,
    ctx: CanvasRenderingContext2D,
  ): void {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    this.scene.gameObjects.forEach((object) => {
      const screenX = object.x - this.x;
      const screenY = object.y - this.y;

      // Only render if within the viewport
      if (
        screenX + this.width >= 0 &&
        screenX <= this.width &&
        screenY + this.height >= 0 &&
        screenY <= this.height
      ) {
        object.update(deltaTime);
        object.render(ctx);
      }
    });
  }
}
