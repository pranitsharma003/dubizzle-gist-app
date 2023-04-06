import React, { useState } from "react";
import Octicon from "react-octicon";
import { Wrapper, InputBox, Input } from "./styles";

const Search = () => {
  const [enteredText, setEnteredText] = useState("");

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          type="text"
          value={enteredText}
          placeholder="Search Gists for the username"
          onChange={(e) => setEnteredText(e.target.value)}
        />
      </InputBox>
    </Wrapper>
  );
};

export default Search;
