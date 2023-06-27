import { createContext, useState } from "react";

const AuthContext = createContext({
  isLogin: false,
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = () => {
    setIsLogin(true);
    localStorage.setItem("login",true)
  };
  const logoutHandler = () => {
    setIsLogin(false);
    localStorage.removeItem("login")
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin: isLogin,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
