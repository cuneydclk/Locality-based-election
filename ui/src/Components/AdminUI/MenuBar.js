import React from "react";
import classes from "./MenuBar.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

function MenuBar() {
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);
  return (
    <div className={classes["menu-bar"]}>
      <h2 className="title">Admin Panel</h2>

      <div className={classes.sidebar}>
        <button
          onClick={() => {
            navigate("/adminMain");
          }}
        >
          MainPage
        </button>
        <button
          onClick={() => {
            navigate("/upload");
          }}
        >
          Upload Election
        </button>
        <button
          className={classes.logout}
          onClick={() => {
            ctx.onLogout();
            navigate("/");
            ctx.onShow();
          }}
        >
          Logout
        </button>
        <button onClick={()=>{
          fetch("http://127.0.0.1:3001/api/v1/deleteVotes")
        }}>Delete Election</button>
      </div>
    </div>
  );
}

export default MenuBar;
