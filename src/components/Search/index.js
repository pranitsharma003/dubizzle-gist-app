import React, { useState } from "react";
import Octicon from "react-octicon";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper, InputBox, Input } from "./styles";
import { EnterText } from "../../redux/actions/searchActions";

const Search = () => {
  const enteredText = useSelector((state) => state.search);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          type="text"
          value={enteredText}
          placeholder="Search Gists for the username"
          onChange={(e) => dispatch(EnterText(e.target.value))}
        />
      </InputBox>
    </Wrapper>
  );
};

export default Search;
