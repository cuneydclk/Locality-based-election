import SchoolList from "./UI/SchoolList";
import { useState } from "react";
import classes from "./ResulList.module.css"
const ResulList = (props) => {
  const [showSchool, setShowSchool] = useState({});


  const detailHandler = (schoolName) => {
    setShowSchool((prevState) => ({
      ...prevState,
      [schoolName]: !prevState[schoolName],
    }));
  };

  return (
    <div className={classes["results-container"]}>
      {props.electionResults.map((result, index) => (
        <div key={index}>
          <button onClick={() => detailHandler(result.schoolName)}>
            Okul Adı: {result.schoolName}
          </button>
          {showSchool[result.schoolName] && (
            <SchoolList ballots={result.ballot_list} />
          )}
        </div>
      ))}

    </div>
  );
};

export default ResulList;
