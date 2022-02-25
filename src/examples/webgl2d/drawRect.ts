import { getCanvas2DContext } from "../../utils/getCanvasContext";

export const DrawRect = () => {
  const canvas2DContext = getCanvas2DContext("canvas");
  if (canvas2DContext) {
    canvas2DContext.fillStyle = "rgba(0,0,0,0.5)";
    canvas2DContext.fillRect(100, 0, 20, 20);
  }
};
