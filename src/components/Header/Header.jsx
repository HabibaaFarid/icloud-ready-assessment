import React from "react";
import { Layout, Col, Row } from "antd";
import img1 from "../../assets/header/himg1.png";
import img2 from "../../assets/header/himg2.png";
import img3 from "../../assets/header/himg3.png";
import img4 from "../../assets/header/himg4.png";
import cart from "../../assets/header/cart.png";
import kitchen from "../../assets/header/kitchen.png";
import styles from "./Header.module.css";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className={styles.header}>
      <Row>
        <Col span={10}>
          <div className={styles["title-container"]}>
            <p className={styles["main-title"]}>Welcome to iCloudReady!</p>
            <p className={styles.subtitle}>
              You have started your{" "}
              <span className={styles["subtitle-span"]}>30 day trial</span>
            </p>
          </div>
        </Col>
        <Col span={10}>
          <div className={styles.architects}>
            <div className={styles.imgs}>
              <img src={img1} alt="man" className={styles.img} />
              <img src={img2} alt="man" className={styles.img} />
              <img src={img3} alt="man" className={styles.img} />
              <img src={img4} alt="woman" className={styles.img} />
              <div className={styles["white-circle"]} />
              <div className={styles.count}>
                <span className={styles["count-text"]}>+3</span>
              </div>
            </div>
            <div className={styles["architects-text"]}>
              <p className={styles["architects-title"]}>
                Our architects are here to help
              </p>
              <p align="top" className={styles["architects-subtitle"]}>
                Book a free session
              </p>
            </div>
          </div>
        </Col>
        <Col span={4} className={styles.icons}>
          <img src={cart} alt="" className={styles.icon1} />
          <img src={kitchen} alt="" className={styles.icon2} />
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
