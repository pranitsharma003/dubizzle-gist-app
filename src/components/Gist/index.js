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

const Gist = ({ gist }) => {
  // Adding Icons to an array, so adding icons in future is easier and straightforward
  const iconsArray = [
    { text: `${Object.keys(gist.files).length} files`, icon: "" },
    { text: "Fork", icon: "" },
    { text: "Comments", icon: "" },
    { text: "Stars", icon: "" },
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
            return <GistActionButton text={item.text} />;
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
    </Wrapper>
  );
};

export default Gist;
