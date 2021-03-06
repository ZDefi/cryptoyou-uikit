import React from "react";
import styled from "styled-components";
import noop from "lodash/noop";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Heading from "../Heading/Heading";
import ButtonSlider from "./ButtonSlider";
import { ListButton } from "./types";

const Row = styled.div`
  margin: 32px;
`;

export default {
    title: "Components/ButtonSlider",
    component: ButtonSlider,
    argTypes: {},
} as Meta;


const list = [
    { url: 'https://via.placeholder.com/80x80' },
    { url: 'https://via.placeholder.com/80x80' },
    { url: 'https://via.placeholder.com/80x80' },
]

export const Default: React.FC = () => {
    const onChange = (currentIndex: number, item: ListButton) => {
        console.log('onChange: ', currentIndex, item)
    }
    return (
        <div style={{ padding: "32px", width: "600px" }}>
            <Row>
                <Heading size="md" mb="8px">
                    Common Button
                </Heading>
                <ButtonSlider list={list} defaultIndex={0} onChange={onChange}/>
            </Row>
            <Row>
                <Heading size="md" mb="8px">
                    Image ButtonSlider horizontal
                </Heading>
                <ButtonSlider list={list} type="image" defaultIndex={2} onChange={onChange} />
            </Row>
            <Row>
                <Heading size="md" mb="8px">
                    Image ButtonSlider vertical
                </Heading>
                <ButtonSlider list={list} type="image" defaultIndex={2} onChange={onChange} vertical/>
            </Row>
        </div>
    );
};