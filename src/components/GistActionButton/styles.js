import styled from "styled-components";
import { appSchemeText } from "../../constants/styling-constants";

const GistActionAnchorContainer = styled.a`
  display: flex;
  align-items: center;
  text-align: center;
  color: ${appSchemeText};
  margin-left: 15px;
  text-decoration: none;
`;

const GistActionTextContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: ${appSchemeText};
  margin-left: 15px;
  text-decoration: none;
`;

const GistActionButtonText = styled.div`
  margin-left: 5px;
`;

export {
  GistActionAnchorContainer,
  GistActionTextContainer,
  GistActionButtonText,
};
