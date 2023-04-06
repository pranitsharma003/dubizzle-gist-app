import React from "react";
import GistActionButton from "../GistActionButton";
import {
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
} from "./styles";
import {
  GoRepoForked,
  GoComment,
  GoStar,
  GoChevronLeft,
  GoChevronRight,
  GoFile,
} from "react-icons/go";

const Gist = ({ gist }) => {
  // console.log(gist);
  // Adding Icons to an array, so adding icons in future is easier and straightforward
  const iconsArray = [
    {
      text: `${Object.keys(gist.files).length} files`,
      icon: (
        <>
          <GoChevronLeft />
          <BiDirectionalArrowRightWrapper>
            <GoChevronRight />
          </BiDirectionalArrowRightWrapper>
        </>
      ),
      url: "",
    },
    { text: "Forks", icon: <GoRepoForked />, url: gist.forks_url },
    { text: "Comments", icon: <GoComment />, url: gist.comments_url },
    { text: "Stars", icon: <GoStar />, url: gist.owner.starred_url },
  ];

  return (
    <Wrapper>
      <UserContainer>
        <ProfileContainer>
          <AvatarImage src={gist.owner.avatar_url} alt="Profile Image" />
          <UsernameContainer>{gist.owner.login}</UsernameContainer>
        </ProfileContainer>
        <ButtonContainer>
          {iconsArray.map((item) => {
            return (
              <GistActionButton
                key={item.text}
                text={item.text}
                icon={item.icon}
                url={item.url}
              />
            );
          })}
        </ButtonContainer>
      </UserContainer>
      <TimestampContainer>
        <div>
          Created at: {new Date(gist.created_at).toLocaleDateString("en-GB")}
        </div>
        <UpdatedDate>
          Last updated: {new Date(gist.updated_at).toLocaleDateString("en-GB")}
        </UpdatedDate>
      </TimestampContainer>
      <GistDescription>{gist.description}</GistDescription>
      <FileListWrapper>
        {Object.keys(gist.files).map((fileKey) => {
          return (
            <FileListContainer key={fileKey}>
              <GoFile />
              <FileListText key={fileKey}>
                {gist.files[fileKey].filename}
              </FileListText>
            </FileListContainer>
          );
        })}
      </FileListWrapper>
    </Wrapper>
  );
};

export default Gist;
