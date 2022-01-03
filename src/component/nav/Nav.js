import React from "react";
import styles from "../nav/Nav.module.css";
import img1 from "../../img/icon-address.png";
import ButtonContact from "../button/button";

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <div className={styles.navLeft}>
        <img src={img1} className={styles.logoimg} />
        <h3>Kontakti</h3>
      </div>
      <div className={styles.pages}>
        <ul>
          <li>Pocetna</li>
          <li>O nama</li>
          <li>
            <ButtonContact />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
