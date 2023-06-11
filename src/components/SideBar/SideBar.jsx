import React, { useContext } from "react";
import { Layout, Button } from "antd";
import CartContext from "../../context/cart-context";
import { cart_items } from "../../utils/cart-items";
import close from "../../assets/sidebar/close.svg";
import cube from "../../assets/sidebar/cube.svg";
import remove from "../../assets/sidebar/remove.svg";
import info from "../../assets/sidebar/imp.svg";
import gift from "../../assets/sidebar/gift-box.svg";
import styles from "./SideBar.module.css";

const { Sider } = Layout;

const SideBar = () => {
  const cartCtx = useContext(CartContext);
  return (
    <>
{  cartCtx.cartIsShown &&  <Sider className={styles["side-bar"]} width={355}>
      <div className={styles["header-row"]}>
        <div className={styles["close-icon"]} onClick={cartCtx.onCloseCart}>
          {" "}
          <img src={close} alt="close-icon" />{" "}
        </div>
        <p>Your Run Cart</p>
        <div>
          <p>Requests in your run cart</p>
          <div></div>
        </div>
      </div>
      <div className={styles["items-header"]}>
        <p>Product</p>
        <p>Qty.</p>
        <p>Remove</p>
      </div>
      {cart_items.map((item) => {
        return (
          <div className={styles["table-row"]}>
            <div className={styles["cube-icon"]}>
              <img src={cube} alt="" />
            </div>
            <div className={styles.text}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.subtitle}>{item.subtitle}</p>
            </div>
            <input
              id="quantity"
              type="number"
              min="0"
              max="10"
              step="1"
              value={item.quantity}
              className={styles["number-input"]}
            />
            <img src={remove} alt="delete " className={styles["remove-icon"]} />
          </div>
        );
      })}
      <div className={styles.payment}>
        <p className={styles["payment-title"]}>Subtotal</p>
        <p className={styles["payment-subtitle"]}>1.00 DTSUs</p>
      </div>
      <div className={styles.payment}>
        <p className={styles["payment-title"]}>New Payment</p>
        <p className={styles["payment-subtitle"]}>
          No, Inclusive in your package
        </p>
      </div>

      <div className={styles.payment}>
        <p className={styles["payment-title"]}>Total Units Consumed</p>
        <p className={styles["payment-subtitle"]}>1.00 DTSUs</p>
      </div>
      <div className={styles["white-container"]}>
        <Button className={styles.button1}>Checkout</Button>
        <Button className={styles.button2}>Back to Run Information</Button>
      </div>
      <div className={styles["white-container"]}>
        <div className={styles.card1}>
          Your have made a great choose. Let's Run and be ready for a surprise
          <img src={gift} alt="" className={styles["gift-icon"]} />
        </div>
        <div className={styles.card2}>
          <img src={info} alt="" className={styles["info-icon"]} /> Some
          requests can take a week or moreto be delivered and may be subject to
          dependency resolutions related to your
        </div>
      </div>
    </Sider>}
    </>
  );
};

export default SideBar;
