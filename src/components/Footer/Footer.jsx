import React from "react";
import { Layout } from "antd";
import styles from "./Footer.module.css";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className={styles.footer}>
      <p className={styles['footer-text']}>
        <span className={styles['text-span']}>Got questions?</span> Take a look at our <span className={styles['text-span2']}>FAQS</span>, talk
        to us on Twitter <span className={styles['text-span2']}>@icloudready</span> or send an email to{" "}
        <span className={styles['text-span2']}>team@icloud-ready.com</span>
      </p>
    </Footer>
  );
};

export default AppFooter;
