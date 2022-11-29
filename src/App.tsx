import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import PortfolioChart from "./components/PortfolioChart/PortfolioChart";

function App() {
  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <div className="container">
        <PortfolioChart />
      </div>
    </>
  );
}

export default App;
