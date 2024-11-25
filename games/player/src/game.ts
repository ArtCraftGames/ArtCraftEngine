/**
 * @author       Georgii Kharlampiiev <georgii@artcraft.games>
 * @copyright    2024 ArtCraft Supplies Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { Camera } from "../../../engine/src/camera/Camera";
import { Engine } from "../../../engine/src/Engine";
import { initializeInput } from "../../../engine/src/input/Input";
import { Scene } from "../../../engine/src/scene/Scene";
import { AnimatedPlayer } from "./AnimatedPlayer";

window.addEventListener("load", () => {
  const engine = new Engine("gameCanvas");
  const canvas = engine.getCanvas();
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  // Create scenes
  const mainScene = new Scene(canvasWidth, canvasHeight);
  const mainCamera = new Camera(canvasWidth, canvasHeight, mainScene);
  initializeInput(canvas, mainCamera);

  // Create game objects for mainScene
  // const player = new Player(50, 50);
  const player = new AnimatedPlayer(50, 50);
  mainCamera.scene.gameObjects.push(player);

  // Start the game with mainScene
  // engine.changeScene(mainScene);
  engine.changeCamera(mainCamera);
  engine.start();
});
