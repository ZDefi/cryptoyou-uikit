import React from "react";
import {Text} from '../Text';
import {
  StyledFooter,
  StyledIncubatedBy,
} from "./styles";

const MenuItem: React.FC = () => {
  return (
    <StyledFooter>
      <StyledIncubatedBy>
        <Text fontSize="14px" color="#FFFFFF" mr="20px">Incubated By</Text>
        {/* TODO：图标还没好，先占位 */}
        <div style={{width: 40, height: 40}}></div>
      </StyledIncubatedBy>
      <div style={{width: '100%', textAlign: 'center'}}>
        <Text color="#5C6577">
          Copyright © 2021 thecryptoyou.io All Rights Reserved
        </Text>
      </div>
    </StyledFooter>
  );
};

export default MenuItem;
