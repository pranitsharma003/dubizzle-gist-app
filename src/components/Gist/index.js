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
          <GoChevronRight />
        </>
      ),
    },
    { text: "Forks", icon: <GoRepoForked /> },
    { text: "Comments", icon: <GoComment /> },
    { text: "Stars", icon: <GoStar /> },
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
              />
            );
          })}
        </ButtonContainer>
      </UserContainer>
      <TimestampContainer>
        <div>
          Created at: {new Date(gist.created_at).toLocaleDateString("en-GB")}
        </div>
        <div>
          Last updated: {new Date(gist.updated_at).toLocaleDateString("en-GB")}
        </div>
      </TimestampContainer>
      <div>{gist.description}</div>
      {Object.keys(gist.files).map((fileKey) => {
        return (
          <div>
            <GoFile />
            {gist.files[fileKey].filename}
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Gist;
