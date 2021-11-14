import { ProgressProps } from "./types";
interface BarProps {
    primary?: boolean;
    $useDark: boolean;
    barColor?: string;
}
export declare const Bar: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BarProps, never>;
interface StyledProgressProps {
    variant: ProgressProps["variant"];
    scale: ProgressProps["scale"];
    $useDark: boolean;
    wrapperColor?: string;
}
declare const StyledProgress: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyledProgressProps, never>;
export default StyledProgress;
