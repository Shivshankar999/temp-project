import React, { createContext, useState } from "react";

export const AuthContext = createContext();
const Authprovider = ({ children }) => {
  const [isAuthenticated, SetIsAuthenticated] = useState(false);

  const login = (username, password) => {
    if (username === "Admin" && password === "123") {
      SetIsAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
