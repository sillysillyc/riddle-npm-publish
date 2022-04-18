declare module "js-wuhu" {
  export const sayHello: <T extends string>(name: T) => `Hello${T}!`;
  export const sayYes: () => "Yes";
}
