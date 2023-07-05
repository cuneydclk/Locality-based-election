import "./LoginForm.css";
import { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || password.trim().length === 0) {
      console.log("Invalid inputs!");
      return;
    }
    const input = {
      username: userName,
      password: password,
    };
    fetch("https://locality-based-election.onrender.com/api/v1/login/", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("başarılı");
          ctx.onLogin();
          navigate("/adminMain");
          // Successful login
          // Handle the response or redirect to a new page
        } else {
          console.log("başarısız");
          setInvalid(true)
          // Invalid credentials
          // Handle the error, display an error message, or perform any necessary actions
        }
      })
      .catch((error) => {
        // Handle any network or server errors
        console.error("Error:", error);
      });
  };

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      {" "}
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
      {invalid && <p>invalid input</p>}
    </div>
  );
};

export default LoginPage;
