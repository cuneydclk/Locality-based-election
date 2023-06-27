import React from "react";
import MenuBar from "../AdminUI/MenuBar";
import classes from "./AdminMainPage.module.css";
import MainPage from "../Pages/MainPage";
function AdminMainPage() {
  return (
    <div className={classes.main}>
            <div className={classes.left}>
        <MenuBar />
      </div>

      <div className={classes.right}>
        {" "}
        <MainPage />
      </div>

    </div>
  );
}

export default AdminMainPage;
