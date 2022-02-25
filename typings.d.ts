declare module "*.css";
declare module "*.glsl";
declare module "*.frag";
declare module "*.vert";
interface Window {
  Config: {
    serviceBaseUrl: string;
  };
  debugObj: any;
}
