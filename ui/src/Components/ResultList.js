import SchoolList from "./UI/SchoolList";
import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../store/auth-context";
import classes from "./ResulList.module.css";
const ResulList = (props) => {
  const ctx = useContext(AuthContext);
  const [boxResult, setBoxResult] = useState([]);
  const [showBox, setShowBox] = useState(false);

  const boxHandler = () => {
    setShowBox((prevEvent) => !prevEvent);
  };

  const sideHandler = (event) => {
    ctx.onNotShow();
    ctx.onMap(event.name);
  };

  useEffect(() => {
    if (props.electionType === "cb") {
      props.electionResults[1].map((result) => console.log(result.mahalleName));

      const filteredResults = props.electionResults[1].filter(
        (result) => result.mahalleName === ctx.neighborhoodName.adr
      );
      if (filteredResults.length > 0) {
        setBoxResult(filteredResults[0].ballot_list);
      }
    } else {
      const filteredResult = props.electionResults[0].filter(
        (result) => result.schoolName === ctx.neighborhoodName.adr
      );

      if (filteredResult.length > 0) {
        setBoxResult(filteredResult[0].ballot_list);
      }
    }
  }, [
    boxResult,
    ctx.neighborhoodName,
    props.electionResults,
    props.electionType,
  ]);

  if (ctx.showNeighbourhood) {
    return (
      <div className={classes["results-container"]}>
        {ctx.mahalleListesi.map((nb) => (
          <button onClick={() => sideHandler(nb)}>
            {" "}
            <span className="text">{nb.name}</span>
          </button>
        ))}
      </div>
    );
  }
  return (
    !ctx.showNeighbourhood &&
    boxResult.length !== 0 && (
      <div className={classes["results-container"]}>
        <button onClick={boxHandler}>
          <span className="text">{ctx.neighborhoodName.name}</span>
        </button>
        {showBox && <SchoolList ballots={boxResult} />}
      </div>
    )
  );
};

export default ResulList;
