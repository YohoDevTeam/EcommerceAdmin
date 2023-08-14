import { createContext, useEffect, useState, useContext } from "react";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [dbUser, setDbUser] = useState();

  useEffect(() => {
    const user = localStorage.getItem("name");
    if (user) {
      setDbUser(true);
    }
    if (!user) {
      setDbUser(false);
    }
  }, [dbUser]);

  return (
    <AuthContext.Provider value={{ dbUser, setDbUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
