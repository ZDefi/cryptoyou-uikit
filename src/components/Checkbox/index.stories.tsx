import React, { useState } from "react";
import Checkbox from "./Checkbox";
import {CheckboxGroup} from './CheckboxGroup';

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {},
};

const defaultOptions = [
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
  const [value, onChange] = useState(['1', '11']);

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
          options={defaultOptions}
          checkedColor="#131922"
          border="1px solid #1D2633"
          backgroundColor="#131922"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};
