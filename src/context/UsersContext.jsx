import { createContext, useState } from "react";

export const context = createContext({
  userData: (data) => {
    return {
      name: {},
      email: null,
      phone: null,
      gender: null,
      picture: {},
    };
  },
});

export const UserProvicer = ({ children }) => {
  const [user, setUser] = useState({
    name: {},
    email: "moses",
    phone: null,
    gender: null,
    picture: {},
  });
  const users = (data) => {
    setUser(...data);
  };
  return (
    <context.Provider
      value={{
        userData: users,
      }}
    >
      {children}
    </context.Provider>
  );
};
