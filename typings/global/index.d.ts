import "react";

declare module "*.ff";

declare module "react" {
  export interface IMutableRefObj<T> {
    current?: T;
    x: string;
  }
}
