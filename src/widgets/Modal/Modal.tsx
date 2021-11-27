import React from "react";
import { useTheme } from "styled-components";
import Heading from "../../components/Heading/Heading";
import getThemeValue from "../../util/getThemeValue";
import { ModalBody, ModalHeader, ModalTitle, ModalContainer, ModalCloseButton, ModalBackButton } from "./styles";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "24px",
  headerBackground = "transparent",
  minWidth = "410px",
  ...props
}) => {
  const theme = useTheme();
  return (
    <ModalContainer minWidth={minWidth} {...props}>
      <ModalHeader background={headerBackground}>
        {
          title &&
              <ModalTitle>
                {onBack && <ModalBackButton onBack={onBack} />}
                <Heading color="#FFB751">{title}</Heading>
              </ModalTitle>
        }
        {!hideCloseButton && <ModalCloseButton onDismiss={onDismiss} />}
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
    </ModalContainer>
  );
};

export default Modal;
