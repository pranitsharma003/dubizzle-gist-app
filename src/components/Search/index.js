import React from "react";
import Octicon from "react-octicon";
import { Wrapper, InputBox, Input } from "./styles";

const Search = () => {
  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input placeholder="Search Gists for the username" />
      </InputBox>
    </Wrapper>
  );
};

export default Search;
