import React from "react";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import { Box } from "../../components/Box";
import { ArrowBackIcon, ModalClose } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { ModalProps } from "./types";

export const ModalHeader = styled.div<{ background?: string }>`
  align-items: center;
  background: ${({ background }) => background || "transparent"};
  //border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  display: flex;
  //padding: 12px 24px;
`;

export const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
  margin-bottom: 40px;
`;

export const ModalBody = styled(Flex)`
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalCloseButtonStyle = styled.span`
  position: relative;
  top: -5px;
`;

export const ModalCloseButton: React.FC<{ onDismiss: ModalProps["onDismiss"] }> = ({ onDismiss }) => {
  return (
    <ModalCloseButtonStyle>
        <IconButton
            variant="text" onClick={onDismiss} aria-label="Close the dialog">
            <ModalClose color="none"/>
        </IconButton>
    </ModalCloseButtonStyle>
  );
};

export const ModalBackButton: React.FC<{ onBack: ModalProps["onBack"] }> = ({ onBack }) => {
  return (
    <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
      <ArrowBackIcon color="primary" />
    </IconButton>
  );
};

export const ModalContainer = styled(Box)<{ minWidth: string }>`
  overflow: hidden;
  background: #131922;
  border: 1px solid #FFB751;
  box-sizing: border-box;
  border-radius: 40px;
  padding: 30px;
  // background: ${({ theme }) => theme.modal.background};
  //box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-height: 100vh;
  z-index: ${({ theme }) => theme.zIndices.modal};
  color: #FFD281;

  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: ${({ minWidth }) => minWidth};
    max-width: 100%;
  }
`;
