import React from "react";
import Octicon from "react-octicon";
import Search from "../Search";
import { Wrapper } from "./styles";

function Header() {
  return (
    <Wrapper>
      <Octicon name="mark-github" mega />
      <Search />
    </Wrapper>
  );
}

export default Header;
