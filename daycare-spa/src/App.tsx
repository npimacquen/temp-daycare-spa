import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login-page/login";
import Main from "./pages/main-page/main";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./pages/home-page/home";
import Logout from "./pages/logout-page/logout";
import { CheckClaims } from "./hooks/check-claims/check-claims";
import SessionModal from "./components/session/session-modal";

const App = () => {
  const redirect = useNavigate();
  const [result, setResult] = useState(Boolean);

  const claims = async () => {
    const response = await CheckClaims();
    setResult(response.data);
  };

  useEffect(() => {
    claims();
    if (result === true) {
      redirect("/main");
    } else if (result === false) {
      redirect("/login");
    } else {
      alert("Server Error!");
    }
  }, [result]);

  return (
    <div>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login">
            <Route index element={<Login />} />
          </Route>
          <Route path="/main">
            <Route index element={<Main />} />
          </Route>
          <Route path="/logout">
            <Route index element={<Logout />} />
          </Route>
          <Route path="/session-modal">
            <Route index element={<SessionModal />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
