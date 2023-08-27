import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();
// NOTE : THIS IS WORKING AS AUTHENTICATION AND ALSO HANDLING SOME GLOBAL State
export const AuthProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false);
    const [loggedUserData,setLoggedUserData] = useState({})
    const [userCart , setUserCart] = useState([])
    const [cartUpdate,setCartUpdate] = useState(false)
    const [searchItem , setSearchItem] = useState([])
    const [searching,setSearching] = useState(false)
    // const []
  return (
    <AuthContext.Provider value={{ loginStatus, setLoginStatus ,loggedUserData ,setLoggedUserData, cartUpdate , setCartUpdate , searchItem , setSearchItem  }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
