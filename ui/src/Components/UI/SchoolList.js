import React, { useState } from "react";
import classes from "./SchoolList.module.css";

const SchoolList = (props) => {
  const [showBox, setShowBox] = useState({});

  const boxHandler = (boxNumber) => {
    setShowBox((prevState) => ({
      ...prevState,
      [boxNumber]: !prevState[boxNumber],
    }));
  };

  return (
    <div className={classes["school-list-container"]}>
      {props.ballots.map((boxes) => (
        <div key={boxes.ballot_no}>
          <button
            className={classes["box-button"]} // Add the class name here
            onClick={() => boxHandler(boxes.ballot_no)}
          >
            Sandık Numarası: {boxes.ballot_no}
          </button>
          {showBox[boxes.ballot_no] && (
            <div className={classes["box-results"]}>
              {boxes.results.map((candidates, index) => (
                <p  style={{color:"white", fontSize:"18px"}}key={index}>
                  {candidates.name} : {candidates.vote}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SchoolList;
