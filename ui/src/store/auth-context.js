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
  };
  const logoutHandler = () => {
    setIsLogin(false);
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
