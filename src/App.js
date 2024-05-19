import "./styles.css";
import React, { useState } from "react";
import Header from "./component/Header";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Place from "./pages/Place";
import Culture from "./pages/Culture";
import Profile from "./pages/Profile";
import Footer from "./component/Footer";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Weather":
          return <Weather />;
      case "Place":
        return <Place />;
      case "Culture":
        return <Culture />;
      case "Profile":
        return <Profile />;
      default:
        return null;
    }
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header currentPage={currentPage} handleNavigation={handleNavigation} />
      <div className="content">{renderPage()}</div>
      <Footer />
    </div>
  );
};

export default App;
