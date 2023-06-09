import React from "react";
import classes from "./MenuBar.module.css";
import { useNavigate } from "react-router-dom";
import { useContext ,useState } from "react";
import AuthContext from "../../store/auth-context";

function MenuBar() {
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);
  const [electionDeleted,setElectionDeleted]=useState(false)
  
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
        <button
          onClick={() => {
            fetch(
              "https://locality-based-election.onrender.com/api/v1/deleteVotes"
            );
            setElectionDeleted(true)
          }}
        >
          Delete Election
        </button>
        {electionDeleted && <p style={{fontFamily:"Inter", color:"white"}}>Election deleted!</p>}
      </div>
    </div>
  );
}

export default MenuBar;
