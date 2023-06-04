import SchoolList from "./UI/SchoolList";
import { useState } from "react";

const ResulList = (props) => {
  const [showSchool, setShowSchool] = useState({});

  const detailHandler = (schoolName) => {
    setShowSchool((prevState) => ({
      ...prevState,
      [schoolName]: !prevState[schoolName],
    }));
  };

  return (
    <>
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
    </>
  );
};

export default ResulList;
