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
        <div key={boxes.boxNumber}>
          <button
            className={classes["box-button"]} // Add the class name here
            onClick={() => boxHandler(boxes.boxNumber)}
          >
            Sandık Numarası: {boxes.boxNumber}
          </button>
          {showBox[boxes.boxNumber] && (
            <div className={classes["box-results"]}>
              {boxes.voteCounts.map((candidates, index) => (
                <p key={index}>
                  {candidates[0]}: {candidates[1]}
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
