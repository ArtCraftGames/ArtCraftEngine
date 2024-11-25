"use strict";(()=>{var n=class{constructor(a){this.lastTime=0;this.currentCamera=null;let t=document.getElementById(a),e=t.getContext("2d");if(!e)throw new Error("Unable to get canvas rendering context.");this.canvas=t,this.ctx=e,this.callbacks=[]}start(){requestAnimationFrame(this.gameLoop.bind(this))}gameLoop(a){let t=(a-this.lastTime)/1e3;this.lastTime=a,this.currentCamera&&this.currentCamera.updateAndRender(t,this.ctx),this.callbacks&&this.callbacks.forEach(e=>e(t)),requestAnimationFrame(this.gameLoop.bind(this))}changeCamera(a){this.currentCamera=a}addCallback(a){this.callbacks.push(a)}getCanvas(){return this.canvas}};})();
/**
 * @author       Georgii Kharlampiiev <georgii@artcraft.games>
 * @copyright    2024 ArtCraft Supplies Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
