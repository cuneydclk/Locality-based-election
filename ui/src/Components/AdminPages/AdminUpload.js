import MenuBar from "../AdminUI/MenuBar";
import classes from "./AdminUpload.module.css";
import { useRef } from "react";
const AdminUpload = (props) => {
  const nameRef = useRef("");
  const dateRef = useRef("");
  const dscRef = useRef("");
  const fileRef = useRef(null);

  const sendHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.main}>
      <MenuBar />

      <div className={classes.right}>
        <h1>Upload Election Page </h1>
        <form className={classes["election-cart"]}>
          <label>Election's name</label>
          <input type="text" ref={nameRef}></input>

          <label>Election's date</label>
          <input type="text" ref={dateRef}></input>

          <label ref={dscRef}>Election's description</label>
          <input type="text"></input>

          <input ref={fileRef} type="file"></input>
          <button onClick={sendHandler}>Upload Election</button>
        </form>
      </div>
    </div>
  );
};

export default AdminUpload;
