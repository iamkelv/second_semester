import React from "react";

export const ErroBound = ({ err }) => {
  return (
    <div style={{ background: "red", width: "300px", display: "flex" }}>
      {err}
    </div>
  );
};
