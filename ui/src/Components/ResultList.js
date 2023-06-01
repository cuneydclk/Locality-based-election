import SchoolList from "./UI/SchoolList";
import { useState } from "react";
const ResulList = (props) => {
  const [showSchool, setShowSchool] = useState(false);

  const detailHandler = (event) => {
    setShowSchool(!showSchool);
  };

  return (
    <>
      {props.electionResults.map((result) => (
        <div>
          <button onClick={detailHandler}>Okul Adı: {result.schoolName}</button>
          {showSchool && <SchoolList ballots={result.ballot_list} />}
        </div>
      ))}
    </>
  );
};

export default ResulList;
