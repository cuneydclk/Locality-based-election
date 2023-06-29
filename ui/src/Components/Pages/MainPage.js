import ResulList from "../ResultList";
import classes from "./MainPage.module.css";
import { useReducer, useState, useEffect } from "react";
import axios from "axios";
import Map from "./Map";

const dummy_list = [
  {
    key: Math.random(),
    schoolName: "Altıntaş",
    ballot_list: [
      {
        ballot_no: "1001",
        results: [
          ["muharrem ince ", "2"],
          ["sinan oğan", "10"],
          ["kemal kılıçdaroğlu", "249"],
          ["erduvan", "0"],
        ],
      },
      {
        ballot_no: "1002",
        results: [
          ["muharrem ince ", "5"],
          ["sinan oğan", "10"],
          ["kemal kılıçdaroğlu", "249"],
          ["erduvan", "0"],
        ],
      },
    ],
  },
  {
    key: Math.random(),
    schoolName: "Gülbahçe",
    ballot_list: [
      {
        ballot_no: "1250",
        results: [
          ["muharrem ince ", "2"],
          ["sinan oğan", "10"],
          ["kemal kılıçdaroğlu", "249"],
          ["erduvan", "0"],
        ],
      },
      {
        ballot_no: "1002",
        results: [
          ["muharrem ince ", "5"],
          ["sinan oğan", "10"],
          ["kemal kılıçdaroğlu", "249"],
          ["EDOĞAN", "0"],
        ],
      },
    ],
  },
];


const MainPage = () => {
  const [neighborhoodName, setNeighborhoodName] = useState("");
  const [pList, setPlist] = useState([]);
  const [cList, setClist] = useState([]);
  const [electionT, setElectionT] = useState("Cumhurbaşkanı Sonuçları");
  const [text, setText] = useState("Milletvekili Sonuçlarını Göster");
  const [eType, setEType] = useState("mv");



  const changeResultHandler = () => {
    if (eType === "mv") {
      setText("Cumhurbaşkanlığı Sonuçlarını göster");
      setElectionT("Milletvekili Sonuçları");
      setEType("cb");
    } else if (eType === "cb") {
      setText("Milletvekili Sonuçlarını göster");
      setElectionT("Cumhurbaşkanlığı Sonuçları");
      setEType("mv");
    }
  };
  const mapHandler = (mapname) => {
    setNeighborhoodName(mapname);
  };
  useEffect(() => {
    axios.get("http://127.0.0.1:3001/api/v1/vote/cumhurB").then((response) => {
      setClist(response.data.data);
    });
    axios
      .get("http://127.0.0.1:3001/api/v1/vote/milletvekili")
      .then((response) => {
        setPlist(response.data.data);
      });
  }, []);

  return (
    <div className={classes["main-page"]}>
      <div className={classes["election-title"]}>
        <h1>2023 Cumhurbaşkanlığı Seçimleri</h1>
      </div>
      <div className={classes.main}>
        <div className={classes.map}>
          <Map mapName={mapHandler} />
        </div>
        <div className={classes.right}>
          {" "}
          <div className={classes["election-type"]}>
            <p>{electionT}</p>
          </div>
          <div className={classes.sidebar}>
            <ResulList
              electionResults={[cList, pList]}
              neighborhoodName={neighborhoodName}
              electionType={eType}
            />
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        <button
          className={classes["election-button"]}
          onClick={changeResultHandler}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default MainPage;
