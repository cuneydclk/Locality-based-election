import "./App.css";
import { useContext, useEffect } from "react";
import AuthContext from "./store/auth-context";

import LoginPage from "./Components/Pages/LoginForm";
import AdminUpload from "./Components/AdminPages/AdminUpload";
import MainPage from "./Components/Pages/MainPage";
import AdminMainPage from "./Components/AdminPages/AdminMainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const ctx = useContext(AuthContext);
  useEffect(() => {
    const item = localStorage.getItem("login");
    if (item) {
      ctx.onLogin();
    }
  }, []);
  return (
    <div style={{backgroundColor:"lavender"}}>
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          {ctx.isLogin && <Route path="/upload" element={<AdminUpload />} />}

          {ctx.isLogin && (
            <Route path="/adminMain" element={<AdminMainPage />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
