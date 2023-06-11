import React from "react";
import AppHeader from "./Header/Header";
import AppFooter from "./Footer/Footer";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

const Home = () => {
  return (
    <>
      <AppHeader />

      <AppFooter />
    </>
  );
};

export default Home;
