import React from "react";
import styles from "../nav/Nav.module.css";
import img1 from "../../img/icon-address.png";
import ButtonContact from "../button/button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "../homePage/HomePage";
import About from "../about/About";
import Contact from "../contact/Contact";
const Nav = () => {
  return (
    <Router>
      <div className={styles.Nav}>
        <div className={styles.navLeft}>
          <img src={img1} className={styles.logoimg} />
          <h3>Kontakti</h3>
        </div>
        <div className={styles.pages}>
          <ul>
            <li>
              <Link className={styles.link} to="/">
                Pocetna
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/about">
                O nama
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/contact">
                <ButtonContact />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Nav;
