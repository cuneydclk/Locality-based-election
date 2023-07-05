import MenuBar from "../AdminUI/MenuBar";
import classes from "./AdminUpload.module.css";
import { useState } from "react";
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
      setElectionDate(event.target.value);
    }
  };
  const dHandler = (event) => {
    if (event.target.value.length !== 0) {
      setElectionD(event.target.value);
    }
  };
  const documentHandler = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const fileContent = reader.result;
      const jsonData = JSON.parse(fileContent);
      setDocument(jsonData);
      console.log("deneme");
    };

    reader.readAsText(file);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(document);

    const response = await fetch(
      "https://locality-based-election.onrender.com/api/v1/vote/milletvekili/array",
      {
        method: "POST",
        body: JSON.stringify(document[0]),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response2 = await fetch(
      "https://locality-based-election.onrender.com/api/v1/vote/cumhurB/array",
      {
        method: "POST",
        body: JSON.stringify(document[1]),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
