const SchoolList = (props) => {
  return (
    <>
      <div>
        {props.ballots.map((boxes) => (
          <div className="ballotBox">
            <button>Sandık Numarası: {boxes.ballot_no}</button>
            <p>
              {boxes.results.map((candidates) => (
                <p>
                  {candidates[0]} : {candidates[1]}
                </p>
              ))}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SchoolList;
