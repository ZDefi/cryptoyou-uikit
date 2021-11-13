import React from "react";
import styled from "styled-components";
import noop from "lodash/noop";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Heading from "../Heading/Heading";
import ImageButtonSlider from "./ImageButtonSlider";
import { ImageButton } from "./types";

const Row = styled.div`
  margin: 32px;
`;

export default {
  title: "Components/ImageButtonSlider",
  component: ImageButtonSlider,
  argTypes: {},
} as Meta;


const list = [
  { url: 'https://via.placeholder.com/80x80' },
  { url: 'https://via.placeholder.com/80x80' },
  { url: 'https://via.placeholder.com/80x80' },
]

export const Default: React.FC = () => {
  const onChange = (currentIndex: number, item: ImageButton) => {
    console.log('onChange: ', currentIndex, item)
  }
  return (
    <div style={{ padding: "32px", width: "400px" }}>
      <Row>
        <Heading size="md" mb="8px">
          horizontal
        </Heading>
        <ImageButtonSlider list={list} defaultIndex={0} maxShow={3} onChange={onChange}/>
      </Row>
      <Row>
          <Heading size="md" mb="8px">
              vertical
          </Heading>
        <ImageButtonSlider list={list} defaultIndex={2} maxShow={3} onChange={onChange} vertical/>
      </Row>
    </div>
  );
};