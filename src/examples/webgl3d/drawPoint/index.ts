import { getWebGlContext } from "../../../utils/getCanvasContext";
import VSHADER_SROUCE from "./vertex_shader.glsl";
import FSHADER_SOURCE from "./frag.frag";
import { initShaderProgram } from "../../../utils/initShaders";
function DrawPoint() {
  const gl = getWebGlContext("canvas");
  if (gl) {
    const vshader = VSHADER_SROUCE;
    const fshader = FSHADER_SOURCE;
    console.log(vshader);
    console.log(fshader);
    const shaderProgram = initShaderProgram(gl, vshader, fshader);
    if (!shaderProgram) {
      return console.error(" shader 初始化失败");
    }
    console.log(shaderProgram);
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // set default bg color
    gl.clear(gl.COLOR_BUFFER_BIT); // draw canvas with bg color
    gl.drawArrays(gl.POINTS, 0, 1);
    // gl.readPixels()
  }
}

export default DrawPoint;
