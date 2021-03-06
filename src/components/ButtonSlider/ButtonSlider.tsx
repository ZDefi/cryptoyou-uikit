import React, {useState} from "react";
import styled, { DefaultTheme } from "styled-components";
import ChevronLeft from "../Svg/Icons/ChevronLeft";
import ChevronRight from "../Svg/Icons/ChevronRight";
import Flex from "../Box/Flex";
import { ButtonSliderProps, ListButton } from "./types";

const COLORS = {
    enable: '#FFC85D',
    disable: '#B2B2B2'
}

const ImageBox = styled.img<{ vertical?: boolean, active?: boolean }>`
  width: 80px;
  height: 80px;
  border: 4px solid ${({ theme, active }) => active ? COLORS.enable : COLORS.disable};
  margin: ${({ vertical }) => (vertical ? "15px 0" : "0 15px")};
  border-radius: 50%;
  cursor: pointer;
`;

const StyledButtonSlider = styled(Flex)<{ vertical?: boolean }>`
  align-items: center;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
`;

const ArrowBox = styled.div<{ vertical?: boolean, active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ vertical }) => (vertical ? "rotate(90deg)" : "")};
  border: 3px solid ${({ active }) => active ? COLORS.enable : COLORS.disable};
  border-radius: 50%;
  cursor: pointer;
`;

const Pagination = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #FFC85D;
  flex: 1;
  text-align: center;
`;


const ButtonSlider: React.FC<ButtonSliderProps> = (props) => {
    const { list = [], onChange, vertical , defaultIndex = 0, type = 'common' } = props;
    const [activeIndex, setActiveIndex] = useState(defaultIndex)
    const handleLeftClick = () => {
        if (activeIndex > 0) {
            const index = activeIndex - 1
            setActiveIndex(index)
            onChange?.(index, list[index])
        }
    }
    const handleRightClick = () => {
        if (activeIndex < list.length - 1) {
            const index = activeIndex + 1
            setActiveIndex(index)
            onChange?.(index, list[index])
        }
    }

    const handleItemClick = (index: any) => {
        if (index !== activeIndex) {
            setActiveIndex(index)
            onChange?.(index, list[index])
        }
    }
    return (
        <StyledButtonSlider vertical={vertical}>
            <ArrowBox vertical={vertical} onClick={handleLeftClick} active={activeIndex > 0}>
                <ChevronLeft width={50} color={ activeIndex > 0 ? COLORS.enable : COLORS.disable }/>
            </ArrowBox>
            {
                type === 'common' ? <Pagination>{activeIndex + 1}/{list.length + 1}</Pagination> :
                    list.map((item, index) => (
                            <ImageBox
                                src={item.url}
                                onClick={() => handleItemClick(index)}
                                vertical={vertical}
                                active={index === activeIndex}/>
                        ))
            }

            <ArrowBox vertical={vertical} onClick={handleRightClick} active={activeIndex < list.length - 1}>
                <ChevronRight width={50} color={ activeIndex < list.length - 1 ? COLORS.enable : COLORS.disable }/>
            </ArrowBox>
        </StyledButtonSlider>
    );
};

export default ButtonSlider;
