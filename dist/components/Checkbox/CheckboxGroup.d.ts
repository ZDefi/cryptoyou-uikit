import { FC } from 'react';
import { CheckboxProps } from "./types";
declare type IOptions = {
    label: string;
    value: string;
    checked?: boolean;
}[];
declare type ICheckboxGroupProps = {
    options: IOptions;
    labelColor?: string;
    itemWidth?: string;
    value: string[];
    onChange: (arr: string[]) => void;
} & CheckboxProps;
export declare const CheckboxGroup: FC<ICheckboxGroupProps>;
export {};
