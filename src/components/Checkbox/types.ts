export const scales = {
  SM: "sm",
  MD: "md",
  XS: "xs",
} as const;

export type Scales = typeof scales[keyof typeof scales];

export interface CheckboxProps {
  scale?: Scales;
  checkedColor?: string;
  border?: string;
  backgroundColor?: string;
}
