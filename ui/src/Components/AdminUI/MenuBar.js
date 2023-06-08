import React from "react";
import classes from "./MenuBar.module.css";

function MenuBar() {
  return (
    <div className={classes["menu-bar"]}>

        <h2 className="title">Admin Panel</h2>

      <div className={classes.sidebar}>
        <button>MainPage</button>
        <button>Upload Election</button>
      </div>
    </div>
  );
}

export default MenuBar;
