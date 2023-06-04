import ResulList from "../ResultList";
import "./MainPage.css";
import { useState } from "react";

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
  const [resultType, setResultType] = useState(
    "Milletvekili Sonuçlarını Göster"
  );
  const changeResultHandler = (event) => {};
  return (
    <>
      <navbar>
        <h1>2023 Cumhurbaşkanlığı Seçimleri</h1>
      </navbar>
      <main>
        <p>harita</p>

        <div className="side-bar">
          <h>Cumhurbaşkanlığı Seçimi</h>
          <ResulList electionResults={dummy_list} />
        </div>
      </main>
      <footer>
        <button className="d" onClick={changeResultHandler}>
          {resultType}
        </button>
      </footer>
    </>
  );
};

export default MainPage;
