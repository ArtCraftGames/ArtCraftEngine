/**
 * @author       Georgii Kharlampiiev <georgii@artcraft.games>
 * @copyright    2024 ArtCraft Supplies Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { Animation } from "../../../engine/src/animation/Animation";
import { SpriteObject } from "../../../engine/src/gameobject/SpriteObject";
import { mouseState } from "../../../engine/src/input/Input";

export class AnimatedPlayer extends SpriteObject {
  private targetX: number | null = null;
  private targetY: number | null = null;

  constructor(x: number, y: number) {
    const animation = new Animation(
      "./assets/soldierwithshadows/Soldier-Idle.png",
      100,
      100,
      6,
      35,
      35,
      30,
      30,
      50,
      50,
    );
    super(x, y, animation);
  }

  update(deltaTime: number): void {
    super.update(deltaTime);
    // If a mouse click has occurred, set the target position
    if (mouseState.clicked) {
      this.targetX = mouseState.x;
      this.targetY = mouseState.y;
      mouseState.clicked = false;
    }

    // Move towards the target position if it's set
    if (this.targetX !== null && this.targetY !== null) {
      const dx = this.targetX - this.x;
      const dy = this.targetY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 1) {
        const directionX = dx / distance;
        const directionY = dy / distance;

        // Move the player towards the target
        this.x += directionX * 100 * deltaTime;
        this.y += directionY * 100 * deltaTime;
      } else {
        // Player has reached the target
        this.x = this.targetX;
        this.y = this.targetY;
        this.targetX = null;
        this.targetY = null;
      }
    }
  }
}
