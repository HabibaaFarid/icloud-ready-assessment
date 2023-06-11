import React from "react";
import { Row, Col } from "antd";
import add from "../../assets/utils/add.svg";
import newTab from "../../assets/utils/new-tab.svg";
import styles from "./PillarCard.module.css";

const PillarCard = (props) => {
  return (
    <div className={styles["card-container"]}>
      <img src={props.img} alt="" className={styles.img} />
      <div
        className={styles["text-container"]}
        style={{ backgroundColor: props.color }}
      >
        <Row>
          <p className={styles["title-price"]}>{props.title}</p>
        </Row>
        <Row>
          <p className={styles.subtitle}> {props.subtitle} </p>
        </Row>
        <Row className={styles["last-row"]}>
          <Col className={styles.price}>
            <p className={styles["title-price"]}> {props.price} </p>
          </Col>
          <Col className={styles["icon-wrapper"]}>
            <div className={styles.icon}>
              <img src={add} alt="add-sign" className={styles["icon-img"]} />
            </div>
            <div className={styles.icon}>
              <img src={newTab} alt="new-tab" className={styles["icon-img"]} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PillarCard;
