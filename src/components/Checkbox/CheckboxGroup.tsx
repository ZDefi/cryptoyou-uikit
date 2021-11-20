import React, {FC} from 'react';
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

interface ILabelProps {
    scale?: Scales;
}

const LabelContainer: FC<ILabelProps> = styled.div`
    padding: 0 4px;
    color: #fff;
    font-size: ${getScale};
`

type ICheckboxGroupProps = {
    options: {label: string, value: string}[];
    labelColor?: string;
    itemWidth?: string;
} & CheckboxProps;

export const CheckboxGroup: FC<ICheckboxGroupProps> = ({options, scale, labelColor, ...props}) => {
    return (
        <CheckboxGroupContainer>
            {
                options.map(i => {
                    return (
                        <CheckboxContainer key={i.value} className="checkbox-item">
                            <Checkbox name={i.value} scale={scale} {...props} />
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
