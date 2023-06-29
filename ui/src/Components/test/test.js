import React, { useEffect, useState } from "react";

function Test(props) {
  const [boxResult, setBoxResult] = useState([]);

  const boxHandler = () => {
    if (props.electionType === "mv") {
      const filteredResults = props.electionResults[1].filter(
        (result) => result.mahalleName === "ALTINTAŞ MAH."
      );
      console.log(filteredResults);
      setBoxResult([...boxResult, ...filteredResults]);
    } else {
      const filteredResults = props.electionResults[0].filter(
        (result) => result.mahalleName === "ALTINTAŞ MAH."
      );
      setBoxResult([...boxResult, ...filteredResults]);
    }
  };

  useEffect(() => {
    boxHandler();
  }, []);

  console.log(boxResult);

  return (
    <div>
      <button>{props.neighborhoodName}</button>
      {boxResult && boxResult.map((box) => <p>{box.boxNumber}</p>)}
    </div>
  );
}

export default Test;
