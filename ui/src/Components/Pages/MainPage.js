import ResulList from "../ResultList";
import classes from "./MainPage.module.css";
import { useReducer } from "react";
import Map from './Map';

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
const MainPage = (props) => {
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
  return (
    <>
      <navbar className={classes["election-title"]}>
        <h1>2023 Cumhurbaşkanlığı Seçimleri</h1>
      </navbar>
      <main>
      <div className="App">
  
        <div style={{  width: '64%', position: "absolute" , top: '230px', left: '130px'}}>
        <Map />
        </div>
      </div>
        //<img className={classes.map}></img>
        <div className={classes["election-type"]}>
          <p>{state.electionType}</p>
        </div>

        <div className={classes.sidebar}>
          <ResulList electionResults={dummy_list} />
        </div>
      </main>
      <footer>
        <button
          className={classes["election-button"]}
          onClick={changeResultHandler}
        >
          {state.text}
        </button>
      </footer>
    </>
  );
};

export default MainPage;
