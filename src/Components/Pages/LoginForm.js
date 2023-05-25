import "./LoginForm.css";
import { useState } from "react";

const LoginPage = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || password.trim().length === 0) {
      console.log("Invalid inputs!");
      return;
    }

    props.adminValid(userName, password);
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
