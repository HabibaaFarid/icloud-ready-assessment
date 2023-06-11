import { Layout } from "antd";
import Home from "./components/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import { CartContextProvider } from "./context/cart-context";
import "./App.css";

function App() {
  return (
    <CartContextProvider>
      <Layout>
        <Layout>
          <Home />
        </Layout>
        <SideBar />
      </Layout>
    </CartContextProvider>
  );
}

export default App;
