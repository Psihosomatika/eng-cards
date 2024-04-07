import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>&copy; English Cards by Bemadler</p>
        </footer>
    );
};

export default Footer;