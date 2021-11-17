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
        <img
          src="https://crypto-upload.s3.ap-southeast-1.amazonaws.com/cryptoyou/babyswap+logo+black.png"
          alt="alt"
          width="156px"
        />
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
