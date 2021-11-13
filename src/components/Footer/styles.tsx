import styled from "styled-components";
import { darkColors } from "../../theme/colors";
import { Flex } from "../Box";

export const StyledFooter = styled.div`
  background: ${darkColors.backgroundAlt};
  width: 100%;
  padding-bottom: 50px;
  padding-top: 70px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-bottom: 34px;
    padding-top: 29px;
  };
`;

export const StyledIncubatedBy = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 35px;
  justify-content: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom: 57px;
  };
`;
