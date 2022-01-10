import React from "react";
import NewContact from "../../button/NewContact";
import styles from "./AddContact.module.css";


const Add = () => {
  return (
    <div className={styles.Add}>
      <div className={styles.AddLeft}>
        <div className={styles.ListMenu} >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <h3>Kontakti</h3>
      </div>
      <NewContact />
    </div>
  );
};

export default Add;
