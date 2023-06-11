import React from "react";
import AppHeader from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import AppFooter from "./Footer/Footer";

const Home = () => {
  return (
    <div style={{display:'grid'}}>
      <AppHeader />
      <Dashboard />
      <AppFooter />
    </div>
  );
};

export default Home;
