import React, {FC, useCallback, useMemo} from 'react';
import styled from 'styled-components';
import { Flex } from '../Box';
import Checkbox from './Checkbox';
import { CheckboxProps, scales, Scales } from "./types";

const CheckboxGroupContainer = styled(Flex)`
    flex-wrap: wrap;
`;

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`;

const getScale = ({ scale }: CheckboxProps) => {
    switch (scale) {
      case scales.XS:
       return "12px";
      case scales.SM:
        return "14px";
      case scales.MD:
        return "20px";
      default:
        return "20px";
    }
};

const remove = (arr: string[], val: string) => { 
    const curIndex = arr.indexOf(val);
    if (curIndex > -1) {
        arr.splice(curIndex, 1);
    }
};

interface ILabelProps {
    scale?: Scales;
}

const LabelContainer: FC<ILabelProps> = styled.div`
    padding: 0 4px;
    color: #fff;
    font-size: ${getScale};
`

type IOptions = {label: string, value: string, checked?: boolean}[];

type ICheckboxGroupProps = {
    options: IOptions;
    labelColor?: string;
    itemWidth?: string;
    value: string[];
    onChange: (arr: string[]) => void; 
} & CheckboxProps;

export const CheckboxGroup: FC<ICheckboxGroupProps> = ({
    options, scale, labelColor, onChange, value = [], ...props
}) => {
    const optionsIn = useMemo(
        () => {
            return options.map(i => ({
                ...i,
                checked: value.includes(i.value),
            }));
        },
        [options, value]
    );

    return (
        <CheckboxGroupContainer>
            {
                optionsIn.map((i, index) => {
                    const onClick = useCallback(
                        (e: any) => {
                            const checkedArr: string[] = [];
                            optionsIn.map((o, oIndex) => {
                                const isChecked = oIndex === index ? e.target.checked : o.checked;
                                if (isChecked) {
                                    checkedArr.push(o.value);
                                } else {
                                    remove(checkedArr, o.value);
                                }
                            });
                            onChange(checkedArr);
                        },
                        [optionsIn, index]
                    );

                    return (
                        <CheckboxContainer key={i.value} className="checkbox-item">
                            <Checkbox
                                name={i.value}
                                scale={scale}
                                onClick={onClick}
                                checked={i.checked}
                                {...props}
                            />
                            <LabelContainer
                                scale={scale}
                            >
                                {i.label}
                            </LabelContainer>
                        </CheckboxContainer>
                    );
                })
            }
        </CheckboxGroupContainer>
    );
};
