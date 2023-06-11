import React from "react";
import { Layout, Row} from "antd";
import { card_info } from "../../utils/card-info";
import PillarCard from "../PillarCard/PillarCard";
import diamond from "../../assets/dashboard/diamond.png";
import green from "../../assets/dashboard/green-icon.svg";
import red from "../../assets/dashboard/red-icon.svg";
import styles from "./Dashboard.module.css";

const { Content } = Layout;

const Dashboard = () => {
  return (
    <Content className={styles["dashboard-container"]}>
      <p className={styles.title}>
        Get Support{" "}
        <img src={diamond} alt="diamond" className={styles["diamond-icon"]} />
      </p>
      <Row className={styles["cards-container"]}>
        {card_info.map((item) => {
          return (
            <PillarCard
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              color={item.color}
            />
          );
        })}
      </Row>
      <Row className={styles["last-row"]}>
        <p className={styles["price-title"]}>
          {" "}
          <img src={green} alt="" />
          <span className={styles["price-title-span"]}>Remaining DTSUs:</span>
          <span className={styles["price-title-span"]}>200</span>
        </p>
        <p className={styles["price-title"]}>
          {" "}
          <img src={red} alt="" />
          <span className={styles["price-title-span"]}> Consumed DTSUs:</span>
          <span className={styles["price-title-span"]}>350</span>
        </p>
      </Row>
    </Content>
  );
};

export default Dashboard;
