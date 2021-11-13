import { MouseEvent, ReactNode } from "react";

export type ImageButton = {
  url: string;
};

export interface ImageButtonSliderProps {
  vertical?: boolean;
  defaultIndex?: number;
  maxShow?: number;
  list?: ImageButton[];
  onChange?: (index: number, item: ImageButton) => void;
}
