import React, { useEffect, useState } from "react";
import SchoolList from "../UI/SchoolList";

function Test(props) {
  const [boxResult, setBoxResult] = useState([]);
  const [showBox, setShowBox] = useState(false);

  const boxHandler = () => {
    setShowBox((prevEvent) => !prevEvent);
  };

  useEffect(() => {
    console.log("debug");
    if (props.electionType === "mv") {
      const filteredResults = props.electionResults[1].filter(
        (result) => result.mahalleName === "ALTINTAŞ MAH."
      );
      if (filteredResults.length > 0) {
        setBoxResult(filteredResults[0].ballot_list);
      }
    } else {
      const filteredResults = props.electionResults[0].filter(
        (result) => result.mahalleName === "ALTINTAŞ MAH."
      );
      if (filteredResults.length > 0) {
        setBoxResult(filteredResults[0].ballot_list);
      }
    }
  }, [props.electionResults, boxResult, props.electionType]);

  return (
    <div>
      <button onClick={boxHandler} style={{ fontSize: "XX-LARGE" }}>
        {props.neighborhoodName}
      </button>
      {showBox && 
      <SchoolList ballots={boxResult}/>}
      
    </div>
  );
}

export default Test;
