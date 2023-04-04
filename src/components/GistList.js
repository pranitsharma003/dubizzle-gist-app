import React, { useEffect, useState } from "react";
import { getPublicGists } from "../services/gistService";
import Gist from "./Gist";
import dummyData from "../dummy-data";
import styled from "styled-components";

const GistList = () => {
  const [gistData, setGistData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // getPublicGists()
    // .then((result) => {
    //     if(result.data.length > 0){
    //         setGistData(result.data);
    //     }
    //      setLoading(false);
    // })
    // .catch(err => setError(true));
    setGistData(dummyData);
  }, []);

  return (
    <Wrapper>
      {gistData.map((item) => {
        return <Gist gist={item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin: auto;
`;

export default GistList;
