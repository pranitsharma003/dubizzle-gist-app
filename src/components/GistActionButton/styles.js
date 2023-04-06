import styled from "styled-components";
import { appSchemeText } from "../../constants/styling-constants";

const GistActionButtonContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: ${appSchemeText};
  margin-left: 15px;
`;

const GistActionButtonText = styled.div`
  margin-left: 5px;
`;

export { GistActionButtonContainer, GistActionButtonText };
