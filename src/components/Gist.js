import React from "react";
import styled from "styled-components";
import GistActionButton from "./GistActionButton";

const Gist = ({ gist }) => {
  console.log(gist);
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
        <div>Created at: {gist.created_at}</div>
        <div>Last updated: {gist.updated_at}</div>
      </TimestampContainer>
      <div>{gist.description}</div>
    </Wrapper>
  );
};

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
  color: rgb(10, 76, 205);
`;

export default Gist;
