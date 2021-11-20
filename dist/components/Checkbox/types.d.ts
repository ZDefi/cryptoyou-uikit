export declare const scales: {
    readonly SM: "sm";
    readonly MD: "md";
    readonly XS: "xs";
};
export declare type Scales = typeof scales[keyof typeof scales];
export interface CheckboxProps {
    scale?: Scales;
    checkedColor?: string;
    border?: string;
    backgroundColor?: string;
}
