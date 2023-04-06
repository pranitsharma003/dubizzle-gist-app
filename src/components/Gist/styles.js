import styled from "styled-components";
import { appSchemeText } from "../../constants/styling-constants";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TimestampContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

const UsernameContainer = styled.div`
  margin-left: 10px;
  color: ${appSchemeText};
`;

export {
  Wrapper,
  UserContainer,
  ProfileContainer,
  ButtonContainer,
  TimestampContainer,
  AvatarImage,
  UsernameContainer,
};
