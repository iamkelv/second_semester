import React from "react";
import { Link } from "react-router-dom";

export const User = ({ data, isLoading }) => {
  if (isLoading) {
    return <h1>Loading..</h1>;
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data.map((user) => (
        <Link to={`/${user.email}`} key={user.email}>
          <div style={{}}>
            <span>
              <img src={user.picture.medium} alt="" />
            </span>
          </div>
          <div style={{}}>Name: {user.name.first} </div>
        </Link>
      ))}
    </div>
  );
};
