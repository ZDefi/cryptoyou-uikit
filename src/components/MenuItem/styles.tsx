import styled from "styled-components";
import { StyledMenuItemProps } from "./types";

export const StyledMenuItemContainer = styled.div<StyledMenuItemProps>`
  position: relative;

  ${({ $isActive, $variant, theme }) =>
    $isActive &&
    $variant === "subMenu" &&
    `
      &:before{
        content: "";
        position: absolute;
        bottom: 0;
        height: 4px;
        width: 100%;
        background-color: ${theme.colors.primary};
        border-radius: 2px 2px 0 0;
      }
    `};
`;

const StyledMenuItem = styled.a<StyledMenuItemProps>`
  position: relative;
  display: flex;
  align-items: center;

  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.secondary : theme.colors.textSubtle)};
  font-size: 16px;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
  border-bottom: ${({ theme, $isActive }) =>
    $isActive
      ? `4px solid ${theme.colors.secondary}`
      : 'none'
  };

  ${({ $statusColor, theme }) =>
    $statusColor &&
    `
    &:after {
      content: "";
      border-radius: 100%;
      background: ${theme.colors[$statusColor]};
      height: 8px;
      width: 8px;
      margin-left: 12px;
    }
  `}

  ${({ $variant }) =>
    $variant === "default"
      ? `
        padding: 0 16px;
        height: 48px;
      `
      : ($variant === 'header'
        ? `
          padding: 0 16px;
          height: 78px;
        `
        : `
          padding: 4px 4px 0px 4px;
          height: 42px;
        `
      )
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default StyledMenuItem;
