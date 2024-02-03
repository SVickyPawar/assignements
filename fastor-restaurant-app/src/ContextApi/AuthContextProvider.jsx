import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: localStorage.getItem("fasterToken") || null,
  });

  const login = (payload) => {
    setAuth({ isAuthenticated: payload });
    localStorage.setItem("fasterToken", payload);
  };

  const logout = () => {
    setAuth({ isAuthenticated: null });
    localStorage.removeItem("fasterToken");
  };
  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;