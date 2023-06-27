import "./LoginForm.css";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(["admin", "1234"]);
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    //burada sunucudan admin çekilecek
    setUser(["admin", "1234"]);
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || password.trim().length === 0) {
      console.log("Invalid inputs!");
      return;
    }
    if (userName === user[0] && password === user[1]) {
      ctx.onLogin();
      navigate("/adminMain");
    }
    else{
      console.log("Username or password is incorrect")
    }
  };

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="user">Username</label>
      <input
        id="user"
        type="text"
        value={userName}
        onChange={userNameHandler}
      ></input>
      <label htmlFor="user">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={passwordHandler}
      ></input>
      <button className="login">Login!</button>
    </form>
  );
};

export default LoginPage;
