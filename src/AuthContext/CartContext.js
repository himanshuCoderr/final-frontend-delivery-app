import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartDetailprovider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false);
    const [loggedUserData,setLoggedUserData] = useState({})
  return (
    <AuthContext.Provider value={{ loginStatus, setLoginStatus ,loggedUserData ,setLoggedUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
