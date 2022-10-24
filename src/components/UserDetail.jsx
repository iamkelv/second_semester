import React from "react";
import { useParams } from "react-router-dom";
import { API, ErrorMessages } from "../config/API";
import { useUser } from "../hooks/UserHooks";

export const UserDetail = () => {
  const params = useParams();
  const email = params.email;
  const { data, error, loading } = useUser(API, ErrorMessages.reqError, email);
  console.log(data);
  return (
    <div>
      {" "}
      {loading && <p>Loading...</p>}
      <img src={data.picture.medium} alt="" />
    </div>
  );
};
