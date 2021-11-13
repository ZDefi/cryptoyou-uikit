import { MouseEvent, ReactNode } from "react";

export type ListButton = {
  url: string;
};

export interface ButtonSliderProps {
  vertical?: boolean;
  type?: string;
  defaultIndex?: number;
  maxShow?: number;
  list?: ListButton[];
  onChange?: (index: number, item: ListButton) => void;
}
