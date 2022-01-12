import React from "react";
import styles from "./Aboute.module.css";
import img2 from "../../img/logo-bijela-ml-sjec.png";
const About = () => {
  return (
    <div className={styles.About}>
      <h2>O nama</h2>
      <p>
        Onlline <span className={styles.imenik}>Imenik</span> je smišljen u da
        bi zamijenio sada već ustaljene,pomalo dosadne i nepregledne imenike.{" "}
        <br /> <br />
        Iako na svakom modernom telefonu postoji Imenik, mi smo se trudili da
        ovaj imenik poboljša preglednost i dostupnost informacija na jednom
        mjestu. Naročito je bitno napomenuti da je trenutno u razvoju i
        aplikacija predviđena za mobilne telefone koja ce zamjeniti standardne
        difoltne aplikacije koji uz sam uređaj.Aplikacija ce biti dostupna na
        svi platformama (Godle play store, Apple Store i App Galery).{" "}
        <span className={styles.end}>
          {" "}
          <br /> <br />
          Imenik je i dalje u procesu dorade i poboljšavanja korisnickog
          iskustva, zato nas pratite u daljnjem napretku. Vas{" "}
          <span className={styles.ml}>ML</span> tim{" "}
        </span>{" "}
      </p>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      <img src={img2} className={styles.logo} />
      <h3>Hvala na povjerenju</h3>
    </div>
  );
};

export default About;
