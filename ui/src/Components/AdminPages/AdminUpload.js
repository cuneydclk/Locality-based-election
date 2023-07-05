import MenuBar from "../AdminUI/MenuBar";
import classes from "./AdminUpload.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminUpload = (props) => {
  const [electionName, setElectionName] = useState("");
  const [electionDate, setElectionDate] = useState("");
  const [electionD, setElectionD] = useState("");
  const [electionUploaded, setElectionUploaded] = useState(false);
  const [document, setDocument] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

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
    if (document === null) {
      console.log("nulmuş la");
      return;
    }
    setUploading(true);

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
    console.log(response, response2);
    if (response && response2) {
      setElectionUploaded(true);
    }
    setDocument(null);
  };

  return (
    <div>
      {" "}
      <div className={classes.main}>
        <div className={classes.left}>
          <MenuBar />
        </div>

        <div className={classes.right}>
          <h1>Upload Election Page </h1>

          {!electionUploaded && !uploading && (
            <form className={classes["election-cart"]} onSubmit={submitHandler}>
              <label>Election's name</label>
              <input type="text" onChange={nameHandler}></input>

              <label>Election's date</label>
              <input type="text" onChange={dateHandler}></input>

              <label>Election's description</label>
              <input type="text" onChange={dHandler}></input>

              <input
                type="file"
                accept=".json"
                onChange={documentHandler}
              ></input>
              <button value={document}>Upload Election</button>
            </form>
          )}
          {!electionUploaded && uploading && (
            <form className={classes["election-cart"]} onSubmit={submitHandler}>
              <h2>Election is uploading to the system please wait!</h2>
            </form>
          )}
          {electionUploaded && (
            <div className={classes.uploaded}>
              <h2>Election has uploaded to the system succesfully!</h2>
              <button
                onClick={() => {
                  navigate("/adminMain");
                }}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminUpload;
