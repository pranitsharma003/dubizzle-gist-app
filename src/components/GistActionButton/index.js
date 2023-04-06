import React from "react";
import { GistActionButtonContainer, GistActionButtonText } from "./styles";

const GistActionButton = ({ text, icon }) => {
  return (
    <GistActionButtonContainer>
      {icon}
      <GistActionButtonText>{text}</GistActionButtonText>
    </GistActionButtonContainer>
  );
};

export default GistActionButton;
