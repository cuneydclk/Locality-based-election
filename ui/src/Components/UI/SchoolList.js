import { useState } from "react";

const SchoolList = (props) => {
  const [showBox, setShowBox] = useState({});

  const boxHandler = (boxNumber) => {
    setShowBox((prevState) => ({
      ...prevState,
      [boxNumber]: !prevState[boxNumber],
    }));
  };

  return (
    <div>
      {props.ballots.map((boxes) => (
        <div className="ballotBox" key={boxes.ballot_no}>
          <button onClick={() => boxHandler(boxes.ballot_no)}>
            Sandık Numarası: {boxes.ballot_no}
          </button>
          {showBox[boxes.ballot_no] && (
            <div>
              {boxes.results.map((candidates, index) => (
                <p key={index}>
                  {candidates[0]} : {candidates[1]}
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
