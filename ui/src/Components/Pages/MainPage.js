import ResulList from "../ResultList";
import "./MainPage.css";
import { useReducer } from "react";

const dummy_list = [
  {
    key: Math.random(),
    schoolName: "Albay Çolak",
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
      <navbar>
        <h1>2023 Cumhurbaşkanlığı Seçimleri</h1>
      </navbar>
      <main>
        <p>harita</p>

        <div className="side-bar">
          <h>{state.electionType}</h>
          <ResulList electionResults={dummy_list} />
        </div>
      </main>
      <footer>
        <button className="d" onClick={changeResultHandler}>
          {state.text}
        </button>
      </footer>
    </>
  );
};

export default MainPage;
