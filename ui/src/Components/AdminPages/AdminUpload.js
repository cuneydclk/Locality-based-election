import MenuBar from "../AdminUI/MenuBar";
import classes from "./AdminUpload.module.css";
import { useState } from "react";
import axios from "axios";
const AdminUpload = (props) => {
  const [electionName, setElectionName] = useState("");
  const [electionDate, setElectionDate] = useState("");
  const [electionD, setElectionD] = useState("");
  const [document, setDocument] = useState();

  const nameHandler = (event) => {
    if (event.target.value.length !== 0) {
      setElectionName(event.target.value);
    }
  };

  const dateHandler = (event) => {
    if (event.target.value.length !== 0) {
      setElectionDate(event.target.value)
    }
  };
  const dHandler = (event) => {
    if (event.target.value.length !== 0) {
      setElectionD(event.target.value);
    }
  };
  const documentHandler = (event) => {
    console.log(event);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    axios.post("https://deneme-102b4-default-rtdb.firebaseio.com/hey.json", {
      name: electionName,
      date: electionDate,
      description: electionD,
    });
  };
  return (
    <div className={classes.main}>
      <MenuBar />

      <div className={classes.right}>
        <h1>Upload Election Page </h1>
        <form className={classes["election-cart"]} onSubmit={submitHandler}>
          <label>Election's name</label>
          <input type="text" onChange={nameHandler}></input>

          <label>Election's date</label>
          <input type="text" onChange={dateHandler}></input>

          <label>Election's description</label>
          <input type="text" onChange={dHandler}></input>

          <input type="file" onChange={documentHandler}></input>
          <button>Upload Election</button>
        </form>
      </div>
    </div>
  );
};

export default AdminUpload;
