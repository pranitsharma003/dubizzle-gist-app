import React, { useEffect, useState } from "react";
import { getPublicGists } from "../../services/gistService";
import Gist from "../Gist";
import dummyData from "../../dummy-data";
import { Wrapper } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { Save, GetList } from "../../redux/actions/gistListActions";
import { isUndefinedNullEmptyString } from "../../utils/common-utils";

const GistList = () => {
  const dispatch = useDispatch();
  const gistData = useSelector((state) => state.gistList);
  const searchText = useSelector((state) => state.search);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (gistData && gistData.length < 1) {
      setLoading(true);
      getPublicGists()
        .then((result) => {
          if (result.data.length > 0) {
            dispatch(Save(result.data));
          }
          setLoading(false);
        })
        .catch((err) => setError(true), setLoading(false));
    }
  }, [gistData, dispatch]);

  return (
    <Wrapper>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Oops. Something went wrong.</div>
      ) : (
        gistData &&
        gistData.map((item) => {
          if (isUndefinedNullEmptyString(searchText)) {
            return <Gist key={item.id} gist={item} />;
          } else if (
            !isUndefinedNullEmptyString(searchText) &&
            !isUndefinedNullEmptyString(item.owner) &&
            !isUndefinedNullEmptyString(item.owner.login) &&
            item.owner.login.toLowerCase().includes(searchText.toLowerCase())
          ) {
            return <Gist key={item.id} gist={item} />;
          }
        })
      )}
    </Wrapper>
  );
};

export default GistList;
