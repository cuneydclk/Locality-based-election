import { useState, useEffect } from "react";
import MenuBar from "../AdminUI/MenuBar";
import classes from "./AdminMainPage.module.css";
import ResulList from "../ResultList";
import axios from "axios";
import Map from "../Pages/Map";

const AdminMainPage = () => {
  const [neighborhoodName, setNeighborhoodName] = useState({});
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
    if (mapname === "Altıntaş") {
      setNeighborhoodName({
        name: mapname,
        adr: "ALTINTAŞ MAH.",
      });
    } else if (mapname === "Atatürk") {
      setNeighborhoodName({
        name: mapname,
        adr: "ATATÜRK MAH.",
      });
    } else if (mapname === "Bademler") {
      setNeighborhoodName({
        name: mapname,
        adr: "BADEMLER MAH.",
      });
    } else if (mapname === "Balıklıova") {
      setNeighborhoodName({
        name: mapname,
        adr: "BALIKLIOVA MAH.",
      });
    } else if (mapname === "Barbaros") {
      setNeighborhoodName({
        name: mapname,
        adr: "BARBAROS MAH.",
      });
    } else if (mapname === "Birgi") {
      setNeighborhoodName({
        name: mapname,
        adr: "BİRGİ MAH.",
      });
    } else if (mapname === "Camiatik") {
      setNeighborhoodName({
        name: mapname,
        adr: "CAMİATİK MAH.",
      });
    } else if (mapname === "Çamlıçay") {
      setNeighborhoodName({
        name: mapname,
        adr: "ÇAMLIÇAY MAH.",
      });
    } else if (mapname === "Demircili") {
      setNeighborhoodName({
        name: mapname,
        adr: "DEMİRCİLİ MAH.",
      });
    } else if (mapname === "Denizli") {
      setNeighborhoodName({
        name: mapname,
        adr: "DENİZLİ MAH.",
      });
    } else if (mapname === "Gülbahçe") {
      setNeighborhoodName({
        name: mapname,
        adr: "GÜLBAHÇE MAH.",
      });
    } else if (mapname === "Güvendik") {
      setNeighborhoodName({
        name: mapname,
        adr: "GÜVENDİK MAH.",
      });
    } else if (mapname === "Hacı İsa") {
      setNeighborhoodName({
        name: mapname,
        adr: "HACI İSA MAH.",
      });
    } else if (mapname === "İçmeler") {
      setNeighborhoodName({
        name: mapname,
        adr: "İÇMELER MAH.",
      });
    } else if (mapname === "İskele") {
      setNeighborhoodName({
        name: mapname,
        adr: "İSKELE MAH.",
      });
    } else if (mapname === "Kadıovacık") {
      setNeighborhoodName({
        name: mapname,
        adr: "KADIOVACIK MAH.",
      });
    } else if (mapname === "Kalabak") {
      setNeighborhoodName({
        name: mapname,
        adr: "KALABAK MAH.",
      });
    } else if (mapname === "Kuşçular") {
      setNeighborhoodName({
        name: mapname,
        adr: "KUŞÇULAR MAH.",
      });
    } else if (mapname === "M.Fevzi Çakmak") {
      setNeighborhoodName({
        name: mapname,
        adr: "M.FEVZİ ÇAKMAK MAH.",
      });
    } else if (mapname === "Naipli") {
      setNeighborhoodName({
        name: mapname,
        adr: "NAİPLİ MAH.",
      });
    } else if (mapname === "Nohutalan") {
      setNeighborhoodName({
        name: mapname,
        adr: "NOHUTALAN MAH.",
      });
    } else if (mapname === "Ovacık") {
      setNeighborhoodName({
        name: mapname,
        adr: "OVACIK MAH.",
      });
    } else if (mapname === "Özbek") {
      setNeighborhoodName({
        name: mapname,
        adr: "ÖZBEK MAH.",
      });
    } else if (mapname === "Rüstem") {
      setNeighborhoodName({
        name: mapname,
        adr: "RÜSTEM MAH.",
      });
    } else if (mapname === "Sıra") {
      setNeighborhoodName({
        name: mapname,
        adr: "SIRA MAH.",
      });
    } else if (mapname === "Şirinkent") {
      setNeighborhoodName({
        name: mapname,
        adr: "ŞİRİNKENT MAH.",
      });
    } else if (mapname === "Torasan") {
      setNeighborhoodName({
        name: mapname,
        adr: "TORASAN MAH.",
      });
    } else if (mapname === "Uzunkuyu") {
      setNeighborhoodName({
        name: mapname,
        adr: "UZUNKUYU MAH.",
      });
    } else if (mapname === "Yağcılar") {
      setNeighborhoodName({
        name: mapname,
        adr: "YAĞCILAR MAH.",
      });
    } else if (mapname === "Yaka") {
      setNeighborhoodName({
        name: mapname,
        adr: "YAKA MAH.",
      });
    } else if (mapname === "Yelaltı") {
      setNeighborhoodName({
        name: mapname,
        adr: "YELALTI MAH.",
      });
    } else if (mapname === "Yenice") {
      setNeighborhoodName({
        name: mapname,
        adr: "YENİCE MAH.",
      });
    } else if (mapname === "Yenikent") {
      setNeighborhoodName({
        name: mapname,
        adr: "YENİKENT MAH.",
      });
    } else if (mapname === "Yeni") {
      setNeighborhoodName({
        name: mapname,
        adr: "YENİ MAH.",
      });
    } else if (mapname === "Zeytinalanı") {
      setNeighborhoodName({
        name: mapname,
        adr: "ZEYTİNALANI MAH.",
      });
    } else if (mapname === "Zeytineli") {
      setNeighborhoodName({
        name: mapname,
        adr: "ZEYTİNELİ MAH.",
      });
    } else if (mapname === "Zeytinler") {
      setNeighborhoodName({
        name: mapname,
        adr: "ZEYTİNLER MAH.",
      });
    }
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

    
    <div className={classes.main}>
            <div className={classes.left}>
        <MenuBar />
    </div>
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

    </div>
  );
  
}

export default AdminMainPage;
