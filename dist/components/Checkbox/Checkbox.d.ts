import { CheckboxProps } from "./types";
export declare const getScale: ({ scale }: CheckboxProps) => "24px" | "20px" | "32px";
declare const Checkbox: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {
    type: "checkbox";
} & CheckboxProps, "type">;
export default Checkbox;
