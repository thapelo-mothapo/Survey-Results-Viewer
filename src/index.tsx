import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes";
import "./index.css";
import SideNav from "./components/navigation";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => {
  return (
    <div className="page-container">
      <SideNav />
      <Router />
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
