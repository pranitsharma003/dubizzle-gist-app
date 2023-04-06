import React, { useEffect, useState } from "react";
import { getPublicGists } from "../../services/gistService";
import Gist from "../Gist";
import dummyData from "../../dummy-data";
import { Wrapper } from "./styles";

const GistList = () => {
  const [gistData, setGistData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPublicGists()
      .then((result) => {
        if (result.data.length > 0) {
          setGistData(result.data);
        }
        setLoading(false);
      })
      .catch((err) => setError(true));
    // setGistData(dummyData);
  }, []);

  return (
    <Wrapper>
      {error ? (
        <div>Oops. Something went wrong.</div>
      ) : (
        gistData.map((item) => {
          return <Gist gist={item} />;
        })
      )}
    </Wrapper>
  );
};

export default GistList;
