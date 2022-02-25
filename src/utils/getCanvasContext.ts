export const getWebGlContext = (
  elemId: string
): WebGLRenderingContext | null => {
  const canvas = document.getElementById(elemId);
  if (canvas && canvas instanceof HTMLCanvasElement) {
    const gl = canvas.getContext("webgl");
    if (gl) {
      return gl;
    }
  }
  return null;
};
export const getCanvas2DContext = (
  elemId: string
): CanvasRenderingContext2D | null => {
  const canvas = document.getElementById(elemId);
  if (canvas && canvas instanceof HTMLCanvasElement) {
    const gl = canvas.getContext("2d");
    if (gl) {
      return gl;
    }
  }
  return null;
};
