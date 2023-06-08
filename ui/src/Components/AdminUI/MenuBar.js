import React from "react";
import classes from "./MenuBar.module.css";

function MenuBar() {
  return (
    <div className={classes.card}>
      <div className={classes.title}>
        <h2>Admin Panel</h2>
      </div>
      <div className={classes.sidebar}>
        {" "}
        <button>MainPage</button>
        <button>Upload Election</button>
      </div>
    </div>
  );
}

export default MenuBar;
