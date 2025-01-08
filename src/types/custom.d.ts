declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "react-tilt";

// custom.d.ts
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}
