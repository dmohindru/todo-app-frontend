import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Keycloak from "keycloak-js";

/*
Init Options
*/

let initOptions = {
  url: "http://localhost:8180",
  realm: "todoapp",
  clientId: "todo-react-client",
};

let kc = new Keycloak(initOptions);

kc.init({
  onLoad: "login-required",
  checkLoginIframe: true,
  pkceMethod: "S256",
}).then(
  (auth) => {
    console.log("keycloak login auth object", auth);
    if (!auth) {
      window.location.reload();
    } else {
      // successful authentication
      console.log("Authentication");
      console.log("auth", auth);
      console.log("Keycloak", kc);
      console.log("Access Token", kc.token);

      kc.onTokenExpired = () => {
        console.log("token expire");
      };
    }
  },
  () => {
    console.log("Authentication failed");
  }
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
