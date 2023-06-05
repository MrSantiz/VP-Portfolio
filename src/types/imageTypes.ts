export type SafeNumber = `${number}` | number;

export interface SizesInterface {
  width: SafeNumber;
  height: SafeNumber;
}

export interface ImageInterface extends SizesInterface {
  path: string;
  alt: string;
  mobile?: SizesInterface;
}
