/**
 * @author       Georgii Kharlampiiev <georgii@artcraft.games>
 * @copyright    2024 ArtCraft Supplies Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { Camera } from "../../../engine/src/camera/Camera";
import { Engine } from "../../../engine/src/Engine";
import { initializeInput } from "../../../engine/src//input/Input";
import { Scene } from "../../../engine/src/scene/Scene";
import { LetterGame } from "./LetterGame";

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

  const letterGame = new LetterGame(engine, mainScene);
  letterGame.start();
  // Start the game with mainScene
  // engine.changeScene(mainScene);
  engine.changeCamera(mainCamera);
  engine.start();
});
