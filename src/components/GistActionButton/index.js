import React from "react";
import { isUndefinedNullEmptyString } from "../../utils/common-utils";
import {
  GistActionTextContainer,
  GistActionAnchorContainer,
  GistActionButtonText,
} from "./styles";

const GistActionButton = ({ text, icon, url }) => {
  return (
    <>
      {isUndefinedNullEmptyString(url) ? (
        <GistActionTextContainer href={url} target="_blank">
          {icon}
          <GistActionButtonText>{text}</GistActionButtonText>
        </GistActionTextContainer>
      ) : (
        <GistActionAnchorContainer href={url} target="_blank">
          {icon}
          <GistActionButtonText>{text}</GistActionButtonText>
        </GistActionAnchorContainer>
      )}
    </>
  );
};

export default GistActionButton;
