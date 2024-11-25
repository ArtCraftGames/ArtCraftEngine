/**
 * @author       Georgii Kharlampiiev <georgii@artcraft.games>
 * @copyright    2024 ArtCraft Supplies Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { Camera } from "../camera/Camera";

export const keys: { [key: string]: boolean } = {};

window.addEventListener("keydown", (e) => {
  keys[e.code] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.code] = false;
});

export interface MouseState {
  x: number;
  y: number;
  clicked: boolean;
}

export const mouseState: MouseState = {
  x: 0,
  y: 0,
  clicked: false,
};

export function initializeInput(
  canvas: HTMLCanvasElement,
  camera: Camera,
): void {
  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const canvasX = e.clientX - rect.left;
    const canvasY = e.clientY - rect.top;

    // Convert canvas coordinates to world coordinates
    mouseState.x = canvasX + camera.x;
    mouseState.y = canvasY + camera.y;
    mouseState.clicked = true;
  });
}
