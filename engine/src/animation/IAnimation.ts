/**
 * @author       Georgii Kharlampiiev <georgii@artcraft.games>
 * @copyright    2024 ArtCraft Supplies Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

export interface IAnimation {
  update(deltaTime: number): void;
  render(x: number, y: number, ctx: CanvasRenderingContext2D): void;
}
