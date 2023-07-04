import { createContext, useState } from "react";

const AuthContext = createContext({
  isLogin: false,
  onLogin: () => {},
  onLogout: () => {},
  showNeighbourhood: true,
  onShow: () => {},
  onNotShow: () => {},
  onMap: () => {},
  neighborhoodName: {},
  mahalleListesi:[]
});

export const AuthContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [showNeighbourhood, setShowNeighbourhood] = useState(true);
  const [neighborhoodName, setNeighborhoodName] = useState({});
  const mahl = [
    {
      name: "Altıntaş",
      addr: "ALTINTAŞ MAH.",
    },
    {
      name: "Atatürk",
      addr: "ATATÜRK MAH.",
    },
    {
      name: "Bademler",
      addr: "BADEMLER MAH.",
    },
    {
      name: "Balıklıova",
      addr: "BALIKLIOVA MAH.",
    },
    {
      name: "Barbaros",
      addr: "BARBAROS MAH.",
    },
    {
      name: "Birgi",
      addr: "BİRGİ MAH.",
    },
    {
      name: "Camiatik",
      addr: "CAMİATİK MAH.",
    },
    {
      name: "Çamlıçay",
      addr: "ÇAMLIÇAY MAH.",
    },
    {
      name: "Demircili",
      addr: "DEMİRCİLİ MAH.",
    },
    {
      name: "Denizli",
      addr: "DENİZLİ MAH.",
    },
    {
      name: "Gülbahçe",
      addr: "GÜLBAHÇE MAH.",
    },
    {
      name: "Güvendik",
      addr: "GÜVENDİK MAH.",
    },
    {
      name: "Hacı İsa",
      addr: "HACI İSA MAH.",
    },
    {
      name: "İçmeler",
      addr: "İÇMELER MAH.",
    },
    {
      name: "İskele",
      addr: "İSKELE MAH.",
    },
    {
      name: "Kadıovacık",
      addr: "KADIOVACIK MAH.",
    },
    {
      name: "Kalabak",
      addr: "KALABAK MAH.",
    },
    {
      name: "Kuşçular",
      addr: "KUŞÇULAR MAH.",
    },
    {
      name: "M.Fevzi Çakmak",
      addr: "M.FEVZİ ÇAKMAK MAH.",
    },
    {
      name: "Naipli",
      addr: "Naipli MAH.",
    },
    {
      name: "Nohutalan",
      addr: "NOHUTALAN MAH.",
    },
    {
      name: "Ovacık",
      addr: "OVACIK MAH.",
    },
    {
      name: "Özbek",
      addr: "ÖZBEK MAH.",
    },
    {
      name: "Rüstem",
      addr: "RÜSTEM MAH.",
    },
    {
      name: "Sıra",
      addr: "SIRA MAH.",
    },
    {
      name: "Şirinkent",
      addr: "ŞİRİNKENT MAH.",
    },
    {
      name: "Torasan",
      addr: "TORASAN MAH.",
    },
    {
      name: "Uzunkuyu",
      addr: "UZUNKUYU MAH.",
    },
    {
      name: "Yağcılar",
      addr: "YAĞCILAR MAH.",
    },
    {
      name: "Yaka",
      addr: "YAKA MAH.",
    },
    {
      name: "Yelaltı",
      addr: "YELALTI MAH.",
    },
    {
      name: "Yenice",
      addr: "YENİCE MAH.",
    },
    {
      name: "Yenikent",
      addr: "YENİKENT MAH.",
    },
    {
      name: "Yeni",
      addr: "YENİ MAH.",
    },
    {
      name: "Zeytinalanı",
      addr: "ZEYTİNALANI MAH.",
    },
    {
      name: "Zeytineli",
      addr: "ZEYTİNELİ MAH.",
    },
    {
      name: "Zeytinler",
      addr: "ZEYTİNLER MAH.",
    },
  ];

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

  const nbh = () => {
    setShowNeighbourhood(true);
  };

  const nnbh = () => {
    setShowNeighbourhood(false);
  };

  const loginHandler = () => {
    setIsLogin(true);
    localStorage.setItem("login", true);
  };
  const logoutHandler = () => {
    setIsLogin(false);
    localStorage.removeItem("login");
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin: isLogin,
        onLogin: loginHandler,
        onLogout: logoutHandler,
        showNeighbourhood: showNeighbourhood,
        onShow: nbh,
        onNotShow: nnbh,
        onMap: mapHandler,
        neighborhoodName: neighborhoodName,
        mahalleListesi:mahl
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
