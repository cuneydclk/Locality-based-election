import "./LoginForm.css";
import { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [invalidText, setInvalidText] = useState("");
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || password.trim().length === 0) {
      setInvalidText("Invalid input!");
      setInvalid(true);
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
          ctx.onLogin();
          navigate("/adminMain");
          // Successful login
          // Handle the response or redirect to a new page
        } else {
          setInvalid(true);
          setInvalidText("Incorrect username or password!");
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
        {invalid && <p style={{color:"white", fontFamily:"Inter", fontWeight:"bold", fontSize:"18px", marginTop:"2px"}}>{invalidText}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
