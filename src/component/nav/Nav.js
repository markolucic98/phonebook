import React from "react";
import styles from "../nav/Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <div className={styles.pages}>
        <ul>
          <li>Pocetna</li>
          <li>O nama</li>
          <li>Button</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
