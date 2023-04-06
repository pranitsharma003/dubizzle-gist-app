import React from "react";
import { ButtonText } from "./styles";

const GistActionButton = ({ text }) => {
  return (
    <div>
      <ButtonText>{text}</ButtonText>
    </div>
  );
};

export default GistActionButton;
