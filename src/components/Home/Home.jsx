import React, { useContext} from "react";
import CartContext from "../../context/cart-context";
import AppHeader from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import AppFooter from "../Footer/Footer";
import styles from "./Home.module.css"

const Home = () => {
  const cartCtx = useContext(CartContext);
  return (
    <div style={{display:'grid'}}>
      <AppHeader />
      {cartCtx.cartIsShown ? (<div className={styles.background}/>): <Dashboard />}
      <AppFooter />
    </div>
  );
};

export default Home;
