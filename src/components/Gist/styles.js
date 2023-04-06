import styled from "styled-components";
import { appSchemeText } from "../../constants/styling-constants";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgb(233, 236, 238);
  padding: 15px 15px 40px 15px;
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
  font-size: 12px;
  margin-top: 5px;
`;

const UpdatedDate = styled.div`
  margin-left: 12px;
`;

const AvatarImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

const UsernameContainer = styled.a`
  margin-left: 10px;
  color: ${appSchemeText};
  text-decoration: none;
`;

const GistDescription = styled.div`
  margin-top: 15px;
  font-weight: 450;
`;

const FileListContainer = styled.a`
  display: flex;
  align-items: center;
  color: ${appSchemeText};
  margin-left: 10px;
  text-decoration: none;
`;

const FileListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`;

const FileListText = styled.div`
  margin-left: 5px;
`;

const BiDirectionalArrowRightWrapper = styled.div`
  margin-left: -5px;
  margin-right: -2px;
  display: flex;
  align-items: center;
`;

export {
  Wrapper,
  UserContainer,
  ProfileContainer,
  ButtonContainer,
  TimestampContainer,
  AvatarImage,
  UsernameContainer,
  GistDescription,
  FileListContainer,
  FileListWrapper,
  FileListText,
  UpdatedDate,
  BiDirectionalArrowRightWrapper,
};
