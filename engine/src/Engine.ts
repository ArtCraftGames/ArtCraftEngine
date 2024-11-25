/**
 * @author       Georgii Kharlampiiev <georgii@artcraft.games>
 * @copyright    2024 ArtCraft Supplies Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { Camera } from "./camera/Camera";

export class Engine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private lastTime: number = 0;
  private currentCamera: Camera | null = null;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  private callbacks: Function[];

  constructor(canvasId: string) {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Unable to get canvas rendering context.");

    this.canvas = canvas;
    this.ctx = ctx;
    this.callbacks = [];
  }

  public start(): void {
    requestAnimationFrame(this.gameLoop.bind(this));
  }

  private gameLoop(timeStamp: number): void {
    const deltaTime = (timeStamp - this.lastTime) / 1000; // Convert to seconds
    this.lastTime = timeStamp;

    if (this.currentCamera) {
      this.currentCamera.updateAndRender(deltaTime, this.ctx);
    }
    if (this.callbacks) {
      this.callbacks.forEach((f) => f(deltaTime));
    }

    requestAnimationFrame(this.gameLoop.bind(this));
  }

  public changeCamera(camera: Camera): void {
    this.currentCamera = camera;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  public addCallback(callback: Function): void {
    this.callbacks.push(callback);
  }

  public getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }
}
