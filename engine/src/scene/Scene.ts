/**
 * @author       Georgii Kharlampiiev <georgii@artcraft.games>
 * @copyright    2024 ArtCraft Supplies Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IGameObject } from "../gameobject/IGameObject";

export class Scene {
  width: number;
  height: number;
  gameObjects: IGameObject[];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.gameObjects = [];
  }

  addGameObject(gobj: IGameObject) {
    this.gameObjects.push(gobj);
  }

  removeGameObject(gobj: IGameObject) {
    const index = this.gameObjects.indexOf(gobj);
    console.log(index);
    console.log(JSON.stringify(gobj));
    console.log(JSON.stringify(this.gameObjects));
    if (index !== -1) {
      this.gameObjects.splice(index, 1);
    }
  }
}
