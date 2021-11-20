import { FC } from 'react';
import { CheckboxProps } from "./types";
declare type ICheckboxGroupProps = {
    options: {
        label: string;
        value: string;
    }[];
    labelColor?: string;
    itemWidth?: string;
} & CheckboxProps;
export declare const CheckboxGroup: FC<ICheckboxGroupProps>;
export {};
