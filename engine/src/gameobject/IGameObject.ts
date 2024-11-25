/**
 * @author       Georgii Kharlampiiev <georgii@artcraft.games>
 * @copyright    2024 ArtCraft Supplies Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

export interface IGameObject {
  x: number;
  y: number;
  zIndex?: number;
  update(deltaTime: number): void;
  render(ctx: CanvasRenderingContext2D): void;
}
