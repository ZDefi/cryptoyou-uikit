import React from "react";
import Checkbox from "./Checkbox";
import {CheckboxGroup} from './CheckboxGroup';

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {},
};

const options = [
  {
      value: '1',
      label: '1',
  },
  {
      value: '11',
      label: '11',
  },
];

export const Default: React.FC = () => {
  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <Checkbox />
      </div>
      <div>
        <Checkbox scale="sm" />
      </div>
      <div>CheckboxGroup</div>
      <div>
        <CheckboxGroup
          scale="xs"
          options={options}
          checkedColor="#131922"
          border="1px solid #1D2633"
          backgroundColor="#131922"
        />
      </div>
    </>
  );
};
