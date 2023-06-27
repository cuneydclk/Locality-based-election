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
  const [electionList, setElectionList] = useState([]);
  const [pList, setPlist] = useState([]);
  const [cList, setClist] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:3001/api/v1/vote/cumhurB").then((response) => {
      setClist(response.data.data.cumhurBaskanligiVote);
    });
    axios
      .get("http://127.0.0.1:3001/api/v1/vote/milletvekili")
      .then((response) => {
        setPlist(response.data.data.milletvekiliVote);
      });
  }, []);

  const reducer = (state, action) => {
    if (action.type === "mv") {
      return {
        type: "mv",
        text: "Milletvekili Sonuçlarını Göster",
        electionType: "Cumhurbaşkanlığı Sonuçları",
        resultList: { dummy_list },
      };
    } else if (action.type === "cb") {
      return {
        type: "cb",
        text: "Cumhurbaşkanlığı sonucunu göster",
        electionType: "Milletvekili Sonuçları",
        resultList: { dummy_list },
      };
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, {
    type: "mv",
    electionType: "Cumhurbaşkanlığı Sonuçları",
    text: "Milletvekili Sonuçlarını Göster",
    resultList: { dummy_list },
  });

  const changeResultHandler = (event) => {
    if (state.type === "mv") {
      dispatch({ type: "cb" });
    } else {
      dispatch({ type: "mv" });
    }
  };
  const mapHandler = (mapname) => {
    setNeighborhoodName(mapname);
    console.log(mapname);
  };
  return (
    <div className={classes["main-page"]}>
      <div className={classes["election-title"]}>
        <h1>2023 Cumhurbaşkanlığı Seçimleri</h1>
      </div>
      <div className={classes.main}>
        <div className={classes.map}>
          <Map mapName={mapHandler} />
          <p>hey</p>
        </div>
        <div>
          {" "}
          <div className={classes["election-type"]}>
            <p>{state.electionType}</p>
          </div>
          <div className={classes.sidebar}>
            <ResulList electionResults={dummy_list} />
          </div>
        </div>
      </div>
      <div>
        <button
          className={classes["election-button"]}
          onClick={changeResultHandler}
        >
          {state.text}
        </button>
      </div>
    </div>
  );
};

export default MainPage;
