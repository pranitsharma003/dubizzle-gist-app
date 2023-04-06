import React from "react";
import { ButtonText } from "./styles";

const GistActionButton = ({ text, icon }) => {
  return (
    <div>
      <ButtonText>
        {icon}
        {text}
      </ButtonText>
    </div>
  );
};

export default GistActionButton;
