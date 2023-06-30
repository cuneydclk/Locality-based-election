import SchoolList from "./UI/SchoolList";
import React, { useEffect, useState } from "react";
import classes from "./ResulList.module.css";
const ResulList = (props) => {
  const [boxResult, setBoxResult] = useState([]);
  const [showBox, setShowBox] = useState(false);

  const boxHandler = () => {
    setShowBox((prevEvent) => !prevEvent);
  };
console.log(props.neighborhoodName, "neh")
  useEffect(() => {
    if (props.electionType === "cb") {
      const filteredResults = props.electionResults[1].filter(
        (result) => result.mahalleName === props.neighborhoodName.adr
      );
      if (filteredResults.length > 0) {
        setBoxResult(filteredResults[0].ballot_list);
      }
    } else {
      const filteredResult = props.electionResults[0].filter(
        (result) => result.schoolName === props.neighborhoodName.adr
      );
      console.log(filteredResult);
      if (filteredResult.length > 0) {
        setBoxResult(filteredResult[0].ballot_list);
      }
    }
  }, [
    boxResult,
    props.neighborhoodName,
    props.electionResults,
    props.electionType,
  ]);


  return (
    <div className={classes["results-container"]}>
      <button onClick={boxHandler} style={{ fontSize: "XX-LARGE" }}>
        {props.neighborhoodName.name}
      </button>
      {showBox && <SchoolList ballots={boxResult} />}
    </div>
  );
};

export default ResulList;
