import { useState, useEffect, useContext } from "react";
import MenuBar from "../AdminUI/MenuBar";
import classes from "./AdminMainPage.module.css";
import ResulList from "../ResultList";
import axios from "axios";
import Map from "../Pages/Map";
import AuthContext from "../../store/auth-context";

const AdminMainPage = () => {
  const ctx = useContext(AuthContext);

  const [pList, setPlist] = useState([]);
  const [cList, setClist] = useState([]);
  const [electionT, setElectionT] = useState("Cumhurbaşkanı Sonuçları");
  const [text, setText] = useState("Milletvekili Sonuçlarını Göster");
  const [eType, setEType] = useState("mv");

  const [btext, setBtext] = useState("Mahalleleri Gizle");
  console.log("CONTEXT IS ", ctx.showNeighbourhood);
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

  useEffect(() => {
    axios.get("https://locality-based-election.onrender.com/api/v1/vote/cumhurB").then((response) => {
      setClist(response.data.data);
    });
    axios
      .get("https://locality-based-election.onrender.com/api/v1/vote/milletvekili")
      .then((response) => {
        setPlist(response.data.data);
      });
  }, []);

  useEffect(() => {
    !ctx.showNeighbourhood
      ? setBtext("Mahalleleri Göster")
      : setBtext("Mahalleleri Gizle");
  }, [ctx.showNeighbourhood]);

  const mahalleHandler = () => {
    if (ctx.showNeighbourhood) {
      ctx.onNotShow();
    } else {
      ctx.onShow();
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.left}>
        <MenuBar />
      </div>
      <div className={classes["main-page"]}>
        <div className={classes["election-title"]}>
          <h1>2023 Genel Seçimleri</h1>
        </div>
        <div className={classes.main}>
          <div className={classes.mapcontainer}>
            <div className={classes.map}>
              <Map />
            </div>
          </div>
          <div className={classes.right}>
            {" "}
            <div className={classes["election-type"]}>
              <p>{electionT}</p>
            </div>
            <div className={classes.sidebar}>
              <ResulList
                electionResults={[cList, pList]}
                electionType={eType}
              />
            </div>
            <button className={classes.mv} onClick={mahalleHandler}>
              {btext}
            </button>
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
    </div>
  );
};

export default AdminMainPage;
