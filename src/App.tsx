import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";

function App() {
  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <div className="container">
        <PortfolioPage />
      </div>
    </>
  );
}

export default App;
